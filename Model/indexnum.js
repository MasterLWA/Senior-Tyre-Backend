const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const indexnum = new Schema({
    indexnum: {
        type: Number,
    },
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('indexnum', indexnum);