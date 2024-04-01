import { useState, useEffect } from 'react'
import countryService from './services/countries'

import Search from './components/Search'
import CountryMap from './components/CountryMap'

function App() {
  const [countrySearch, setCountrySearch] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    countryService
      .getAll(countrySearch)
      .then(response => {
        setCountries(response)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!countries) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const handleSearch = (event) => {
    setCountrySearch(event.target.value)
  }

  const countriesSearchResult = countries.filter(country => (
    country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
  ))

  return (
    <>
      <Search searchText={countrySearch} onChange={handleSearch} />
      <CountryMap countryResults={countriesSearchResult} />
    </>
  )
}

export default App
