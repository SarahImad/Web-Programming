const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Employee
const employeeSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
        
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    }
},{timestamp:true});

// Create and export the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
