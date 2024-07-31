let express = require('express')
let router = express.Router()

router.get('/',function(req,res){
    res.json({
        name: req.body.name
    })
})





module.exports=router