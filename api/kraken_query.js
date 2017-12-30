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


// ///////////////////////
// //     BTC/USD       //
// ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTC/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btc_usd' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



// ///////////////////////
// //     LTC/USD       //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LTC/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
            
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ltc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// ///////////////////////
// //     LTC/BTC      //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LTC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ltc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////////
// //     ETH/USD      //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;


                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETH/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into eth_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


///////////////////////
//     ETC/BTC    //
///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// //     ETC/USD    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETC/USD'
        const tickers = {}
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
            let sql = format('insert into etc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //     LTC/EUR    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'LTC/EUR'
        const tickers = {}
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
            let sql = format('insert into ltc_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////////
// //     RRT/USD   //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'RRT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into rrt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////////
// //     RRT/BTC   //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'RRT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);

//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into rrt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //    ZEC/USD        //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZEC/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zec_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //    ZEC/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// //    ETC/EUR      //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETC/EUR'
        const tickers = {}
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
            let sql = format('insert into etc_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //       XMR/USD    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'XMR/USD'
        const tickers = {}
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
            let sql = format('insert into xmr_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XMR/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //       DSH/USD    //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DSH/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dsh_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////////
// //       DSH/BTC   //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DSH/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dsh_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////////
// //       BCC/BTC  //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }




// ///////////////////////
// //       BCU/BTC    //
// ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCU/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcu_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //      BCC/USD   //
// ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCC/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// ///////////////////////
// //      BCU/USD  //
// ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCU/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime); 
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcu_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



// ///////////////////////
// //      BTC/EUR //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'BTC/EUR'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into btc_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}




// ///////////////////////
// //      XRP/USD     //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'XRP/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into xrp_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //      XRP/EUR     //
// ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'XRP/EUR'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into xrp_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
            'kraken'
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

// ///////////////////////
// //      IOT/USD     //
// ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'IOT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into iot_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// /////////////////////
// //  IOT/USD     //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'IOT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into iot_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }






// // /////////////////////
// // //     IOT/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'IOT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into iot_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //     IOT/ETH    //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'IOT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into iot_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// /////////////////////
// //     EOS/USD   //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EOS/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into eos_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////////
// //     EOS/BTC  //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EOS/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into eos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //     EOS/ETH  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'EOS/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eos_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //     REP/EUR  //
// /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'REP/EUR'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into rep_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //     EOS/ETH  //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EOS/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into eos_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //     SAN/USD  //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SAN/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into san_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////////
// //    SAN/BTC  //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SAN/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into san_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //    SAN/ETH  //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SAN/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into san_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////
// //    OMG/USD      //
// ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMG/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omg_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////////
// //    OMG/BTC      //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMG/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //    OMG/ETH     //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMG/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BCH/USD     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'BCH/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;

                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into bch_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCH/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bch_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////////
// //    BCH/ETH     //
// /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCH/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bch_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////
// //    NEO/USD     //
// ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NEO/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into neo_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ///////////////////
// //    NEO/BTC     //
// ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NEO/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into neo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // ///////////////////
// // //    NEO/ETH     //
// // ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NEO/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into neo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // ///////////////////
// // //    ETP/USD    //
// // ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETP/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into etp_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////
// //    ETP/BTC    //
// ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETP/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into etp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // ///////////////////
// // //    ETP/ETH    //
// // ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETP/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into etp_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// ///////////////////
// //    QTM/USD  //
// ///////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QTM/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qtm_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // /////////////////
// // //   QTM/BTC  //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QTM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qtm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// // /////////////////
// // //   QTM/ETH  //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QTM/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qtm_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// /////////////////
// //   BT1/USD  //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BT1/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bt1_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   BT2/USD  //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BT2/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bt2_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   BT1/BTC  //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BT1/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bt1_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   BT2/BTC  //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BT2/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bt2_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   AVT/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'AVT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into avt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   AVT/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'AVT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into avt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   AVT/ETH //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'AVT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into avt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   EDO/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EDO/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into edo_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   EDO/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EDO/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into edo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   EDO/ETH //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EDO/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into edo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   BTG/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTG/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btg_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   BTG/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTG/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   DAT/USD' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DAT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dat_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   DAT/BTC' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DAT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dat_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   DAT/ETH' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DAT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dat_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   QSH/USD' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QSH/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qsh_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   QSH/BTC' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QSH/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qsh_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// /////////////////
// //   QSH/ETH' //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'QSH/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into qsh_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// /////////////////
// //   YYW/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'YYW/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into yyw_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   YYW/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'YYW/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into yyw_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   YYW/ETC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'YYW/ETC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into yyw_etc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   GNT/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GNT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gnt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   GNT/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GNT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// /////////////////
// //   GNT/ETH //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GNT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   SNT/USD //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SNT/USD'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into snt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ////////////////
// //   SNT/BTC //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SNT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into snt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



// ////////////////
// //   SNT/ETH //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SNT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into snt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// ////////////////
// //   IOT/EUR //
// /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'IOT/EUR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into iot_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// // ///////////////////////
// // //     BTC/USD     //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into btc_usd' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
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
            'kraken'
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
// // //     USDT/USD      //
// // ///////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'USDT/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into usdt_usd' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     LTC/USD       //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'LTC/USD'
        const tickers = {}
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
            let sql = format('insert into ltc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     ETH/EUR       //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/EUR'
        const tickers = {}
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
            let sql = format('insert into eth_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     LTC/BTC      //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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

// // ///////////////////////
// // //     BCH/EUR      //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'BCH/EUR'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;


                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into bch_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// // ///////////////////////
// // //     ETH/BTC     //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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


// // ///////////////////////
// // //     ETC/BTC    //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into etc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //     LSK/BTC    //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LSK/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into lsk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //     ETC/USDT    //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ETC/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into etc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //     FCT/BTC    //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'FCT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ftc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // ///////////////////////
// // //    ZEC/USD       //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ZEC/USD'
        const tickers = {}
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
            let sql = format('insert into zec_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //    ETH/ETC       //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/ETC'
        const tickers = {}
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
            let sql = format('insert into eth_etc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //    ZEC/BTC       //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZEC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);

//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zec_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //    EOS/BTC       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'EOS/BTC'
        const tickers = {}
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
            let sql = format('insert into eos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    DASH/EUR       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'DASH/EUR'
        const tickers = {}
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
            let sql = format('insert into dash_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    ETH/EOS       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/EOS'
        const tickers = {}
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
            let sql = format('insert into eth_eos' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    XMR/EUR       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'XMR/EUR'
        const tickers = {}
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
            let sql = format('insert into xmr_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// ///////////////////////
// //    ZEC/EUR       //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ZEC/EUR'
        const tickers = {}
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
            let sql = format('insert into zec_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //    STRAT/BTC       //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'STRAT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);

//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into start_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       XMR/USDT   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XMR/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xmr_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       BCN/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCN/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       REP/BTC   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // ///////////////////////
// // //       ICN/BTC   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ICN/BTC'
        const tickers = {}
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
            let sql = format('insert into icn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       ICN/ETH   //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ICN/ETH'
        const tickers = {}
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
            let sql = format('insert into icn_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // ///////////////////////
// // //       BURST/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BURST/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into burst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       ARDR/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ARDR/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ardr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       VTC/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'VTC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// ///////////////////////
// //       XMR/BTC    //
// ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // ///////////////////////
// // //       DGB/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DGB/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dgb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       BTS/BTC   //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTS/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bts_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // ///////////////////////
// // //       DASH/BTC  //
// // ///////////////////////

{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // //       NXT/USDT    //
// // ///////////////////////

// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NXT/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into nxt_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


// // ///////////////////////
// // //      XRP/USDT     //
// // ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XRP/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xrp_usdе' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // ///////////////////////
// // //      XRP/BTC     //
// // ///////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XRP/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xrp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



// // /////////////////////
// // //    OMG/BTC      //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMG/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    OMG/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMG/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    ETC/ETH     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // /////////////////////
// // //    PPC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'PPC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ppc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    SBD/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SBD/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into sbd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    REP/ETH     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // /////////////////////
// // //    MLN/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // //    BCY/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCY/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    RIC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'RIC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ric_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BTCD/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTCD/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btcd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    FLO/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'FLO/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into flo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    LTC/XMR     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LTC/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into ltc_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // //    XVC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XVC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    PINK/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'PINK/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into pink_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    CVC/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'CVC/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into cvc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BTM/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    XBC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XBC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xbc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    HUC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'HUC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into huc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    NMC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NMC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into nmc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    NXT/XMR     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NXT/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xct_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    ZEC/XMR     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZEC/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zec_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    GNO/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // //    ETH/CAD    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/CAD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_cad' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    BTC/JPY    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
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
// // /////////////////////
// // //    MLN/ETH    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'MLN/ETH'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into mln_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    ETH/JPY    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/JPY'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_jpy' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    BTC/GBP    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'BTC/GBP'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into btc_gbp' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    ETH/GBP    //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/GBP'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_gbp' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    DASH/XMR    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DASH/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dash_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    MAID/XMR    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'MAID/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into maid_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BLK/XMR    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BLK/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into blk_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BCN/XMR    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCN/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bcn_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BTCD/XMR    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BTCD/XMR'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into btcd_xmr' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // // /////////////////////
// // // //    BCH/USDT   //
// // // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCH/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bch_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // // /////////////////////
// // // //    NXT/BTC   //
// // // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NXT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into nxt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // // /////////////////////
// // // //    DOGE/BTC   //
// // // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // // /////////////////////
// // // //    ETH/GNO   //
// // // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'ETH/GNO'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into eth_gno' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////////
// // //    BCH/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// // /////////////////////
// // //    SC/BTC	    //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into sc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    XEM/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XEM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    BCH/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BCH/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bch_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    POT/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'POT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into pot_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //    MAID/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'MAID/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into maid_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //   BLK/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BLK/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into blk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //   PASC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'PASC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into pasc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////////
// // //   NAV/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NAV/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into nav_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   STORJ/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'STORJ/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into storj_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   GAME/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GAME/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into game_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   EXP/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EXP/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into exp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   LBC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LBC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into lbc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   ZRX/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZRX/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zrx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   AMP/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'AMP/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into amp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //   DCR/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'DCR/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into dcr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  REP/USDT     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'REP/USDT'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into rep_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  OMNI/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'OMNI/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into omni_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  RADS/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'RADS/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into rads_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  CLAM/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'CLAM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into clam_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  GRC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GRC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into grc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  FLDC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'FLDC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into fldc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  GNO/BTC     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
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
// //////////////////////
// // //  BTC/CAD     //
// // /////////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'BTC/CAD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into btc_cad' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// //////////////////////
// // //  XPM/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XPM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xpm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  NXC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'NXC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into nxc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  GAS/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GAS/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gas_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  VRC/BTC     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'VRC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  ZEC/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZEC/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zec_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  VIA/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'VIA/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into via_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  ZRX/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'ZRX/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into zrx_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// //////////////////////
// // //  LSK/ETH     //
// // /////////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'LSK/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into lsk_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

// // /////////////////
// // //   GNT/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GNT/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   DASH/USD //
// // /////////////////
{
    let dat = {};
    "use strict";
    (async () => {
        const exchanges = [
            'kraken'
        ]
        const symbol = 'DASH/USD'
        const tickers = {}
        await Promise.all(exchanges.map(exchangeId =>
            new Promise(async (resolve, reject) => {
                const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
                while (true) {
                    const ticker = await exchange.fetchTicker(symbol)
                    tickers[exchangeId] = ticker;
                    Object.keys(tickers).map(exchangeId => {
                        const ticker = tickers[exchangeId];
                        dat = ticker;
                        dat.ex_name = exchangeId;
                    })
                }
            })
        ))
    })();
    setInterval(function () {
        if (dat.symbol !== undefined) {
            let timeUnix = unixTime(dat.datetime);
            let values = [
                [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
            ];
            let sql = format('insert into dash_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// // /////////////////
// // //   SYS/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'SYS/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into sys_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   CVC/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'CVC/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into cvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   STEEM/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'STEEM/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into steem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   EMC2/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'EMC2/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into emc2_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   GNT/ETH //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'GNT/ETH'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into gnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   BELA/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'BELA/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into bela_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// // /////////////////
// // //   XCP/BTC //
// // /////////////////
// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'kraken'
//         ]
//         const symbol = 'XCP/BTC'
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     const ticker = await exchange.fetchTicker(symbol)
//                     tickers[exchangeId] = ticker;
//                     Object.keys(tickers).map(exchangeId => {
//                         const ticker = tickers[exchangeId];
//                         dat = ticker;
//                         dat.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat.symbol !== undefined) {
//             let timeUnix = unixTime(dat.datetime);
//             let values = [
//                 [dat.symbol, dat.high, dat.low, dat.bid, dat.ask, dat.baseVolume, timeUnix, dat.ex_name, dat.last, dat.average, dat.datetime]
//             ];
//             let sql = format('insert into xcp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }





module.exports = db