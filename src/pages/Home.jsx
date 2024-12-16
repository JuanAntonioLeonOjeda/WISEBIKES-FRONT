import { useEffect, useState } from 'react'
import Button from '../components/Button'

import {
  getAllUsers
} from '../services/user.service'

const Home = () => {
  const [ users, setUsers ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const options = [
    {
      text: 'Home',
      path: '/home'
    },
    {
      text: 'About',
      path: '/about'
    }
  ]

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await getAllUsers()
      setUsers(users)
      setLoading(false)
    }
    fetchAllUsers()
  }, [])

  // const handleClick = () =>{
  //   getAllUsers()
  // }

  const displayOptions = () => {
    return options.map((opt, idx) => {
      return (
        <Button
          key={idx}
          text={opt.text}
          path={opt.path}
        />
      )
    })
  }

  const displayUsers = () => {
    return users.map(usr => {
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
    <h1>
      HOME
    </h1>
    { displayOptions() }
    {/* <button onClick={handleClick}>Get All Users</button> */}
    {
      loading ?
      <h3>
        Loading...
      </h3> :
      displayUsers() 
    }
    </>
  )
}

export default Home