import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
const Button = ({text, path}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <button onClick={ handleClick }>
      <span>
        {text}
      </span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string
}

export default Button