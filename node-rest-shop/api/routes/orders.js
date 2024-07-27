const express = require('express');
const router = express.Router();

// Handle GET requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /orders'
    });
});

// Handle POST requests to /orders
router.post('/', (req, res, next) => {

    const order= {
        id:req.body.id,
        numOfItems:req.body.numOfItems,
        totalBill:req.body.totalBill
    }
    res.status(201).json({
        message: 'Order was created',
        createdorders:order

    });
});

// Handle GET requests to /orders/:orderId
router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'Order details',
        id: id
    });
});

// Handle PATCH requests to /orders/:orderId
router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Special order updated successfully',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Handling PATCH requests for regular order',
            id: id
        });
    }
});

// Handle DELETE requests to /orders/:orderId
router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId; // the : here means that it is dynamic
    res.status(200).json({
        message: 'Order deleted',
        id: id
    });
});

module.exports = router;
