const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Item (Item name / Service charge)
// One unit Cost price
// One Unit Selling Price
// Total Selling Items
// Total Selling Price
// Profit/Lost (If this is a Service Charge, This should be profit)
// Day 
// year and month should create automatically
const ProfitSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    unitCostPrice: {
        type: Number,
    },
    unitSellingPrice: {
        type: Number,
    },
    totalSellingItems: {
        type: Number,
    },
    totalSellingPrice: {
        type: Number,
    },
    profit: {
        type: Number,
    },
    day: {
        type: String,  // Change the type to String
        default: () => {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const dayOfMonth = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${dayOfMonth}`;
        }
    },
    month: {
        type: Date,
        default: Date.month
    }

    
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Profit', ProfitSchema);