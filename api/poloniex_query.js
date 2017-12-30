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
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'poloniex'
//         ]
//         const symbol = [
//             'XRP/USDT',
//             'BTC/USDT'
//         ]
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     for(i of symbol){
//                         const ticker = await exchange.fetchTicker(i)
//                         tickers[exchangeId] = ticker;
//                         Object.keys(tickers).map(exchangeId => {
//                         dat.i = ticker;
//                         dat.ex_name = exchangeId;
//                         console.log(tickers);
//                     })
//                     }
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
        
//         // if (dat.symbol !== undefined) {
//         //     let timeUnix = unixTime(dat.datetime);
//         //     let values = [
//         //         [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//         //     ];
//         //     let sql = format('insert into btc_usdt' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
//         //         'ex_name, last, average, date )' + 'values %L', values);
//         //     db.query(sql, function (err, result) {
//         //         if (err) throw err;
//         //     });
//         // }
//     }, 5000);
// }


// ///////////////////////
// //     BTC/USDT       //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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

// ///////////////////////
// //     XLM/BTC      //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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



// ///////////////////////
// //     LTC/USDT       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //     LTC/BTC      //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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

// ///////////////////////
// //     ETH/USDT      //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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


// ///////////////////////
// //     ETH/BTC     //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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


// ///////////////////////
// //     ETC/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// //     ETC/USDT    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// ///////////////////////
// //     FCT/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    ZEC/USDT       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// ///////////////////////
// //    ZEC/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    NEOS/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    STRAT/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// //       BCN/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BCN/BTC'
        const tickers = {}
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
            let sql = format('insert into bcn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //       BURST/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //       ARDR/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'ARDR/BTC'
        const tickers = {}
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
            let sql = format('insert into ardr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //       XMR/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// ///////////////////////
// //       BTS/BTC   //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BTS/BTC'
        const tickers = {}
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
            let sql = format('insert into bts_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       DASH/BTC  //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// ///////////////////////
// //       NXT/USDT    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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


// ///////////////////////
// //      XRP/USDT     //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            let sql = format('insert into xrp_usdе' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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



// /////////////////////
// //    OMG/BTC      //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    OMG/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    ETC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    PPC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    SBD/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    REP/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    BCY/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    RIC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'RIC/BTC'
        const tickers = {}
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
            let sql = format('insert into ric_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //    FLO/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    LTC/XMR     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'LTC/XMR'
        const tickers = {}
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
            let sql = format('insert into ltc_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// /////////////////////
// //    PINK/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    CVC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //    BTM/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BTM/BTC'
        const tickers = {}
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
            let sql = format('insert into btm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    XBC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'XBC/BTC'
        const tickers = {}
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
            let sql = format('insert into xbc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    HUC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'HUC/BTC'
        const tickers = {}
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
            let sql = format('insert into huc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    NMC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'NMC/BTC'
        const tickers = {}
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
            let sql = format('insert into nmc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    NXT/XMR     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'NXT/XMR'
        const tickers = {}
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
            let sql = format('insert into xct_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    ZEC/XMR     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'ZEC/XMR'
        const tickers = {}
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
            let sql = format('insert into zec_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    GNO/ETH    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    DASH/XMR    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'DASH/XMR'
        const tickers = {}
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
            let sql = format('insert into dash_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    MAID/XMR    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'MAID/XMR'
        const tickers = {}
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
            let sql = format('insert into maid_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BLK/XMR    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BLK/XMR'
        const tickers = {}
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
            let sql = format('insert into blk_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BCN/XMR    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BCN/XMR'
        const tickers = {}
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
            let sql = format('insert into bcn_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BTCD/XMR    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BTCD/XMR'
        const tickers = {}
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
            let sql = format('insert into btcd_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    BCH/USDT   //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BCH/USDT'
        const tickers = {}
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
            let sql = format('insert into bch_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
            'poloniex'
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
// //    BCH/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////////
// //    SC/BTC	    //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// /////////////////////
// //    BCH/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BCH/ETH'
        const tickers = {}
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
            let sql = format('insert into bch_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    POT/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// /////////////////////
// //   BLK/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //   PASC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'PASC/BTC'
        const tickers = {}
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
            let sql = format('insert into pasc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
//////////////////////
// //   STORJ/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// //   EXP/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
//////////////////////
// //   LBC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //   ZRX/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'ZRX/BTC'
        const tickers = {}
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
            let sql = format('insert into zrx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //   AMP/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
//////////////////////
// //   DCR/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'DCR/BTC'
        const tickers = {}
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
            let sql = format('insert into dcr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  REP/USDT     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'REP/USDT'
        const tickers = {}
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
            let sql = format('insert into rep_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  OMNI/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //  RADS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
            'poloniex'
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
// //  FLDC/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //  GNO/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //  XPM/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'XPM/BTC'
        const tickers = {}
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
            let sql = format('insert into xpm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //  GAS/BTC     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'GAS/BTC'
        const tickers = {}
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
            let sql = format('insert into gas_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //  ZEC/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
//////////////////////
// //  VIA/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'VIA/ETH'
        const tickers = {}
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
            let sql = format('insert into via_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  ZRX/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'ZRX/ETH'
        const tickers = {}
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
            let sql = format('insert into zrx_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
//////////////////////
// //  LSK/ETH     //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'LSK/ETH'
        const tickers = {}
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
            let sql = format('insert into lsk_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'poloniex'
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
// //   DASH/USDT //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// /////////////////
// //   SYS/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// //   STEEM/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
// //   EMC2/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
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
            'poloniex'
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
// /////////////////
// //   BELA/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'BELA/BTC'
        const tickers = {}
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
            let sql = format('insert into bela_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////
// //   XCP/BTC //
// /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'poloniex'
        ]
        const symbol = 'XCP/BTC'
        const tickers = {}
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
            let sql = format('insert into xcp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}




module.exports = db