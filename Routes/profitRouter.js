const {addProfit,getAllProfit,getProfitByTimeDuration , updateIndexNumber, getIndexNumber, deleteProfit, getProfitByDate, sendUserandadminpasswords
} = require("../Controller/ProfitController");
const express = require('express');


const router = express.Router();

// Add profit
router.post('/sell', addProfit); // http://localhost:5006/sell
router.get('/sell', getAllProfit); // http://localhost:5006/sell
router.get('/getbytime/:from/:to', getProfitByTimeDuration); // http://localhost:5006/getbytime/2023-11-01/2023-11-31
 // http://localhost:5006/sell/5f9a4f6d5c9d440000d3b3a8


router.get('/index/:id', getIndexNumber); // http://localhost:5006/index
router.patch('/index/:id', updateIndexNumber); // http://localhost:5006/index/5f9a4f6d5c9d440000d3b3a8
router.get('/getbydate/:date', getProfitByDate); // http://localhost:5006/getbydate/2023-11-01
router.delete('/deletesell/:id', deleteProfit);


router.get('/sendpasswords', sendUserandadminpasswords); // http://localhost:5006/sendpasswords


module.exports = router;
