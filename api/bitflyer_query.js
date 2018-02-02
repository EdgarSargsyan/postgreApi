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





// connect db
const connectionString = 'postgres://postgres:172839@37.143.14.88:5432/exchange_db';
const getConnection = require('pg-connect')(connectionString)
const db = pgp(connectionString);

const ccxt = require('./ccxt-master/ccxt.js');



// // /////////////////
// // //   BTC/JPY  //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitflyer'
        ]
        const symbol = 'BTC/JPY'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        console.log(ticker);
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into btc_jpy' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////
// // //   ETH/BTC  //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitflyer'
        ]
        const symbol = 'ETH/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        console.log(ticker);
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////
// // //   BCH/BTC  //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitflyer'
        ]
        const symbol = 'BCH/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        console.log(ticker);
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into bch_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

module.exports = db