import { useState } from 'react'

import CountryDetail from './CountryDetail'

const Button = ({country}) => {
    const [hidden, setHidden] = useState(true)
    
    const onClick = () => {
        setHidden(!hidden)
    }

    if (hidden) {
        return (
            <button onClick={onClick}>Show</button>
        )
    } else {
        return (
            <>
                <button onClick={onClick}>Hide</button>
                <CountryDetail countryName={country} />
            </>
        )
    }
}

export default Button