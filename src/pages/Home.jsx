import { 
  useEffect,
   useState,
   useContext
  } from 'react'

import { 
  useQuery
 } from '@tanstack/react-query'

import {
  getAllUsers,
  getOwnAccount
} from '../services/user.service'

import userContext from '../context/userContext'

const Home = () => {
  const { user, setUser } = useContext(userContext)

  // const [ users, setUsers ] = useState([])
  // const [ loading, setLoading ] = useState(true)

  // useEffect(() => {
  //   const fetchAllUsers = async () => {
  //     const users = await getAllUsers()
  //     setUsers(users)
  //     setLoading(false)
  //   }
  //   fetchAllUsers()
  // }, [])

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const result = await getOwnAccount()
  //     if (result) {
  //       setUser(result)
  //       setLoading(false)
  //     }
  //   }
  //   fetchProfile()
  // }, [setUser])

  // const displayUsers = () => {
  //   return users?.map(usr => { //? sostiene la posibilidad de que la base de datos este vacia
  //     return (
  //       <div key={usr.id}>
  //         <h3>
  //           {`${usr.firstName} ${usr.lastName}`}
  //         </h3>
  //         <strong>
  //           { usr.email }
  //         </strong>
  //       </div>
  //     )
  //   })
  // }
  
  const { 
    data, 
    isLoading, 
    isSuccess
  } = useQuery({ 
    queryKey: ['account'], 
    queryFn: getOwnAccount 
  })

  useEffect(() => {
    //Igualmente debemos usar setUser dentro de un useEffect, para que React pueda controlar cuándo actualizar el estado
    if (isSuccess) {
      setUser(data)
    }
  }, [isSuccess, data, setUser])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Welcome {user?.firstName} {user?.lastName}!</h1>
    </div>
  )
}

export default Home