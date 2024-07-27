const express = require('express')
const router = express.Router(); //router will do the routing 

router.get('/', (req, res, next) => { // this api will deal with (localhost/300/Product/)
    res.status(200).json({ // we are sending this json
        message: 'Handling GET requests to /products'
    });
});


router.post('/', (req, res, next) => {
    //Parse

    const product= {
        name:req.body.name,
        price:req.body.price
    }

    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct:product
    });
});

router.get('/:productId', (req, res, next) => { // this api will deal with (localhost/300/Product/ProductId)
    const id = req.params.productId; // Fetching the id. we use params
    if (id === 'special') {
        res.status(200).json({
            message: 'special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'passed an id',
            id: id
        });
    }
});

router.patch('/:productId', (req, res, next) => {//next is a function, res is the response(by knowing the statuse we can know if every thing is ok or not), req is the request
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'special product updated successfully',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Handling PATCH requests for regular product',
            id: id
        });
    }
});



router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        // Here you could add logic to delete the specific product
        res.status(200).json({
            message: 'Special product deleted',
            id: id
        });
    } else {
        // Here you could add logic to delete the specific product
        res.status(200).json({
            message: 'Product deleted',
            id: id
        });
    }
});

module.exports = router;
