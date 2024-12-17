import { RouterProvider } from 'react-router-dom'

import userContext from './context/userContext'
import routerInst from './router'

import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={routerInst} />
      <userContext.Provider value={{ userName: 'Pepita' }}>
      </userContext.Provider>
    </>
  )
}

export default App
