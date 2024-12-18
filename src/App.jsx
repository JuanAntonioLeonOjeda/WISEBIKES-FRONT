import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import routerInst from './router'

import userContext from './context/userContext'

function App() {
  const [ user, setUser ] = useState({})
  const ctxValue = {
    user,
    setUser
  }
  return (
    <>
      <userContext.Provider value={ctxValue}>
        <RouterProvider router={routerInst} />
      </userContext.Provider>
    </>
  )
}

export default App
