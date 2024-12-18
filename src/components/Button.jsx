import PropTypes from "prop-types"

const Button = ({type, text, fn}) => {

  const handleClick = () => {
    fn()
  }

  const handleType = () => {
    switch (type) {
      case 'action':
        return 'bg-green-200'
      case 'danger':
        return 'bg-red-500'
      default:
        return 'border border-black-200'
    }
  }

  return (
    <button 
    className={handleType()}
    onClick={ handleClick }>
      <span>
        {text}
      </span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  fn: PropTypes.func
}

export default Button