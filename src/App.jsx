import { RouterProvider } from 'react-router-dom'

import routerInst from './router'

import './App.css'

function App() {
  
  return (
    <>
      <RouterProvider router={routerInst} />
    </>
  )
}

export default App
