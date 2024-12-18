import PropTypes from "prop-types"

const Button = ({text, fn}) => {

  const handleClick = () => {
    fn()
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
  fn: PropTypes.func
}

export default Button