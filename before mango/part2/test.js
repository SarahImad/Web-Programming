//to import another file here, we use require
/*const calc = require('./calc.js')
// ./ means in the same folder

let results = calc.add(7,8)
console.log(results)

*/

//running in terminal without exporting that function gives an cannot find module error. using cd part2 gives another error sayting' not a function' after exporting it will work


/*

const calc = require('./calc.js'); // Import calc.js

function Bill(type, numItems) {
    const totalPrice = calc.calculate(type, numItems);
    console.log(`The total bill for ${numItems} ${type} is $${totalPrice}`);
}

Bill('iphone14', 2); 
Bill('samsung24', 3); 
*/


var fs = require('fs')
fs.readFile('calc.js', 'utf-8', function(err,data){
console.log(data)
})



fs.writeFile('write.js', 'console.log("hello")', function(err){
    console.log("data is saved")
    })
/*
    var accountStr = '{"name":"Sara", "members":["Hasan","Peter"]}'
     var accountObj = JSON.parse(accountStr); console.log(accountObj.name);
    console.log(accountObj.members);
    */
/*
    //removes what was writtin before and adds the new data
fs.writeFile('write.js', 'console.log("try")', function(err){
        console.log("data is re-saved")
        })
 
        //add data to the one we have
fs.appendFile('write.js', 'console.log("again ")', function(err){
    console.log("data is saved")
    }) 
    
    /*
fs.unlink('write.js',function(){
    console.log('file deleted')
})*/