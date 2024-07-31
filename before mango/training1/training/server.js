//start by doing  npm init npm init is a command that initializes a new Node.js project by creating a package.json file, which includes essential project metadata and manages dependencies.
//then, I install express and all the dependincies that I need such as :nodemon, morgan, body-parser
//nodemon: automatically restarting the node application when file changes are detected)
//Morgan useful for debugging and monitoring the traffic to your application


/*
1. npm init
2. npm install --save-dev nodemon
3. npm install --save body-parser
4. npm install express
5. npm install --save-dev morgan


*/
let http = require('http') //Imports Node.js's HTTP module for creating a server.
let app = require('./app') // Imports the Express app from app.js. imports the app module from the app.js file located in the same directory. This app module is typically an instance of an Express application

let port = process.env.PORT ||3000 //sets the port number on which the server will listen. check if in environment (read from configuration file), otherwise use 3000
let server = http.createServer(app) //creates an HTTP server using the http module's createServer
server.listen(port)  //starts the server and makes it listen for incoming requests.