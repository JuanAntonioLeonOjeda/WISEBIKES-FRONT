import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { 
  QueryClient,
  QueryClientProvider 
} from '@tanstack/react-query'

import routerInst from './router'

import userContext from './context/userContext'

const queryClient = new QueryClient()

function App() {
  const [ user, setUser ] = useState({})
  const ctxValue = {
    user,
    setUser
  }
  return (
    <>
      <userContext.Provider value={ctxValue}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routerInst} />
        </QueryClientProvider>
      </userContext.Provider>
    </>
  )
}

export default App
