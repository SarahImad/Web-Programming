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


router.patch('/issue/:id', (req, res, next) => {
    const id = parseInt(req.params.id); 
    let mobile = null; 


    for (let i = 0; i < mobiles.length; i++) {
        if (mobiles[i].id === id) {
            mobile = mobiles[i]; 
            break; 
        }
    }

    if (mobile) {
        mobile.availability = false; 
        res.status(200).json({
            message: 'Mobile issued',
            mobile: mobile
        });
    } 
});


router.patch('/return/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let mobileFound = false;

    for (let i = 0; i < mobiles.length; i++) {
        if (mobiles[i].id === id) {
            mobiles[i].availability = true;
            mobileFound = true;
            res.status(200).json({
                message: 'Mobile returned',
                mobile: mobiles[i]
            });
            break;
        }
    }

});


router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    let mobileFound = false;

    for (let i = 0; i < mobiles.length; i++) {
        if (mobiles[i].id === id) {
            mobileFound = true;
            res.status(200).json({
                message: 'Mobile details',
                mobile: mobiles[i]
            });
            break;
        }
    }

    if (!mobileFound) {
        res.status(404).json({
            message: 'Mobile not found'
        });
    }
});
