const {addProfit,getAllProfit,getProfitByTimeDuration} = require("../Controller/ProfitController");
const express = require('express');

const router = express.Router();

// Add profit
router.post('/sell', addProfit);
router.get('/sell', getAllProfit);
router.get('/getbytime/:from/:to', getProfitByTimeDuration);

module.exports = router;
