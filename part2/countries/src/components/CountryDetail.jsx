import { useState, useEffect  } from 'react'

import countryService from '../services/countries'

const CountryDetail = ({countryName}) => {
    const [country, setCountry] = useState(null)
    
    useEffect(() => {
        countryService
            .getCountry(countryName.toLowerCase())
            .then(response => {
                setCountry(response)
            })
            .catch(err => console.log(err))
    }, [])

    if (!country) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            Official Name: {country.name.official}<br />
            Capital: {country.capital.join(', ')}<br />
            Area: {country.area}<br />
            <br />
            <b>Languages:</b>
            <ul>
                {Object.entries(country.languages).forEach((key, value) => (
                    <li>{key[1]}</li>
                ))}
            </ul>
            {'\n'}
            <img src={country.flags.svg} alt={country.flags.alt}></img>
        </div>
    )
}

export default CountryDetail