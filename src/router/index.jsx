import { createBrowserRouter } from "react-router-dom"

import Home from '../pages/Home'
import AboutUs from "../pages/AboutUs"
import Access from "../pages/Access"
import Bikes from "../pages/Bikes"
import Root from '../layout/main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Access />
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
        path: '/bikes',
        element: <Bikes />
      },
      {
        path: '/about',
        element: <AboutUs />
      }
    ]
  }

])

export default router