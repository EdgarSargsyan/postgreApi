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
// /      ZEC/USD       //
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

/////////////////////////
//////    ETC/ETH     //
/////////////////////////
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






module.exports = db