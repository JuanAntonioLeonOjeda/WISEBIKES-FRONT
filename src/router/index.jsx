import { createBrowserRouter } from "react-router-dom"

import Home from '../pages/Home'
import AboutUs from "../pages/AboutUs"
import Login from "../pages/Login"
import Root from '../layout/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutUs />
      }
    ]
  }
 
])

export default router