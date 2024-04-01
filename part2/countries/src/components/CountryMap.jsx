import Button from "./Button"
import CountryDetail from "./CountryDetail"

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
        return <CountryDetail countryName={countryResults[0].name.common} />
    } else if (countryResults.length === 0) {
        return (
            <div>
                No results found.
            </div>
        )
    } else {
        return (
            countryResults.map(country => (
                <div key={country.cca3}>
                    {country.name.common}
                    <Button country={country.name.common} />
                </div>
            ))
        )
    }
}

export default CountryMap