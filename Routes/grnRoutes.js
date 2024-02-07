const express = require('express');
const router = express.Router();

const {
    addGrn,
    getAllGrn,
    getGrnById,
    updateGrnById,
    deleteGrnById,
    updateGrnByItemName
} = require('../Controller/grnController');

// Define a POST route for adding a supplier
router.post('/grn', addGrn);

// Define a GET route for getting all suppliers
router.get('/grn', getAllGrn);

// Define a GET route for getting a supplier by id
router.get('/grn/:id', getGrnById);

// Define a patch route for updating a supplier by id
router.patch('/grn/:id', updateGrnById);

// Define a DELETE route for deleting a supplier by id
router.delete('/grn/:id', deleteGrnById);

// Define a patch route for updating a subGRNQuantity by ItemName
router.patch('/grn/:ItemName', updateGrnByItemName);

module.exports = router; 