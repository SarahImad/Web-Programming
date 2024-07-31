/*const express= require('express')
const app = express()

//app.listen(2000)

app.listen(2000, function(req,res){
    console.log("hi")
})
//listen means up and running


app.get('/',function(req,res){
    res.send("hiii")
})
//this response will be sent whenever


app.get('/eng',function(req,res){
    res.send("hiii eng")
})

app.get('/eng/:id',function(req,res){
    const id = req.params.id // fetching the id. we use params
    if (id ==20){
    res.send("hello sara")}
        else{
            res.send("hello others")
        }
})



app.post('/eng/',function(req,res){

            res.send("Engineer record is created")
        
})

//for small updates.
app.patch('/eng/:id',function(req,res){
    const id = req.params.id // fetching the id
    if (id ==20){
    res.send("the selected record updated")}
        else{
            res.send("not found")
        }
})


app.delete('/eng/:id',function(req,res){
    const id = req.params.id // fetching the id
    if (id ==20){
    res.send("the selected record deleted")}
        else{
            res.send("not found")
        }
})

*/


let express = require('express')
let app = express()
app.listen(1000)

app.get('/mobiles',function(req,res){
    if(req.params.name=='sara'){
        res.send('name received:')
        

    }
})



