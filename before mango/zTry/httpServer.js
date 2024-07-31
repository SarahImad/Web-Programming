const http = require('http')

function a(){
    return {
        name:'sara'
    }

}
const server = http.createServer( function(req,res){
    res.writeHead(200, {'content-type': 'application/json'})
    const aa = JSON.stringify(a())
    res.write(aa)
    res.end()

}).listen(3000)

const fi = require('./funFromAnotherFile')
console.log(fi.printt())