import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getUsers = async (): Promise<unknown> => {
  const response = await apiClient.get<unknown>('/users')
  return response.data
}

export const login = apiClient.post('/login')

export const register = apiClient.post('/register')

