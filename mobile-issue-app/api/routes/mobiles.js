const express = require('express');
const router = express.Router();

let mobiles = [
    { id: 1, name: 'iPhone 14', brand: 'Apple', price: 1000, availability: true },
    { id: 2, name: 'Galaxy24', brand: 'Samsung', price: 1500, availability: true }
];

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Listing all mobiles',
        mobiles: mobiles
    });
});

router.patch('/issue/:id', (req, res, next) => {
    const id = req.params.id;
    var mobile=null
    for(var i =0; i< mobiles.length; i++){
        if(mobiles[i].id==id)
            mobile = mobiles[i]
    }
    if (mobile) {
        mobile.availability = false;
        res.status(200).json({
            message: 'Mobile issued',
            mobile: mobile
        });
    } else {
        res.status(404).json({
            message: 'Mobile not found'
        });
    }
});

router.patch('/return/:id', (req, res) => {
    const id = parseInt(req.params.id);
    var mobile=null
    for(var i =0; i< mobiles.length; i++){
        if(mobiles[i].id==id)
            mobile = mobiles[i]
    }    if (mobile) {
        mobile.availability = true;
        res.status(200).json({
            message: 'Mobile returned',
            mobile: mobile
        });
    } else {
        res.status(404).json({
            message: 'Mobile not found'
        });
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    var mobile=null
    for(var i =0; i< mobiles.length; i++){
        if(mobiles[i].id==id)
            mobile = mobiles[i]
    }
    if (mobile) {
        res.status(200).json({
            message: 'Mobile details',
            mobile: mobile
        });
    } else {
        res.status(404).json({
            message: 'Mobile not found'
        });
    }
});

module.exports = router;
