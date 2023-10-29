const Grn = require('../Model/Subgrn');
const mongoose = require('mongoose');

// Add subgrn
const addSubgrn = async (req, res) => {
    const { ItemName, ItemCode, Quantity, SupplierName, MinSellPrice, WholeSellPrice, SellingPrice, PaymentMethod } = req.body;
    
    // Simple validation
    
    try {
        // Check for existing subgrn
        const existingSubgrn = await Grn.findOne({ ItemName });

        if (existingSubgrn) {
            return res.status(400).json({ message: 'Subgrn with the same item name already exists' });
        }

        // Create a new subgrn
        const newSubgrn = new Grn({
            ItemName,
            ItemCode,
            Quantity,
            SupplierName,
            MinSellPrice,
            WholeSellPrice,
            SellingPrice
        });

        // Save the new subgrn to the database
        await newSubgrn.save();

        res.status(200).json(newSubgrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// get all subgrn
const getAllSubgrn = async (req, res) => {
    try {
        const subgrn = await Grn.find({})
        res.status(200).json(subgrn)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// get subgrn by id
const getSubgrnById = async (req, res) => {
    try {
        const subgrn = await Grn.findById(req.params.id);
        res.json(subgrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

// delete subgrn by id
const deleteSubgrnById = async (req, res) => {
    try {
        const subgrn = await Grn.findById(req.params.id);
        await subgrn.remove();
        res.json({ message: 'Subgrn removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


// update subgrn by id
const updateSubgrnById = async (req, res) => {
    try{
        const {id} = req.params
        const { ItemName, ItemCode, Quantity, SupplierName, MinSellPrice, WholeSellPrice, SellingPrice, PaymentMethod } = req.body;
        const updatedSubgrn = await Grn.findByIdAndUpdate(id, { ItemName, ItemCode, Quantity, SupplierName, MinSellPrice, WholeSellPrice, SellingPrice, PaymentMethod }, { new: true })
        res.json(updatedSubgrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = {
    addSubgrn,
    getAllSubgrn,
    getSubgrnById,
    deleteSubgrnById,
    updateSubgrnById
}