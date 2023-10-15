const express = require('express');
const router = express.Router();

const {
    addMrn,
    getAllMrn,
    getMrnById,
    updateMrnById,
    deleteMrnById
} = require('../Controller/mrnController');

// Define routes for MRN management
router.post('/mrn', addMrn); // Add a new MRN
router.get('/mrn', getAllMrn); // Get all MRNs
router.get('/mrn/:id', getMrnById); // Get MRN by ID
router.patch('/mrn/:id', updateMrnById); // Update MRN by ID
router.delete('/mrn/:id', deleteMrnById); // Delete MRN by ID

module.exports = router;