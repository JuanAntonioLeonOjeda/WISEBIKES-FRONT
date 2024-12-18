import {useState} from 'react'

import Button from '../components/Button'

const LoginForm = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submit = () => {
    const body = {
      email,
      password
    }
    console.log(body)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        onChange={handleEmail}
      />
      <input 
        type="text" 
        onChange={handlePassword} 
      />
      <Button 
        text="Login" 
        fn={submit}
      />
    </div>
  )
}

export default LoginForm