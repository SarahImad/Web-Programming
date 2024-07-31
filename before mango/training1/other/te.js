/*let http = require('http')
 function s(){
 return {
    name:"sara"
 }
}
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    let a = s()
   let sp = JSON.stringify(a)
    res.write(sp);
    res.end() 

}).listen(1000)

console.log('Server is listening on port 1000');*/
/*
function add(a,b){
    return a+b;
}

exports.adding = add
//or   exports.add = add

*/

/*
function phones(p, num){
    let vat = 0.05
    let iPHONEp = 0
    let sam = 0
    let iBill = 0
    let samBill = 0
    if(p == "i"){
        iPHONEp = 4600 * num
        iBill +=iPHONEp+iPHONEp*vat
        return ("total bill is $" +iBill)

    }
    else if(p =='s'){
        sam = 4600 * num
        samBill +=sam+sam*vat
        return samBill

    }


}

exports.phones = phones
*/


let fs = require('fs')

fs.readFile('training1/other/wr.js', 'utf-8', function(err,data){
    console.log('data iss: ', data)
})

let a = `    if(4>1){
        console.log(4+4)}
        else{
            console.log(5)
        }`
fs.writeFile('training1/other/wr.js', a,function(err,data){
    console.log('data is: ', data)
        }
    )

  //  fs.unlink('training1/other/wr.js', function(err){})

