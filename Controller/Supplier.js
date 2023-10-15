const Supplier = require('../Model/SupplierModel');
const mongoose = require('mongoose');

// Add supplier
const addSupplier = async (req, res) => {
    const { companyName, companyAddress, companyPhone, companyEmail } = req.body;
    
    // Simple validation
    
    try {
        // Check for existing supplier
        const existingSupplier = await Supplier.findOne({ companyName });

        if (existingSupplier) {
            return res.status(400).json({ message: 'Supplier with the same company name already exists' });
        }

        // Create a new supplier
        const newSupplier = new Supplier({
            companyName,
            companyAddress,
            companyPhone,
            companyEmail
        });

        // Save the new supplier to the database
        await newSupplier.save();

        res.status(200).json(newSupplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//get all suppliers
const getAllSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.find({})
        res.status(200).json(supplier)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// get supplier by id
const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        res.json(supplier);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// update supplier by id
 const updateSupplierById = async (req, res) => {
    try{
        const {id} = req.params

        // check if the id is valid
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No supplier with that id')

        // find the supplier with that id and update it
        const supplier = await Supplier.findOneAndUpdate({_id: id},
            {
                ...req.body
            } )
        
            res.status(200).json(supplier)

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
 }

 // delete supplier by id
    const deleteSupplierById = async (req, res) => {

    const {id} = req.params

    //check for valid id
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'invalid id'})
    }

    //check for existing workout
    const supplier = await Supplier.findByIdAndDelete({_id:id})

    //if workout not found
    if(!supplier){
        return res.status(400).json({error:'workout not found'})
    }

    //return deleted workout
    res.status(200).json(supplier)
}    
    



module.exports = { addSupplier, getAllSupplier, getSupplierById, updateSupplierById, deleteSupplierById };
