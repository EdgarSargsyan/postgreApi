const express = require('express');
const router = express.Router();
const db = require('./queries');
const db2 = require('./queries');
const bitfinex = require('./bitfinex_query.js');
const poloniex = require('./poloniex_query.js');
const kraken = require('./kraken_query.js');
const cex = require('./cex_query.js');
const bittrex = require('./bittrex_query.js');
const hitbtc = require('./hitbtc_query.js');
const one = require('./1.js');
const convert = require('object-array-converter');



router.get('/', function(req, res, next) {
  res.status(200)
  .json({
    status: 'success',
    message: 'Live long and prosper!'
  });
});


//////////////////////
// Postgres queries
//////////////////////

var array = db2.getMCData;

var array2 = convert.toArray(array);



// router.get('/api/allcoinstats', (req, res, next) => {
  
 
// });




router.get('/api/data', db.getData);
router.get('/api/data/mysql', db.getMysql);
router.get('/api/data/total', db.getArray);
router.get('/api/currency/:id/:lim/:count', db.getCur);
router.get('/api/currencys/:id/:lim/:count', db.getCurUSD);
router.get('/api/currencys2/:id/:lim/:count', db.getCurUSD2);
// router.post('/api/starships', db.createStarship);
// router.put('/api/starships/:id', db.updateStarship);
// router.delete('/api/starships/:id', db.removeStarship);

module.exports = router;
