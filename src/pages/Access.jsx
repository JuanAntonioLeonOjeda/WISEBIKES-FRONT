import { useState } from "react"

import LoginForm from "../sections/LoginForm"
import SignupForm from "../sections/SignupForm"

const Access = () => {
  const [ isLogin, setIsLogin ] = useState(true)

  const handleClick = () => {
    setIsLogin(prev => !prev)
  }
  return (
    <>
      <h1>
        WISEBIKES
      </h1>
      {
        isLogin ? 
        <LoginForm /> :
        <SignupForm />
      }
      <p onClick={handleClick}>
        { isLogin ? 
        'Create an account' :
        'I already have an account' 
        }
      </p>
    </>
  )
}

export default Access