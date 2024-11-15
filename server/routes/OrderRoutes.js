// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/add', async (req, res) => {
    try {
        const { UserId, products, totalprice } = req.body;

        if (!UserId || !products || !totalprice) {
            return res.status(400).json({ error: 'All required fields must be filled.' });
        }

        const newOrder = await Order.create({
            UserId,
            products,
            totalprice,
        });

        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Error creating order.' });
    }
});

// Get all orders for a specific user
router.get('/user/:UserId', async (req, res) => {
    const { UserId } = req.params;
    try {
        const orders = await Order.findAll({
            where: { UserId },
            order: [['data', 'DESC']],
        });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Error fetching orders.' });
    }
});


router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll({
            order: [['data', 'DESC']],
        });
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Error fetching orders.' });
    }
});


router.put('/:OrderId/status', async (req, res) => {
    const { OrderId } = req.params;
    const { OrderStatus } = req.body;

    try {
        const order = await Order.findByPk(OrderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found.' });
        }

        order.OrderStatus = OrderStatus;
        await order.save();

        res.status(200).json({ message: 'Order status updated successfully.', order });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ error: 'Error updating order status.' });
    }
});

module.exports = router;
