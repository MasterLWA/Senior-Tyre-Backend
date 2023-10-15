const Mrn = require('../Model/mrn'); // Use a capitalized name for the model
const mongoose = require('mongoose');

// Add MRN
const addMrn = async (req, res) => {
    const { item, showRoomName, quantity } = req.body;

    try {
        const newMrn = new Mrn({
            item,
            showRoomName,
            quantity
        });

        const savedMrn = await newMrn.save();

        res.status(201).json(savedMrn); // Use 201 status code for resource creation
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Get all MRNs
const getAllMrn = async (req, res) => {
    try {
        const mrns = await Mrn.find({}); // Use the plural form 'mrns' for the variable
        res.status(200).json(mrns);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Get MRN by ID
const getMrnById = async (req, res) => {
    const { id } = req.params;

    try {
        const mrn = await Mrn.findById(id);
        if (!mrn) {
            return res.status(404).json({ message: 'MRN not found' });
        }
        res.status(200).json(mrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Update MRN by ID
const updateMrnById = async (req, res) => {
    const { id } = req.params;
    const { item, showRoomName, quantity } = req.body;

    try {
        const updatedMrn = await Mrn.findByIdAndUpdate(id, { item, showRoomName, quantity }, { new: true });
        if (!updatedMrn) {
            return res.status(404).json({ message: 'MRN not found' });
        }
        res.status(200).json(updatedMrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Delete MRN by ID
const deleteMrnById = async (req, res) => {
    const { id } = req.params;

    // Check for valid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid MRN ID' }); // Use 400 for client errors
    }

    try {
        const deletedMrn = await Mrn.findByIdAndRemove(id);
        if (!deletedMrn) {
            return res.status(404).json({ message: 'MRN not found' });
        }
        res.status(200).json({ message: 'MRN deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Export the functions
module.exports = {
    addMrn,
    getAllMrn,
    getMrnById,
    updateMrnById,
    deleteMrnById
};
