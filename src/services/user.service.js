import app from './index'

export const getAllUsers = async () => {
  try {
    const { data }= await app.get('users')
    return data.result
  } catch (error) {
    console.log('Se pudrió')
    console.error(error)
  }
}