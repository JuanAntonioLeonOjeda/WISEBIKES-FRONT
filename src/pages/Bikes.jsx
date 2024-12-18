import { useContext, useState } from "react"
import userContext from "../context/userContext"

import { getOwnAccount } from "../services/user.service"

const Bikes = () => {
  const { user, setUser } = useContext(userContext)
  const [isLoading, setIsLoading] = useState(!Object.keys(user).length)

  const fetchAccount = async () => {
    const result = await getOwnAccount()
    if (result) {
      setUser(result)
      setIsLoading(false)
    }
  }
  if (!Object.keys(user).length) {
    fetchAccount()
  }
  return (
    <>
    <h1>
      DA BIKES
    </h1>
    {
      isLoading ?
      <p>
        Cargando...
      </p> :
          user &&
          user.role === 'admin' &&
          <h3>
            Wow, eres admin. De locos
          </h3>
    }
    </>
  )
}

export default Bikes