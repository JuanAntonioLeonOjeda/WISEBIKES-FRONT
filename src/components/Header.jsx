import Button from '../components/Button'

const Header = () => {
  const options = [
    {
      text: 'Home',
      path: '/home'
    },
    {
      text: 'About',
      path: '/about'
    }
  ]

  const displayOptions = () => {
    return options?.map((opt, idx) => {
      return (
        <Button
          key={idx}
          text={opt.text}
          path={opt.path}
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