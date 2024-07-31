const ex = require('express')
const app = ex()

app.get('/', function(req,res,next){
    res.status(200).send('sent YO')
})

app.get('/mobile/:id', function(req,res,next){
    const id = req.params.id
    
    res.status(200).send({
        message:'sent yo? nah',
        id:id
})
})
app.get('/eng/:id', function(req, res) {
    const id = req.params.id;
    if (id == 20) {
      res.json("hello sara");
    } else {
      res.send("hello others");
    }
  });

app.listen(3000)