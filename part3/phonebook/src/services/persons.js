import axios from 'axios'
const baseURL = '/api/persons'

const getAll = () => {
    const promise = axios.get(baseURL)
    return promise.then(response => response.data)
}

const create = newPerson => {
    const promise = axios.post(baseURL, newPerson)
    return promise.then(response => response.data)
}

const update = updatedPerson => {
    const promise = axios.put(`${baseURL}/${updatedPerson.id}`, updatedPerson)
    return promise.then(response => response.data)
}

const remove = id => {
    const promise = axios.delete(`${baseURL}/${id}`)
    return promise.then()
}

export default { getAll, create, remove, update }