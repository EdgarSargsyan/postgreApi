const promise = require('bluebird');
const path = require('path');
const pg = require('pg');
const mysql = require('mysql2');//mysql db
const convert = require('object-array-converter');
const toArray = require('object-values-to-array');

var format = require('pg-format');

const options = {
  // Initialization Options
  promiseLib: promise
};

// var ccxt = require ('ccxt')
// console.log (ccxt.exchanges)

const pgp = require('pg-promise')(options);


const connectionString = 'postgres://postgres:172839@37.143.14.88:5432/historicalDataPoloniex';
const getConnection = require('pg-connect')(connectionString)
const db = pgp(connectionString);

const connectionString2 = 'postgres://postgres:172839@37.143.14.88:5432/marketCaps';
const getConnection2 = require('pg-connect')(connectionString2)
const db2 = pgp(connectionString2);

// connect db3
const connectionString3 = 'postgres://postgres:172839@37.143.14.88:5432/exchange';
const getConnection3 = require('pg-connect')(connectionString)
const db3 = pgp(connectionString3);


//mysql db
const database = mysql.createConnection({
  host: '188.225.11.217',
  port: 3306,
  user: 'root',
  password: 'acspwdm7',
  database: 'acs'
});



// const ccxt = require('./ccxt-master/ccxt.js');



// let dat_bittrex = {};
// let dat_hitbtc = {};
// let dat_poloniex = {};
// "use strict";
// (async () => {

//   const exchanges = [
//     'bittrex',
//     'hitbtc',
//     'poloniex'
//   ]

//   const symbol = 'BTC/USDT'
//   const tickers = {}
//   await Promise.all(exchanges.map(a =>
//     new Promise(async (resolve, reject) => {
//       const exchange = new ccxt[a]({ enableRateLimit: true })
//       while (true) {
//         const ticker = await exchange.fetchTicker(symbol)
//         tickers[exchangeId] = ticker;
//         Object.keys(tickers).map(a => {
//           const ticker = tickers[a];
//           dat_bittrex = tickers.bittrex;
//           dat_hitbtc = tickers.hitbtc;
//           dat_poloniex = tickers.poloniex;
//           // console.log (ticker['datetime'], exchangeId, ticker['bid'], ticker['ask']);
//         })
//       }

//     })

//   ))

// })();
// setInterval(function () {
//   // console.log( dat_bittrex );
//   // console.log(dat_hitbtc);
//   // console.log( dat_poloniex );
//   {
//     let values = [
//       [dat_bittrex.symbol, dat_bittrex.high, dat_bittrex.low, dat_bittrex.bid, dat_bittrex.ask, dat_bittrex.baseVolume, dat_bittrex.quoteVolume, dat_bittrex.info.Last, dat_bittrex.timestamp, dat_bittrex.info.OpenBuyOrders, dat_bittrex.info.OpenSellOrders, dat_bittrex.info.PrevDay]
//     ];
//     let sql = format('insert into bittrex' + '(symbol, high, low, bid, ask, base_volume, quote_volume, last, time_stamp,' +
//       'open_buy_orders, open_sell_orders, prev_day)' + 'values %L', values);
//     db3.query(sql, function (err, result) {
//       if (err) throw err;
//     });
//   }

//   {
//     let values = [
//           [dat_hitbtc.symbol, dat_hitbtc.high, dat_hitbtc.low, dat_hitbtc.bid, dat_hitbtc.ask, dat_hitbtc.baseVolume, dat_hitbtc.quoteVolume, dat_hitbtc.info.last, dat_hitbtc.timestamp]
//         ];
//         let sql = format('insert into hitbtc' + '(symbol, high, low, bid, ask, base_volume, quote_volume, last, time_stamp' +
//           ')'+ 'values %L', values);
//         db3.query(sql, function (err, result) {
//           if (err) throw err;
//         });
//   }
//   {
//     let values = [
//           [dat_poloniex.symbol, dat_poloniex.high, dat_poloniex.low, dat_poloniex.bid, dat_poloniex.ask, dat_poloniex.baseVolume, dat_poloniex.quoteVolume, dat_poloniex.info.last, dat_poloniex.timestamp]
//         ];
//         let sql = format('insert into poloniex' + '(symbol, high, low, bid, ask, base_volume, quote_volume, last, time_stamp' +
//          ')' + 'values %L', values);
//         db3.query(sql, function (err, result) {
//           if (err) throw err;
//         });
//   }

// }, 5000);








function getMysql(req, res, next) {
  database.query('SELECT * FROM `currency` LIMIT 15', (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results)
      console.log(results);
    }
  });

}




function getData(req, res, next) {
  db.any('SELECT date from btc_blk LIMIT 50')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'ok'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getMCData(req, res, next) {
  db2.any('SELECT time, market_cap_by_available_supply, volume_usd from total')
    .then(function (data) {
      res.status(200)
        .json({
          data: data
        })
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCur(req, res, next) {
  var id = parseInt(req.params.id);
  var lim = parseInt(req.params.lim);
  var count = parseInt(req.params.count);
  db.any(`SELECT date, volume, quotevolume, weightedaverage, weightedaverage*volume AS cap, weightedaverage*quotevolume AS vol from ${req.params.id} where id % ${req.params.count} = 0 ORDER BY id DESC LIMIT ${req.params.lim}`)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'ok'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCurUSD(req, res, next) {
  var id = parseInt(req.params.id);
  var lim = parseInt(req.params.lim);
  var count = parseInt(req.params.count);
  db.any(`SELECT price, volume, market_cap, time from ${req.params.id} where id % ${req.params.count} = 0 ORDER BY time DESC LIMIT ${req.params.lim}`)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'ok'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCurUSD2(req, res, next) {
  var id = parseInt(req.params.id);
  var lim = parseInt(req.params.lim);
  var count = parseInt(req.params.count);
  db.any(`SELECT price, time from ${req.params.id} where id % ${req.params.count} = 0 ORDER BY time DESC LIMIT ${req.params.lim}`)
    .then(function (data) {

      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'ok'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// только значения 
function getArray(req, res, next) {
  db2.any('SELECT time, market_cap_by_available_supply, volume_usd from total')
    .then(function (data) {
      let array = [];
      data.forEach(element => {
        let arr = toArray(element);
        array.push(arr);
      });
      res.status(200);
      res.send(array)
    })
    .catch(function (err) {
      return next(err);
    });
}

// с ключами 
function getArrayKey(req, res, next) {
  db2.any('SELECT time, market_cap_by_available_supply, volume_usd from total')
    .then(function (data) {
      let array = [];
      let dat = convert.toArray(data);
      dat.forEach(element => {
        array.push(element.value);
      });
      res.status(200);
      res.send(array)
    })
    .catch(function (err) {
      return next(err);
    });
}




// function getArray(req, res, next) {
//   var id = parseInt(req.params.id);
//   var lim = parseInt(req.params.lim);
//   var count = parseInt(req.params.count);
//   db.any(`SELECT date, volume, quotevolume, weightedaverage, weightedaverage*volume AS cap, weightedaverage*quotevolume AS vol from ${req.params.id} where id % ${req.params.count} = 0 ORDER BY id DESC LIMIT ${req.params.lim}`)
//     .then(function (data) {
//       console.log(data);
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'ok'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
/*
function getCur(req, res, next) {
   var id = parseInt(req.params.id);
   db.one('SELECT date, volume, quotevolume, weightedaverage FROM $1 LIMIT 365', id)
     .then(function (data) {
       res.status(200)
         .json({
           status: 'success',
           data: data,
           message: 'Retrieved one starship'
         });
     })
     .catch(function (err) {
       return next(err);
     });
}
*/


// function getData(req, res, next){
//   promise.using(
//     getConnection(),
//     function (query) {
//       return query('SELECT date from btc_blk LIMIT 50');
//     }
//   ).
//   then(function (results) {
//     res.status(200)
//             .json({
//               status: 'success',
//               data: results.rows
//             });

//   });
// };

// const client = new pg.Client(connectionString);
// client.connect();

// var connectionString = 'postgres://localhost:5432/startrek'; // startrek is an example database name


/////////////////////
// Query Functions
/////////////////////




// function getAllStarships(req, res, next) {
//   db.any('SELECT date from btc_blk LIMIT 50')
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved all starships'
//         });
//       console.log(data)
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
// getAllStarships()

// function getStarship(req, res, next) {
//   var id = parseInt(req.params.id);
//   db.one('SELECT * FROM starships WHERE id = $1', id)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved one starship'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function createStarship(req, res, next) {
//   req.body.launched = parseInt(req.body.launched);
//   db.none('INSERT INTO starships(name, registry, affiliation, launched, class, captain)' +
//       'values(${name}, ${registry}, ${affiliation}, ${launched}, ${class}, ${captain})',
//     req.body)
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Inserted one starship'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function updateStarship(req, res, next) {
//   db.none('UPDATE starships SET name=$1, registry=$2, affiliation=$3, launched=$4, class=$5, captain=$6 where id=$7',
//     [req.body.name, req.body.registry, req.body.affiliation, parseInt(req.body.launched), req.body.class, parseInt(req.params.id)])
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Updated starship'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }

// function removeStarship(req, res, next) {
//   var id = parseInt(req.params.id);
//   db.result('DELETE FROM starships WHERE id = $1', id)
//     .then(function (result) {
//       /* jshint ignore:start */
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Removed ${result.rowCount} starships'
//         });
//       /* jshint ignore:end */
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }


// /////////////
// // Exports
// /////////////

// module.exports = {
//     getAllStarships: getAllStarships,
//     getStarship: getStarship,
//     createStarship: createStarship,
//     updateStarship: updateStarship,
//     removeStarship: removeStarship
// }

module.exports = {
  getData: getData,
  getMCData: getMCData,
  getCur: getCur,
  getCurUSD: getCurUSD,
  getCurUSD2: getCurUSD2,
  getArray: getArray,// только значения 
  getArrayKey: getArrayKey,// с ключами 
  getMysql: getMysql//MySql

}