const Search = ({searchText, onChange}) => {
    return (
      <div>
        Search countries:
        <input
          value={searchText}
          onChange={onChange}
        />
      </div>
    )
}

export default Search