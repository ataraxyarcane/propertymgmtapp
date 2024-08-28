const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');   

// GET all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single payment by ID
router.get('/:id', getPayment, (req, res) => {
    res.json(res.payment);
});

// POST a new payment
router.post('/', async (req, res) => {
    const payment = new Payment(req.body);
    try {
        const newPayment = await payment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT - update a payment
router.put('/:id', getPayment, async (req, res) => {
    Object.assign(res.payment, req.body);
    try {
        const updatedPayment = await res.payment.save();
        res.json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a payment
router.delete('/:id', getPayment, async (req, res) => {
    try {
        await res.payment.remove();
        res.json({ message: 'Deleted Payment' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get a payment by ID 
async function getPayment(req, res, next) {
    let payment; 
    try {
        payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Cannot find payment' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.payment = payment;
    next();
} 

module.exports = router;
