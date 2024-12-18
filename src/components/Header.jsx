import { useNavigate } from "react-router-dom"
import Button from '../components/Button'

const Header = () => {
  const navigate = useNavigate()
  const options = [
    {
      text: 'Home',
      fn: () => navigate('/home')
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
    </div>
  )
}

export default Header