const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubgrnSchema = new Schema({
    ItemName: {
        type: String,
        required: true,
    },
    ItemCode: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    SupplierName: {
        type: String,
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
    }
}, { timestamps: true });