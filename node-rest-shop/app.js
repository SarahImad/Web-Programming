//app.js tell me how to route the information
const express = require('express'); // provides a main method ( use) which is used 
const app = express(); // we call express and store in app, so app got all the functions of express

const productsRoutes = require('./api/routes/Product');
const ordersRoutes = require('./api/routes/orders');
const morgan = require('morgan');
app.use(morgan('dev'))

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())






app.use('/Product', productsRoutes); // if someone said /products. use is that if any one called /Product, we consider this routing info
app.use('/orders', ordersRoutes);
//error handling:
// Handle 404 errors
app.use((req, res, next) => {
    const error = new Error('The URL not found');
    error.status = 404; // can be 400
    next(error); // we throw the error
});

app.use((error,req,res,next)=>{ // we catch the error
    res.status(error.status||500)
    res.json({
        error:{message: error.message}
    })
})

// Routes



module.exports = app;
