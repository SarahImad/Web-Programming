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
    res.writeHead(200, {'Content-Type': 'application/json'}); //second is to know in what format do we send the data. Here, send data is Json
//if it wasn't json, we say text/html
    // Get the object from the function
    var responseObject = gett();
    var r = JSON.stringify(responseObject) //Convert the object to a JSON string.
    // Convert the object to JSON string and send it
    res.end(r+ 'd'); // ينهي الاستجابة ويرسل البيانات إلى العميل
}).listen(1000);

console.log('Server is listening on port 1000');


//so know I can send the response to the front end no matter how big it was
