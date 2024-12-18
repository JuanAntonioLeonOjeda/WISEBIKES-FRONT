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
  
  const { data, isLoading, isSuccess } = useQuery({ queryKey: ['profile'], queryFn: getOwnAccount })

  if (isSuccess) {
    setUser(data)
  }
  return (
    <div className='h-[80vh]'>
      <h1>HOME</h1>

      {isLoading ? <h3>Loading...</h3> : 
       <h3>Bienvenida {user.firstName} {user.lastName}</h3> 
      }
    </div>
  );
}

export default Home