import { 
  useEffect,
   useState
  } from 'react'


import {
  getAllUsers
} from '../services/user.service'

const Home = () => {
  const [ users, setUsers ] = useState([])
  const [ loading, setLoading ] = useState(true)

 

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await getAllUsers()
      setUsers(users)
      setLoading(false)
    }
    fetchAllUsers()
  }, [])



  const displayUsers = () => {
    return users?.map(usr => { //? sostiene la posibilidad de que la base de datos este vacia
      return (
        <div key={usr.id}>
          <h3>
            {`${usr.firstName} ${usr.lastName}`}
          </h3>
          <strong>
            { usr.email }
          </strong>
        </div>
      )
    })
  }

  return (
    <>
      <h1>HOME</h1>

      {loading ? <h3>Loading...</h3> : displayUsers()}
    </>
  );
}

export default Home