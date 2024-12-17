import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
// import { useState } from 'react'
// import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import userContext from './context/userContext'
import testContext from './context/testContext'
import routerInst from './router'

import './App.css'

function App() {

  const [ userName, setUserName ] = useState('Pepita')
  const [student, setStudent] = useState('Johana')
  // const [ student, setStudent ] = useState('Johana')

  const value = { userName, setUserName}
  
  return (
    <>
      {/* <testContext.Provider value={{student,setStudent}}>
        <userContext.Provider value={value}>
          <RouterProvider router={routerInst} />
        </userContext.Provider>
      </testContext.Provider> */}
      <testContext.Provider value={{ student, setUserName }}>
        <userContext.Provider value={value}>
          <RouterProvider router={routerInst} />
        </userContext.Provider>
      </testContext.Provider>
    </>
  )
}

export default App
