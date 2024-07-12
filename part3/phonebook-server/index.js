require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

morgan.token('body', (request, response) => {
  if (!request.body) {
    return null
  }
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body', {
  skip: (request, response) => { return request.method != "POST" }
}))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  const d = new Date().toLocaleString()
  Person.count({}).then(count => {
    const info = 
      `<p>Phonebook contains ${count} people.</p>
      <p>${d}</p>`
    response.send(info)
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  Person.findById(id)
    .then(person => {
      response.json(person)
    })
    .catch(error => {
      response.status(404).end()
    })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  Person.findByIdAndDelete(id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      response.status(404).end()
    })
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name == "CastError") {
    return response.status(400).send({error: 'Bad ID'})
  } else if (error.name == "ValidationError") {
    return response.status(400).json({error: error.message})
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})