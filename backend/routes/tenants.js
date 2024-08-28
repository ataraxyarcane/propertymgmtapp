const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');

// GET all tenants
router.get('/', async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.json(tenants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single tenant by ID
router.get('/:id', getTenant, (req, res) => {
    res.json(res.tenant);
});

// POST a new tenant
router.post('/', async (req, res) => {
    const tenant = new Tenant(req.body);
    try {
        const newTenant = await tenant.save();
        res.status(201).json(newTenant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT - update a tenant
router.put('/:id', getTenant, async (req, res) => {
    Object.assign(res.tenant, req.body);
    try {
        const updatedTenant = await res.tenant.save();
        res.json(updatedTenant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a tenant
router.delete('/:id', getTenant, async (req, res) => {
    try {
        await res.tenant.remove();
        res.json({ message: 'Deleted Tenant' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get a tenant by ID 
async function getTenant(req, res, next) {
    let tenant; 
    try {
        tenant = await Tenant.findById(req.params.id);
        if (!tenant) {
            return res.status(404).json({ message: 'Cannot find tenant' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.tenant = tenant;
    next();
} 

module.exports = router;