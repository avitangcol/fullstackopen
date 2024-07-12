const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

console.log('Connecting to MongoDB...')

mongoose.connect(url)
    .then(result => {
        console.log('MongoDB connection successful.')
    })
    .catch(error => {
        console.log('Error establishing MongoDB connection: ', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        required: true
    },
    number: {
        type: String,
        minLength: 4,
        required: true
    },
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model('Person', personSchema)