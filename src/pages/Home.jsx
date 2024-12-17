import { 
  useEffect,
   useState, 
   useContext 
  } from 'react'
import Button from '../components/Button'

import { Link } from 'react-router-dom'

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Input from '@mui/material/Input';
import {
  getAllUsers
} from '../services/user.service'

import userContext from '../context/userContext'
import testContext from '../context/testContext';

const Home = () => {
  const {setUserName} = useContext(userContext)
  const { student, setStudent } = useContext(testContext)
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

  const handleClick = () => {
    console.log('Click')
  }
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
    return options?.map((opt, idx) => { 
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


  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const handleStudentName = (e) => {
    setStudent(e.target.value)
  }

  return (
    <>
      <h1>HOME</h1>
      <Box sx={{ width: 500, height: 100 }}>
        <Slider
          size="small"
          defaultValue={50}
          aria-label="Small"
          valueLabelDisplay="auto"
          color="secondary"
          onClick={handleClick}
        />
      </Box>
      <Input onChange={handleChange} />
      Change Student Name:
      <Input onChange={handleStudentName} />
      {student}
      {displayOptions()}
      {/* <button onClick={handleClick}>Get All Users</button> */}
      {loading ? <h3>Loading...</h3> : displayUsers()}
    </>
  );
}

export default Home