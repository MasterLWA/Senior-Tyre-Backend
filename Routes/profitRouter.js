const {addProfit,getAllProfit,getProfitByTimeDuration} = require("../Controller/ProfitController");
const express = require('express');

const router = express.Router();

// Add profit
router.post('/sell', addProfit); // http://localhost:5006/sell
router.get('/sell', getAllProfit); // http://localhost:5006/sell
router.get('/getbytime/:from/:to', getProfitByTimeDuration); // http://localhost:5006/getbytime/2023-11-01/2023-11-31


module.exports = router;
