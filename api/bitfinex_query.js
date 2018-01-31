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



///////////////////////
//     LTC/USD       //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into ltc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into ltc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//     ETH/USD      //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into eth_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


///////////////////////
//     ETH/BTC     //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into eth_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


///////////////////////
//     ETC/BTC    //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into etc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//     ETC/USD    //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into etc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


///////////////////////
//     RRT/USD   //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'RRT/USD'
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
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into rrt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//     RRT/BTC   //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'RRT/BTC'
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
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into rrt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////////
//    ZEC/USD        //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into zec_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////////
//    ZEC/BTC       //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into zec_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////////
//       XMR/USD    //
///////////////////////

{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into xmr_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
                        dat_bitfinex = ticker;
                        dat_bitfinex.ex_name = exchangeId
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
            let sql = format('insert into xmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////////
//       DSH/USD    //
///////////////////////

// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into dsh_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

///////////////////////
//       DSH/BTC   //
///////////////////////

// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into dsh_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }

///////////////////////
//       BCC/BTC  //
///////////////////////

// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bcc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }




///////////////////////
//       BCU/BTC    //
///////////////////////

// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bcu_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
///////////////////////
//      BCC/USD   //
///////////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bcc_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


///////////////////////
//      BCU/USD  //
///////////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime); 
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bcu_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



///////////////////////
//      BTC/EUR //
///////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into btc_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}




///////////////////////
//      XRP/USD     //
///////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into xrp_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//      XRP/BTC     //
///////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into xrp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////////
//      IOT/USD     //
///////////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
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
// //     IOT/BTC     //
// /////////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into iot_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
/////////////////////
//     IOT/ETH    //
/////////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into iot_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


/////////////////////
//     EOS/USD   //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'EOS/USD'
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
            let sql = format('insert into eos_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////////
//     EOS/BTC  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into eos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//     EOS/ETH  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into eos_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////////
//     EOS/ETH  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into eos_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//     SAN/USD  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'SAN/USD'
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
            let sql = format('insert into san_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////////
//    SAN/BTC  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'SAN/BTC'
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
            let sql = format('insert into san_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    SAN/ETH  //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'SAN/ETH'
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
            let sql = format('insert into san_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////
//    OMG/USD      //
///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'OMG/USD'
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
            let sql = format('insert into omg_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
// /////////////////////
// //    BCH/USD     //
// /////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into bch_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    BCH/BTC     //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into bch_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////////
//    BCH/ETH     //
/////////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into bch_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    NEO/USD     //
///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'NEO/USD'
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
            let sql = format('insert into neo_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

///////////////////
//    NEO/BTC     //
///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into neo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////
// //    ETP/USD    //
// ///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'ETP/USD'
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
            let sql = format('insert into etp_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
///////////////////
//    ETP/BTC    //
///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'ETP/BTC'
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
            let sql = format('insert into etp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

// ///////////////////
// //    ETP/ETH    //
// ///////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'ETP/ETH'
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
            let sql = format('insert into etp_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


///////////////////
//    QTM/USD  //
///////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into qtm_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }




// /////////////////
// //   QTM/ETH  //
// /////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into qtm_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }


/////////////////
//   BT1/USD  //
/////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bt1_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
// /////////////////
// //   BT2/USD  //
// /////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;

//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bt2_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
/////////////////
//   BT1/BTC  //
/////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bt1_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
/////////////////
//   BT2/BTC  //
/////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into bt2_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }
/////////////////
//   AVT/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'AVT/USD'
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
            let sql = format('insert into avt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   AVT/BTC //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'AVT/BTC'
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
            let sql = format('insert into avt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   AVT/ETH //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'AVT/ETH'
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
            let sql = format('insert into avt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   EDO/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'EDO/USD'
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
            let sql = format('insert into edo_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   EDO/BTC //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'EDO/BTC'
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
            let sql = format('insert into edo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   EDO/ETH //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'EDO/ETH'
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
            let sql = format('insert into edo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   BTG/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'BTG/USD'
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
            let sql = format('insert into btg_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   BTG/BTC //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into btg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   DAT/USD' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'DAT/USD'
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
            let sql = format('insert into dat_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   DAT/BTC' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'DAT/BTC'
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
            let sql = format('insert into dat_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   DAT/ETH' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'DAT/ETH'
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
            let sql = format('insert into dat_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   QSH/USD' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'QSH/USD'
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
            let sql = format('insert into qsh_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   QSH/BTC' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'QSH/BTC'
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
            let sql = format('insert into qsh_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


/////////////////
//   QSH/ETH' //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'QSH/ETH'
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
            let sql = format('insert into qsh_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}


/////////////////
//   YYW/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'YYW/USD'
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
            let sql = format('insert into yyw_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   YYW/BTC //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'YYW/BTC'
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
            let sql = format('insert into yyw_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   GNT/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'GNT/USD'
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
            let sql = format('insert into gnt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   GNT/BTC //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

/////////////////
//   GNT/ETH //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into gnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}
/////////////////
//   SNT/USD //
/////////////////
{
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
        ]
        const symbol = 'SNT/USD'
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
            let sql = format('insert into snt_usd' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into snt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
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
    let dat_bitfinex = {};
    "use strict";
    (async () => {
        const exchanges = [
            'bitfinex'
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
            let sql = format('insert into snt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
                'ex_name, last, average, date )' + 'values %L', values);
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    }, 5000);
}

////////////////
//   IOT/EUR //
/////////////////
// {
//     let dat_bitfinex = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bitfinex'
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
//                         dat_bitfinex = ticker;
//                         dat_bitfinex.ex_name = exchangeId;
//                     })
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat_bitfinex.symbol !== undefined) {
//             let timeUnix = unixTime(dat_bitfinex.datetime);
//             let values = [
//                 [dat_bitfinex.symbol, dat_bitfinex.high, dat_bitfinex.low, dat_bitfinex.bid, dat_bitfinex.ask, dat_bitfinex.baseVolume, timeUnix, dat_bitfinex.ex_name, dat_bitfinex.last, dat_bitfinex.average, dat_bitfinex.datetime]
//             ];
//             let sql = format('insert into iot_eur' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//     }, 5000);
// }



module.exports = db