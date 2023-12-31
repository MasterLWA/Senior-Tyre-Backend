const Profit = require('../Model/Profit'); // Use a capitalized name for the model
const indexnum = require('../Model/indexnum'); // Use a capitalized name for the model
const mongoose = require('mongoose');

    const addProfit = async (req, res) => {
        try {
        const profitData = req.body;
    
        // If it's an array, validate and create each object
        if (Array.isArray(profitData)) {
            const validationPromises = profitData.map(data => new Profit(data).validate());
            await Promise.all(validationPromises);
            const savedProfitArray = await Profit.create(profitData);
            res.status(201).json(savedProfitArray);
        } else { // If it's a single object, validate and create it
            await new Profit(profitData).validate();
            const savedProfit = await Profit.create(profitData);
            res.status(201).json(savedProfit);
        }
        } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
        }
    };

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


    // get index number by ID
    const getIndexNumber = async (req, res) => {
        try {
            const indexNumber = await indexnum.findById(req.params.id);
            res.status(200).json(indexNumber);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    // update index number
    const updateIndexNumber = async (req, res) => {
        try {
            const indexNumber = await indexnum.findByIdAndUpdate(req.params.id, { indexnum: req.body.indexnum }, { new: true })
            res.status(200).json(indexNumber);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    const deleteProfit = async (req, res) => {
        try {
          const profitId = req.params.id;
      
          // Check if the profitId is a valid ObjectId before attempting to delete
          if (!mongoose.Types.ObjectId.isValid(profitId)) {
            return res.status(400).json({ message: 'Invalid profit ID' });
          }
      
          const profit = await Profit.findByIdAndDelete(profitId);
      
          if (!profit) {
            return res.status(404).json({ message: 'Profit not found' });
          }
      
          res.status(200).json(profit);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      };

    const getProfitByDate = async (req, res) => {
        try {
            const profits = await Profit.find({ day: req.params.date });
            res.status(200).json(profits);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }



module.exports = {
    addProfit,
    getAllProfit,
    getProfitByTimeDuration,
    updateIndexNumber,
    getIndexNumber,
    deleteProfit,
    getProfitByDate
}