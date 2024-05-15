import { useState, useEffect } from 'react'
import backendService from './services/persons'

import Form from './components/Form'
import Filter from './components/Filter'
import PersonsMap from './components/PersonsMap'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notification, setNotification] = useState(null)

  const timeoutDelay = 3000

  const makeNotification = message => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, timeoutDelay)
  }

  const makeError = message => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, timeoutDelay)
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const person = {
      name: newName,
      number: newNumber
    }
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already in the phonebook. Replace their old number with this new one?`)) {
        const copyOfPerson = { ...existingPerson, number:newNumber }
        
        backendService
          .update(copyOfPerson)
          .then(response => {
            setPersons(persons.map(person => person.name === newName ? response : person))
            setNewName('')
            setNewNumber('')
            makeNotification(`Updated ${person.name}.`)
          })
          .catch(() => makeError(`${existingPerson.name} has already been deleted.`))
      }
      return
    }

    backendService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
        makeNotification(`Added ${person.name}.`)
      })
      .catch(() => makeError(`${existingPerson.name} has already been created.`))
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Are you sure you want to delete '${personToDelete.name}'?`)) {
      backendService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          makeNotification(`Deleted ${personToDelete.name}`)
        })
        .catch(() => makeError(`${personToDelete.name} has already been deleted.`))
    }
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
    backendService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const personsFiltered = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Message.ErrorMessage message={errorMessage} />
      <Message.Notification message={notification} />
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
        onClick={deletePerson}
      />
    </div>
  )
}

export default App