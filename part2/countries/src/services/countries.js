import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries'

const getAll = () => {
    const promise = axios.get(`${baseURL}/api/all`)
    return promise.then(response => response.data)
}

const getCountry = (country) => {
    const promise = axios.get(`${baseURL}/api/name/${country}`)
    return promise.then(response => response.data)
}

export default { getAll, getCountry }