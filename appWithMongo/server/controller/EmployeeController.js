const express = require ('express')
const Employee = require('../models/Employee')


const index = (req, res, next)=>{
Employee.find() // if this method is called, if successful do the ' then', otherwise do the error
.then(response=>{
    res.json({
        response
    })
})

.catch(error =>{
    res.json({
        message:"an error accured"
    })
})
}


const store = (req, res, next) => {
    // Create a new Employee instance with properties directly from req.body
    const employee = new Employee({
        name: req.body.name,                // Correctly assign name from req.body
        designation: req.body.designation,  // Fixed typo in property assignment
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    });

    employee.save()
        .then(response => {
            res.status(201).json({
                message: 'Employee added successfully',
                employee: response
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error adding employee',
                error: error.message // Include the actual error message
            });
        });
};

const update = (req, res, next) => {
    const employeeId = req.body.employeeId;

    // Create update data object from request body
    const updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };

    // Find and update employee by ID
    Employee.findByIdAndUpdate(employeeId, { $set: updateData })
        .then(() => {
            res.status(200).json({
                message: 'Employee updated successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error updating employee',
                error: error.message 
            });
        });
};

const deleteEmployee = (req, res, next) => {
    const employeeId = req.body.employeeId; // Corrected typo in `req.body`

    Employee.findByIdAndRemove(employeeId)
    .then(() => {
        res.status(200).json({
            message: `Employee deleted successfully with id ${employeeId}`
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error',
            error: error.message 
        });
    });
};




module.exports = {
    index,
    store,
    update,
    deleteEmployee
};




