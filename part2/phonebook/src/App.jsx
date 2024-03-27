import { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './components/Form'
import Filter from './components/Filter'
import PersonsMap from './components/PersonsMap'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook.`)
      return
    }

    let person = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(person))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(persons.concat(response.data))
      })
  }, [])


  const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Form 
        onSubmit={addPerson}
        nameValue={newName}
        nameOnChange={handlePersonChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Filter
        value={nameFilter}
        onChange={handleFilterChange}
      />
      <br />
      <PersonsMap
        persons={personsFiltered}
      />
    </div>
  )
}

export default App