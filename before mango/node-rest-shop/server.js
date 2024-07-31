// this to make sure that our server is up
const http = require('http') // the http module

const app = require('./app') 
const port = process.env.PORT || 3000 // fetching the port from a configuration file, but if it wasn't there I provide another port
const server = http.createServer(app) // to create a server, we call the method and we pass the app
//creating without passing the app will run a server without defining the routes
server.listen(port) 

//
// we start with npm init

