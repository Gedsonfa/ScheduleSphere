import { describe, it, expect, vi } from 'vitest'
import handler from './profile.api'
import { prisma } from '../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}))

vi.mock('../../../lib/prisma', () => ({
  prisma: {
    user: {
      update: vi.fn(),
    },
  },
}))

describe('Profile API Handler', () => {
  const mockReq = (method: string, body?: any) => ({
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

  it('should return 405 if method is not PUT', async () => {
    const req = mockReq('GET')
    const res = mockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  it('should return 401 if session is not present', async () => {
    const req = mockReq('PUT', { bio: 'New bio' })
    const res = mockRes()

    vi.mocked(getServerSession).mockResolvedValueOnce(null)

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.end).toHaveBeenCalled()
  })

  it('should update the user bio and return 204', async () => {
    const req = mockReq('PUT', { bio: 'Updated bio' })
    const res = mockRes()

    vi.mocked(getServerSession).mockResolvedValueOnce({
      user: { id: '1' },
    } as any)

    await handler(req, res)

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { id: '1' },
      data: { bio: 'Updated bio' },
    })

    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.end).toHaveBeenCalled()
  })
})
