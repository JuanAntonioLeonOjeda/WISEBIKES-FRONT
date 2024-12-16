import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import routerInst from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ routerInst } />
    <App />
  </StrictMode>,
)
