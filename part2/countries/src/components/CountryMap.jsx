const CountryMap = ({countryResults}) => {
    if (!countryResults) {
        return null
    } else if (countryResults.length >= 11) {
        return (
            <div>
            Too many results. Refine your filter.
            </div>
        )
    } else if (countryResults.length === 1) {
        // display country data
    } else {
        return (
            countryResults.map(country => (
                <div key={country.cca3}>
                    {country.name.common}
                </div>
            ))
        )
    }
}

export default CountryMap