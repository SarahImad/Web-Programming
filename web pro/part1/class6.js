// Importing the HTTP module
var http = require('http');

// Function that returns an object
function gett() {
    return {
        name: 'ssara',
        id: 100
    };
}

// Create an HTTP server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Get the object from the function
    var responseObject = gett();
    var r = JSON.stringify(responseObject)
    // Convert the object to JSON string and send it
    res.end(r);
}).listen(1000);

console.log('Server is listening on port 2000');


//so know I can send the response to the front end no matter how big it was
