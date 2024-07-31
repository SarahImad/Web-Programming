const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students')

// Create a schema
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Create a model: give name of the collection and pass the schema
const StudentModel = mongoose.model('studentColl', StudentSchema)

// Define a route to get students
app.get('/', (req, res) => {
    StudentModel.find({}).then((students) => {
        res.json(students)
    }).catch((err) => {
        console.error("Error fetching students:", err)
        res.status(500).send("Internal Server Error")
    })
})

// Start the server
app.listen(2000, () => {
    console.log("Server is running on port 2000")
})
