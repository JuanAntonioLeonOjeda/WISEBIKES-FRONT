import app from './index'

export const login = async (body) => {
  try {
    const { data } = await app.post('auth/login', body)
    if (!data.success) {
      console.error('Login error')
      console.error(data.message)
    } else {
      return data.result
    }
  } catch (error) {
    console.error(error)
  }
}