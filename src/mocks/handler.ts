import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(import.meta.env.VITE_API_URL + '/users', () => {
    return HttpResponse.json({
      id: '1',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
