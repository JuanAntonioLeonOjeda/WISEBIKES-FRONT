import { useNavigate } from "react-router-dom"
import Button from '../components/Button'
import Search from "./Search"

const Header = () => {
  const navigate = useNavigate()
  const options = [
    {
      text: 'Home',
      fn: () => navigate('/home')
    },
    {
      text: 'Bikes',
      fn: () => navigate('/bikes')
    },
    {
      text: 'About',
      fn: () => navigate('/about')
    }
  ]

  const displayOptions = () => {
    return options?.map((opt, idx) => {
      return (
        <Button
          key={idx}
          text={opt.text}
          fn={opt.fn}
        />
      )
    })
  }
  return (
    <div>
      {displayOptions()}
      <Search />
    </div>
  )
}

export default Header
