import { createBrowserRouter } from "react-router-dom"

import Home from '../pages/Home'
import AboutUs from "../pages/AboutUs"
import Root from '../layout/main'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
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