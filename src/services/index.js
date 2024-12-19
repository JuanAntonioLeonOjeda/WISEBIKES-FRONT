import axios from 'axios'

const app = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default app