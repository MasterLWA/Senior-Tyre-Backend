const Grn = require('../Model/Grn');
const mongoose = require('mongoose');

// Add grn
const addGrn = async (req, res) => {
    const { ItemName, ItemCode, Quantity, CostPrice, MinSellPrice, WholeSellPrice, SellingPrice, PaymentMethod, SupplierName, subGRNQuantity, ValueRemarks } = req.body;
    
    // Simple validation
    
    try {
        // Check for existing grn
        const existingGrn = await Grn.findOne({ ItemName });

        if (existingGrn) {
            return res.status(400).json({ message: 'Grn with the same item name already exists' });
        }

        // Create a new grn
        const newGrn = new Grn({
            ItemName,
            ItemCode,
            Quantity,
            CostPrice,
            MinSellPrice,
            WholeSellPrice,
            SellingPrice,
            PaymentMethod,
            SupplierName,
            subGRNQuantity,
            ValueRemarks
        });

        // Save the new grn to the database
        await newGrn.save();

        res.status(200).json(newGrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// get all grn
const getAllGrn = async (req, res) => {
    try {
        const grn = await Grn.find({})
        res.status(200).json(grn)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// get grn by id
const getGrnById = async (req, res) => {
    try {
        const grn = await Grn.findById(req.params.id);
        res.json(grn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// update grn by id
const updateGrnById = async (req, res) => {
    try{
        const {id} = req.params
        const { ItemName, ItemCode, Quantity, CostPrice, MinSellPrice, WholeSellPrice, SellingPrice, subGRNQuantity, ValueRemarks } = req.body;
        const updatedGrn = await Grn.findByIdAndUpdate(id, { ItemName, ItemCode, Quantity, CostPrice, MinSellPrice, WholeSellPrice, SellingPrice,subGRNQuantity, ValueRemarks }, { new: true })
        res.json(updatedGrn);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


// delete grn by id
const deleteGrnById = async (req, res) => {
    const {id} = req.params
    try{
        // check if the id is valid
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No grn with that id')

        // find the grn with that id and delete it
        await Grn.findByIdAndRemove(id)
        res.json({message: 'Grn deleted successfully'})
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}



//export modules
module.exports = {
    addGrn,
    getAllGrn,
    getGrnById,
    updateGrnById,
    deleteGrnById
}