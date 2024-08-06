const express = require('express')
const router = express.Router()
const EmployeeController = require('../controller/EmployeeController')

router.get('/',EmployeeController.index)
/*router.post('/show',EmployeeController.show)*/
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.deleteEmployee)

module.exports=router



