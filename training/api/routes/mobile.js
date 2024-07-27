const express = require('express');
const router = express.Router()

let mobiles = [
    { id: 1, name: 'iPhone 14', brand: 'Apple', price: 1000, availability: true },
    { id: 2, name: 'Galaxy24', brand: 'Samsung', price: 1500, availability: true }
];



router.get('/',(req,res,next)=>{
    res.json({
        message:mobiles
    })
})
module.exports = router;
