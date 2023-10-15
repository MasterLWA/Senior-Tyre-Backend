const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a schema
const GrnSchema = new Schema({
    ItemName: {
        type: String,
        required: true,
        unique: true, // This ensures that 'ItemName' values are unique
    },
    ItemCode: {
        type: String,
        unique: true, // This ensures that 'ItemCode' values are unique
    },
    Quantity: {
        type: Number,
        required: true,
    },
    CostPrice: {
        type: Number,
        required: true,
    },
    MinSellPrice: {
        type: Number,
        required: true,
    },
    WholeSellPrice: {
        type: Number,
        required: true,
    },
    SellingPrice: {
        type: Number,
        required: true,
    },
    ValueRemarks: {
        type: String
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Grn', GrnSchema); // Use 'GrnSchema' here
