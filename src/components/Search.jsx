import Button from "./Button"

const Search = () => {
  const searchBikes = () => {
    
  }

  return (
    <div>
      <input
        placeholder='Search Bike Model'
      />
      <Button
        text="Search"
        fn={ searchBikes }
      />
    </div>
  )
}

export default Search