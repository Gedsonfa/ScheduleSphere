import { describe, it, expect, vi } from 'vitest'
import handler from './time-intervals.api'
import { prisma } from '../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}))

vi.mock('../../../lib/prisma', () => ({
  prisma: {
    userTimeInterval: {
      create: vi.fn(),
    },
  },
}))

describe('Time Intervals API Handler', () => {
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

  it('should return 405 if method is not POST', async () => {
    const req = mockReq('GET')
    const res = mockRes()

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  it('should return 401 if session is not present', async () => {
    const req = mockReq('POST', { intervals: [] })
    const res = mockRes()

    vi.mocked(getServerSession).mockResolvedValueOnce(null)

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.end).toHaveBeenCalled()
  })

  it('should return 400 if intervals are not valid', async () => {
    const req = mockReq('POST', { intervals: [{ weekDay: 'Monday', startTimeInMinutes: 60, endTimeInMinutes: 120 }] }) // weekDay should be a number
    const res = mockRes()

    vi.mocked(getServerSession).mockResolvedValueOnce({
      user: { id: '1' },
    } as any)

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message: 'Invalid request data',
      errors: expect.any(Array), 
    })
  })

  it('should create time intervals and return 201', async () => {
    const req = mockReq('POST', {
      intervals: [
        { weekDay: 1, startTimeInMinutes: 60, endTimeInMinutes: 120 },
        { weekDay: 2, startTimeInMinutes: 90, endTimeInMinutes: 150 },
      ],
    })
    const res = mockRes()

    vi.mocked(getServerSession).mockResolvedValueOnce({
      user: { id: '1' },
    } as any)

    await handler(req, res)

    expect(prisma.userTimeInterval.create).toHaveBeenCalledTimes(2)
    expect(prisma.userTimeInterval.create).toHaveBeenCalledWith({
      data: {
        week_day: 1,
        time_start_in_minutes: 60,
        time_end_in_minutes: 120,
        user_id: '1',
      },
    })
    expect(prisma.userTimeInterval.create).toHaveBeenCalledWith({
      data: {
        week_day: 2,
        time_start_in_minutes: 90,
        time_end_in_minutes: 150,
        user_id: '1',
      },
    })

    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.end).toHaveBeenCalled()
  })
})
