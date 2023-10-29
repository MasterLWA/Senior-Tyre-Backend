const express = require('express');
const router = express.Router();

const {
    addSubgrn,
    getAllSubgrn,
    getSubgrnById,
    deleteSubgrnById,
    updateSubgrnById
} = require('../Controller/subgrn');

// Define routes for subgrn management
router.post('/subgrn', addSubgrn); // Add a new subgrn
router.get('/subgrn', getAllSubgrn); // Get all subgrns
router.get('/subgrn/:id', getSubgrnById); // Get subgrn by ID
router.patch('/subgrn/:id', updateSubgrnById); // Update subgrn by ID
router.delete('/subgrn/:id', deleteSubgrnById); // Delete subgrn by ID

module.exports = router;


