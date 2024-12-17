import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import userContext from './context/userContext'
import routerInst from './router'

import './App.css'

function App() {

  const [ userName, setUserName ] = useState('Pepita')

  const value = { userName, setUserName}
  return (
    <>
      <userContext.Provider value={value}>
        <RouterProvider router={routerInst} />
      </userContext.Provider>
    </>
  )
}

export default App
