const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students')
const db = mongoose.connection


db.on('error', (err)=> { //every time the error accure, this line will happen
console.log(err)
})

db.once('open', ()=> { //only once this line will happen
    console.log("database succefully connected")

})
// Create a schema
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number
})




const EmployeeRoute = require('./routes/EmployeeRoutes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


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
app.listen(3000, () => {
    console.log("Server is running on port 2000")
})


app.use('/api/employee', EmployeeRoute)
