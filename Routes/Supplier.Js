const express = require('express');
const router = express.Router();

const { addSupplier, getAllSupplier, getSupplierById, updateSupplierById, deleteSupplierById } = require('../Controller/Supplier');

// Define a POST route for adding a supplier
router.post('/Supplier', addSupplier);

// Define a GET route for getting all suppliers
router.get('/Supplier', getAllSupplier);

// get company by id
router.get('/Supplier/:id', getSupplierById);

// update company by id
router.patch('/Supplier/:id', updateSupplierById);

// delete company by id
router.delete('/Supplier/:id', deleteSupplierById);

module.exports = router; 