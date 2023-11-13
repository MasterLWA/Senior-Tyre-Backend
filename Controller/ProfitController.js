const Profit = require('../Model/Profit'); // Use a capitalized name for the model
const mongoose = require('mongoose');


// Add profit
const addProfit = async (req, res) => {
    const { item, unitCostPrice, unitSellingPrice, totalSellingItems, totalSellingPrice, profit } = req.body;

    try {
        const newProfit = new Profit({
            item,
            unitCostPrice,
            unitSellingPrice,
            totalSellingItems,
            totalSellingPrice,
            profit
        });

        const savedProfit = await newProfit.save();

        res.status(201).json(savedProfit); // Use 201 status code for resource creation
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


// Get all profits
const getAllProfit = async (req, res) => {
    try {
        const profits = await Profit.find({}); // Use the plural form 'profits' for the variable
        res.status(200).json(profits);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


//get time by time duration
const getProfitByTimeDuration = async (req, res) => {
    try {
        const profits = await Profit.find({ day: { $gte: req.params.from, $lte: req.params.to } });
        res.status(200).json(profits);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    addProfit,
    getAllProfit,
    getProfitByTimeDuration
}