let http = require('http')
let app = require('./app')

let server = http.createServer(app)
let port = process.env.PORT || 3000

server.listen(port)