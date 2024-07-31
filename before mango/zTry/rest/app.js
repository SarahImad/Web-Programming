let express = require('express')
let app = express()

let morgan = require('morgan')
app.use(morgan('dev'))

let body_parser = require('body-parser')
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended : false}))

let or = require('./or')
app.use('/order' , or)


app.use(function(req,res,next){
    let error = new Error("eroo")
    error.status = 404
    next(error)
})

app.use(function(error,req,res,next){
    res.status(error.status||500)

    res.json({
error:{message: error.message}    })
})



module.exports = app