import { createBrowserRouter } from "react-router-dom"

import Home from '../pages/Home'
import AboutUs from "../pages/AboutUs";


const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <AboutUs />
  }
])

export default router