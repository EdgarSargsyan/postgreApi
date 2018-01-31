const promise = require('bluebird');
const path = require('path');
const pg = require('pg');
const convert = require('object-array-converter');
const toArray = require('object-values-to-array');
const unixTime = require('unix-time');
const format = require('pg-format');

const options = {
    // Initialization Options
    promiseLib: promise
};
const pgp = require('pg-promise')(options);





// connect db4
const connectionString = 'postgres://postgres:172839@37.143.14.88:5432/exchange_db';
const getConnection = require('pg-connect')(connectionString)
const db = pgp(connectionString);




const ccxt = require('./ccxt-master/ccxt.js');
///////////////////////
//     BTC/USD       //
///////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'BTC/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId;
                        
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat_bitfinex.symbol !== undefined) {
            let timeUnix = unixTime(dat_bitfinex.datetime);
            let values = [
                [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
            ];
            let sql = format('insert into btc_usd' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

module.exports = db