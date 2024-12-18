import { useState } from 'react'

import Button from '../components/Button'

const SignupForm = () => {
  const [ firstName, setFirstName ] = useState('')
  const [lastName, setLastName] = useState('')
  const [ phone, setPhone ] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    const body = {
      firstName,
      lastName,
      phone,
      email,
      password
    }
    
    console.log(body)
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
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
        onChange={handleFirstName}
      />
      <input
        type="text"
        onChange={handleLastName}
      />
      <input
        type="number"
        onChange={handlePhone}
      />
      <input
        type="text"
        onChange={handleEmail}
      />
      <input
        type="text"
        onChange={handlePassword}
      />
      <Button
        text="Signup"
        fn={submit}
      />
    </div>
  )
}

export default SignupForm