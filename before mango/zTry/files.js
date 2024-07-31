const fs = require('fs')

fs.writeFile('w.js','hhdfw',function(err){
    console.log(); // Log file content if read successfully

})

fs.readFile('w.js', 'utf8', function(err,data){
    console.log(data); // Log file content if read successfully

})
fs.appendFile('training1/wr.txt', '\n hmm', function(err, data) {

        console.log(
            "File content:", data); // Log file content if read successfully
    })

//fs.unlink('w.js', function s(err){})