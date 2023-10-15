const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a schema
const GrnSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    showRoomName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Mrn', GrnSchema);
