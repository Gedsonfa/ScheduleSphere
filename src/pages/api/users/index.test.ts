import { describe, it, expect, vi } from 'vitest'
import handler from './index.api'
import { prisma } from '../../../lib/prisma'
import { setCookie } from 'nookies'
import { NextApiRequest, NextApiResponse } from 'next'

vi.mock('nookies', () => ({
  setCookie: vi.fn(),
}))

describe('User API Handler', () => {
  const mockReq = (method: string, body: any) => ({
    method,
    body,
  }) as unknown as NextApiRequest

  const mockRes = () => {
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      end: vi.fn(),
    }
    return res as unknown as NextApiResponse
  }

  it('should return 405 if method is not POST', async () => {
    const req = mockReq('GET', {})
    const res = mockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  it('should return 400 if username already exists', async () => {
    const findUniqueMock = vi.spyOn(prisma.user, 'findUnique').mockResolvedValueOnce({
      id: '1',
      username: 'testuser',
      name: 'Test User',
      bio: null,
      email: null,
      avatar_url: null,
      created_at: new Date(),
    })

    const req = mockReq('POST', { name: 'Test', username: 'testuser' })
    const res = mockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ message: 'Username already exists' })
    findUniqueMock.mockRestore()
  })

  it('should create a new user and set a cookie', async () => {
    const findUniqueMock = vi.spyOn(prisma.user, 'findUnique').mockResolvedValueOnce(null)
    const createMock = vi.spyOn(prisma.user, 'create').mockResolvedValueOnce({
      id: '2',
      name: 'Test',
      username: 'newuser',
      bio: null,
      email: null,
      avatar_url: null,
      created_at: new Date(),
    })

    const req = mockReq('POST', { name: 'Test', username: 'newuser' })
    const res = mockRes()

    await handler(req, res)

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'Test',
        username: 'newuser',
      },
    })

    expect(setCookie).toHaveBeenCalledWith({ res }, '@ignitecall:userId', '2', {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({
      id: '2',
      name: 'Test',
      username: 'newuser',
      bio: null,
      email: null,
      avatar_url: null,
      created_at: expect.any(Date),
    })
    
    findUniqueMock.mockRestore()
    createMock.mockRestore()
  })
})
