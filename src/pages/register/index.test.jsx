import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Register from './index.page'
import { useRouter } from 'next/router'
import { api } from '../../lib/axios'
import { AxiosError } from 'axios'

// Mock do next/router
vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}))

// Mock da API
vi.mock('../../lib/axios', () => ({
  api: {
    post: vi.fn(),
  },
}))

const mockRouter = {
  query: {},
  push: vi.fn(),
}

describe('Register Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    useRouter.mockReturnValue(mockRouter)
    global.alert = vi.fn() // Mock de window.alert
  })

  it('renders correctly', () => {
    render(<Register />)

    expect(screen.getByText('Bem-vindo ao Tá marcado!')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('seu-usuario')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('seu-nome')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Próximo passo/i })).toBeInTheDocument()
  })

  it('displays validation errors', async () => {
    render(<Register />)

    fireEvent.click(screen.getByRole('button', { name: /Próximo passo/i }))

    await waitFor(() => {
      expect(screen.getByText('Usuário deve conter no mínimo 3 letras')).toBeInTheDocument()
      expect(screen.getByText('O nome deve conter no mínimo 3 letras')).toBeInTheDocument()
    })
  })

  it('calls api.post and redirects on successful form submission', async () => {
    api.post.mockResolvedValue({ data: {} }) 
    mockRouter.query = { username: 'test-user' } 

    render(<Register />)

    fireEvent.change(screen.getByPlaceholderText('seu-usuario'), { target: { value: 'test-user' } })
    fireEvent.change(screen.getByPlaceholderText('seu-nome'), { target: { value: 'Test Name' } })
    fireEvent.click(screen.getByRole('button', { name: /Próximo passo/i }))

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/users', {
        name: 'Test Name',
        username: 'test-user',
      })
      expect(mockRouter.push).toHaveBeenCalledWith('/register/connect-calendar')
    })
  })
})