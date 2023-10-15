const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Use 'Schema' instead of 'schema'

// Create a schema
const supplierSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
        required: true
    },
    companyPhone: {
        type: String,
        required: true
    },
    companyEmail: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Supplier', supplierSchema); // Use 'supplierSchema' here
