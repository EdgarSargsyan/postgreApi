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

///////////////////
//     BTC/USDT      //
///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BTC/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into btc_usdt' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////
//     XVG/USDT      //
///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XVG/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xvg_usdt' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//     LTC/BTC      //
///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LTC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ltc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // // ///////////////////////
// // // //     ETH/USDT     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ETH/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into eth_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //     XRP/ETH     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XRP/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xrp_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // // ///////////////////////
// // // //     ETH/BTC     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
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
                        dat = ticker;
                        dat.ex_name = exchangeId
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

// // // ///////////////////////
// // // //     ETH/BTC     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
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
                        dat = ticker;
                        dat.ex_name = exchangeId
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

// // // ///////////////////////
// // // //     XVG/BTC     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XVG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xvg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //     ZCL/BTC     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ZCL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into zcl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //     QTUM/BTC     //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'QTUM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into qtum_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


// // // ///////////////////////
// // // //       BCC/BTC  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BCC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into bcc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}



///////////////////////
//      BCC/USDT   //
///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BCC/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into bcc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}



/////////////////////
//    OMG/BTC      //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'OMG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    SALT/BTC      //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SALT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into salt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    RDD/BTC      //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RDD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rdd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    RCN/BTC      //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RCN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rcn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    OMG/ETH     //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'OMG/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    XDN/ETH     //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XDN/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xdn_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   PTOY/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'PTOY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ptoy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //     ETC/USDT    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ETC/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into etc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//   XAUR/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XAUR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xaur_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


// // // ///////////////////
// // // //    NEO/BTC     //
// // // ///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NEO/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into neo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////
// //    NEO/ETH     //
// ///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NEO/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into neo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


// /////////////////
// //   BTG/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BTG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into btg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   VOX/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VOX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into vox_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   NEO/USDT//
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NEO/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into neo_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

////////////////
//   SNT/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SNT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into snt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}////////////////
//   THC/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'THC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into thc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}




////////////////
//   SNT/ETH //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SNT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into snt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
////////////////
//   TKS/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TKS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into tks_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
////////////////
//   SNRG/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SNRG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into snrg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
////////////////
//   SPHR/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SPHR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sphr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
////////////////
//   NXS/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NXS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into nxs_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     XLM/BTC      //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XLM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xlm_btc' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     LTC/USDT      //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LTC/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ltc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}



// ///////////////////////
// //     ETC/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ETC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into etc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //     LSK/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LSK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into lsk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //     ADA/ETH    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADA/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ada_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //     FCT/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FCT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ftc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


// ///////////////////////
// //    ZEC/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ZEC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into zec_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    RISE/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RISE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into rise_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    XZC/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XZC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xzc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    PAY/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PAY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into pay_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    KMD/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'KMD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into kmd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    WAVES/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'WAVES/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into waves_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //    STRAT/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'STRAT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into start_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       XMR/USDT   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XMR/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xmr_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       ZEC/USDT   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ZEC/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into zec_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //     LTC/ETH      //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LTC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ltc_eth' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  LUN/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LUN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into lun_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    FUN/ETH   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FUN/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into fun_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////
//    LMC/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LMC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into lmc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////
//    XEL/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XEL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xel_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////
//    GBYTE/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GBYTE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gbyte_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////
//    MEME/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MEME/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into meme_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  MUSIC/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MUSIC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into music_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       REP/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'REP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into rep_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       MTL/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MTL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into mtl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       NEOS/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NEOS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into neos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       UBQ/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'UBQ/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ubq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       DOPE/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DOPE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into dpoe_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //       BURST/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BURST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into burst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //       VTC/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VTC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       POWR/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'POWR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into powr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       ZEN/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ZEN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into zen_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       FUN/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FUN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into fun_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////////
//       XMR/BTC    //
///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XMR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       DGB/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DGB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into dgb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // // ///////////////////////
// // // // //       BTS/BTC   //
// // // // ///////////////////////

// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'BTS/BTC'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId
// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into bts_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
// // ///////////////////////
// // //       DASH/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DASH/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into dash_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       NBT/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NBT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into nbt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       EDG/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EDG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into edg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       TRIG/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TRIG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into trig_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       MCO/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MCO/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into mco_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       NXT/USDT    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NXT/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into nxt_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   1ST/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = '1ST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into 1st_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//     AEON/BTC  //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'AEON/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into aeon_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//     PART/BTC  //
/////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'PART/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into part_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      XRP/USDT     //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XRP/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xrp_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //      XRP/BTC     //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XRP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xrp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //      ADA/BTC     //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADA/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ada_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // // // /////////////////////
// // // // //    OMG/BTC      //
// // // // /////////////////////
// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'OMG/BTC'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId;
// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
// // // // /////////////////////
// // // // //    OMG/ETH     //
// // // // /////////////////////
// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'OMG/ETH'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId;
// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
// /////////////////////
// //    ETC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ETC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into etc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    CRB/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CRB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into crb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    EXCL/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EXCL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into excl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    PPC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PPC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ppc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    KORE/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'KORE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into kore_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       PAY/ETH   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PAY/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into pay_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BLOCK/BTC   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BLOCK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into blook_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    SIB/BTC   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'SIB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sib_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    DGB/ETH   //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'DGB/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dgb_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    SBD/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SBD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sbd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    SALT/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SALT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into salt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    REP/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'REP/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rep_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    EGC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EGC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into egc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    MLN/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MLN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mln_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    DMD/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DMD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dmd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    ERC/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ERC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into erc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    GBG/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GBG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gbg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   WINGS/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'WINGS/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into wings_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   GUP/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GUP/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gup_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   FAIR/BTC    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FAIR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into fair_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   ENRG/BTC    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ENRG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into engr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   PKB/BTC    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PKB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into pgb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   RBY/BTC    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RBY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rby_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   ENG/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ENG/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into eng_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //  ANT/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ANT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ant_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //  TRST/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TRST/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into trst_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //   VRM/BTC    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VRM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into vrm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    INCNT/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'INCNT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into incnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BCY/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BCY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bcy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    SPR/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SPR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into spr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// /////////////////////
// //    BTCD/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BTCD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into btcd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BAT/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BAT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bah_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    GOLOS/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GOLOS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into golos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    GOLOS/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GOLOS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into golos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    GLD/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GLD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gld_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    PTC/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PTC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ptc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    FLO/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FLO/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into flo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       DICE/ETH   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MANA/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into mana_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    STRAT/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'STRAT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into strat_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    VTR/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VTR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into vtr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// //    XVC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XVC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// //    INFX/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'INFX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into infx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  FCT/ETH  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FCT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into fct_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //       MYST/ETH  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MYST/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into myst_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  BRX/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BRX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into brx_bth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      NMR/ETH //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NMR/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into nmp_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      QRL/ETH //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'QRL/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into qrl_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      LGD/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LGD/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into lgd_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      ADT/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into adt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      DNT/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DNT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into dnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //      APX/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'APX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into apx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       RLC/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RLC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into rlc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       PTOY/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PTOY/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into ptoy_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  1ST/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = '1ST/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into 1st_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //       LUN/ETH  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LUN/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into lun_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //       CURE/BTC  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CURE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into cure_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //       HMQ/ETH  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'HMQ/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into hmq_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //       VIB/ETH  //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VIB/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into vib_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  BRK/BTC  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BRK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into brk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  PDC/BTC  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PDC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into pdc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  TRUST/BTC  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TRUST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into trust_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  BYC/BTC  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BYC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into byb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  DGD/ETH   //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DGD/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dgd_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  CFI/ETH   //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CFI/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cfi_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  MTL/ETH   //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MTL/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mtl_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  EFL/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EFL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into efl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  SEQ/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SEQ/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into seq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  TIX/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TIX/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into tix_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    PINK/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PINK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into pink_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BTG/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BTG/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into btg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//   DASH/ETH //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DASH/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dash_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//   GEO/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GEO/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into geo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//   ABY/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ABY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into aby_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//   2GIVE/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = '2GIVE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into 2give_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       POWR/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'POWR/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into powr_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BLITZ/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BLITZ/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into blitz_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       WAVES/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'WAVES/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into waves_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       XST/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  MCO/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MCO/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mco_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BSD/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BSD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into bsd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       ADX/ETH  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADX/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into adx_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    CVC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CVC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cvc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    COVAL/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'COVAL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into coval_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    IOC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'IOC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ioc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// /////////////////////
// //    CRB/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CRB/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into crb_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    GNO/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GNO/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gno_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // /////////////////////
// // //    NXT/BTC   //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NXT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into nxt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    DOGE/BTC   //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DOGE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into doge_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// /////////////////////
// //    SC/BTC	    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    XEM/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XEM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // // /////////////////////
// // // // //    BCH/ETH     //
// // // // /////////////////////
// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'BCH/ETH'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId;

// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into bch_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
// /////////////////////
// //    POT/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'POT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into pot_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    MAID/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MAID/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into maid_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   SWT/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SWT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into swt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   QRL/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'QRL/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into qrl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   STORJ/ETH //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'STORJ/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into stor_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   DYN/BTC//
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DYN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dyn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   MYST/BTC//
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MYST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into myst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   GCR/BTC//
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GCR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gcr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   BLK/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BLK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into blk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   BAT/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BAT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bat_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   TIX/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TIX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into tix_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   MONA/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MONA/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mona_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   UNB/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'UNB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into unb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   HMQ/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'HMQ/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into hmq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// /////////////////////
// //   NAV/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NAV/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into nav_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   AGRS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'AGRS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into agrs_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   GRS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GRS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into grs_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BCC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BCC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bcc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    SLR/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SLR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into slr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    MER/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MER/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mer_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   BTG/USDT    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BTG/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into btg_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BNT/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BNT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into bnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       NLG/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NLG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into nlg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       IOP/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'IOP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into iop_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   STORJ/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'STORJ/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into storj_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   GAME/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GAME/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into game_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   SLS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SLS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sls_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   ION/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ION/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ion_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   BITB/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BITB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bitb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   EXP/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EXP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into exp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
////////////////
//   DNT/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DNT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   LBC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LBC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into lbc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   XMG/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XMG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xmg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   OK/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'OK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ok_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // //////////////////////
// // // // //   ZRX/BTC     //
// // // // /////////////////////
// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'ZRX/BTC'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId;

// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into zrx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
//////////////////////
// //   AMP/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'AMP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into amp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   WINGS/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'WINGS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into wings_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////
// // //   DASH/USDT //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'DASH/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dash_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////
// // //   VIA/BTC //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'hitbtc'
        ]
        const symbol = 'VIA/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into via_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    QTUM/ETH    //
///////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'QTUM/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into qtum_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // //////////////////////
// // // // //  REP/USDT     //
// // // // /////////////////////
// // // {
// // //     let dat = {};
// // //     "use strict";
// // //     (async () => {
// // //         const exchanges = [
// // //             'bittrex'
// // //         ]
// // //         const symbol = 'REP/USDT'
// // //         const tickers = {}
// // //         await Promise.all(exchanges.map(exchangeId =>
// // //             new Promise(async (resolve, reject) => {
// // //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// // //                 while (true) {
// // //                     const ticker = await exchange.fetchTicker(symbol)
// // //                     tickers[exchangeId] = ticker;
// // //                     Object.keys(tickers).map(exchangeId => {
// // //                         const ticker = tickers[exchangeId];
// // //                         dat = ticker;
// // //                         dat.ex_name = exchangeId;
// // //                     })
// // //                 }
// // //             })
// // //         ))
// // //     })();
// // //     setInterval(function () {
// // //         if (dat.symbol !== undefined) {
// // //             let timeUnix = unixTime(dat.datetime);
// // //             let values = [
// // //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// // //             ];
// // //             let sql = format('insert into rep_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// // //                 'ex_name, last, average, date )' + 'values %L', values);
// // //             db.query(sql, function (err, result) {
// // //                 if (err) throw err;
// // //             });
// // //         }
// // //     }, 5000);
// // // }
//////////////////////
// //  OMNI/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'OMNI/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into omni_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  TRST/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'TRST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into trst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  RADS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RADS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rads_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  CLAM/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CLAM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into clam_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  GRC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GRC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into grc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  START/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'START/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into start_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  DTB/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DTB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dtb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  CRW/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CRW/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into crw_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  FLDC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FLDC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into fldc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  FTC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'FTC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ftc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  ADT/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into adt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  CLUB/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CLUB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into club_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  SC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //     XMR/ETH    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XMR/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xmr_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  GNO/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GNO/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gno_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  CPC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CPC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cpc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//     XEM/ETH    //
///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XEM/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into xem_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//     NMR/BTC   //
///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NMR/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId
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
            let sql = format('insert into nmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   DGD/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DGD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dgd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   SYNX/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SYNX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into synx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //   EBST/BTC    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EBST/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ebst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

//////////////////////
// //  NXC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'NXC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into nxc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

//////////////////////
// //  VRC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VRC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  LGD/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'LGD/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into lgd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   RLC/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'RLC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into rlc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   QWARK/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'QWARK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into qwark_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   MUE/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MUE/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mue_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  ZEC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ZEC/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into zec_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


// /////////////////
// //   GNT/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GNT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   CANN/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CANN/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   PIVX/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'PIVX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into pivx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // // /////////////////
// // // // //   DASH/USD //
// // // // /////////////////
// // {
// //     let dat = {};
// //     "use strict";
// //     (async () => {
// //         const exchanges = [
// //             'bittrex'
// //         ]
// //         const symbol = 'DASH/USD'
// //         const tickers = {}
// //         await Promise.all(exchanges.map(exchangeId =>
// //             new Promise(async (resolve, reject) => {
// //                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
// //                 while (true) {
// //                     const ticker = await exchange.fetchTicker(symbol)
// //                     tickers[exchangeId] = ticker;
// //                     Object.keys(tickers).map(exchangeId => {
// //                         const ticker = tickers[exchangeId];
// //                         dat = ticker;
// //                         dat.ex_name = exchangeId;
// //                     })
// //                 }
// //             })
// //         ))
// //     })();
// //     setInterval(function () {
// //         if (dat.symbol !== undefined) {
// //             let timeUnix = unixTime(dat.datetime);
// //             let values = [
// //                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
// //             ];
// //             let sql = format('insert into dash_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
// //                 'ex_name, last, average, date )' + 'values %L', values);
// //             db.query(sql, function (err, result) {
// //                 if (err) throw err;
// //             });
// //         }
// //     }, 5000);
// // }
// /////////////////
// //   SYS/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'SYS/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into sys_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   CVC/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CVC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   ADX/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ADX/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into adx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  XLM/ETH //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XLM/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xlm_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  ENG/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ENG/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into eng_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  ARK/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'ARK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into ark_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  BAY/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BAY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bay_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  MANA/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'MANA/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into mana_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  GUP/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GUP/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gup_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  CLOAK/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CLOAK/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cloak_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //  OMG/USDT //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'OMG/USDT'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into omg_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   STEEM/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'STEEM/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into steem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   CFI/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'CFI/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into cfi_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   VIB/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'VIB/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into vib_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   DCT/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'DCT/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into dct_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   EMC2/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EMC2/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into emc2_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   GNT/ETH //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'GNT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into gnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   BNT/ETH //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'BNT/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into bnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   XMY/BTC //
/////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XMY/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xmy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //    EMC/BTC    //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'EMC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into emc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // // ///////////////////////
// // // //    XWC/BTC    //
// // // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bittrex'
        ]
        const symbol = 'XWC/BTC'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
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
            let sql = format('insert into xec_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}



module.exports = db