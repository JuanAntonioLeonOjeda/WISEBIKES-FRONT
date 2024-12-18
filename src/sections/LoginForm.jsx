import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { login } from '../services/auth.service'

import Button from '../components/Button'

const LoginForm = () => {
  const navigate = useNavigate()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submit = async () => {
    const body = {
      email,
      password
    }
    if (email && password) {
      const token = await login(body)
      if (token) {
        // localStorage.setItem('authorization', token)
        localStorage.authorization = token
        navigate('/home')
      }
    } else {
      console.log('Fill in the data')
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='w-1/2 p-10 gap-4 bg-blue-300 h-1/2 flex flex-col'>
      <h3>
        Email:
      </h3>
      <input 
        type="text" 
        onChange={handleEmail}
      />
      <h3>
        Password:
      </h3>
      <input 
        type="text" 
        onChange={handlePassword} 
      />
      <Button
        type="action"
        text="Login" 
        fn={submit}
      />
    </div>
  )
}

export default LoginForm