import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import userContext from './context/userContext'
import routerInst from './router'

function App() {
  const [nombre, setNombre] = useState('Pepita')
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
