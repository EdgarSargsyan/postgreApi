// const promise = require('bluebird');
// const path = require('path');
// const pg = require('pg');
// const convert = require('object-array-converter');
// const toArray = require('object-values-to-array');
// const unixTime = require('unix-time');
// const format = require('pg-format');

// const options = {
//     // Initialization Options
//     promiseLib: promise
// };
// const pgp = require('pg-promise')(options);





// // connect db
// const connectionString = 'postgres://postgres:172839@37.143.14.88:5432/exchange_db';
// const getConnection = require('pg-connect')(connectionString)
// const db = pgp(connectionString);




// const ccxt = require('./ccxt-master/ccxt.js');




// {
//     let dat = {};
//     "use strict";
//     (async () => {
//         const exchanges = [
//             'bittrex'
//         ]
//         const symbol = [
//             'BTC/USDT',
//             'XRP/USDT',
//             'XRP/BTC',
//             'ADA/BTC',
//             'XLM/BTC',
//             'BCC/BTC',
//             'ETH/USDT',
//             'XRP/ETH',
//             'ETH/BTC',
//             'XVG/BTC',
//             'ZCL/BTC',
//             'QTUM/BTC',
//             'NEO/BTC',
//             'SC/BTC',
//             'NXT/BTC',
//             'STORJ/BTC',
//             'STRAT/BTC',
//             'XEM/BTC',
//             'DGB/BTC',
//             'LSK/BTC',
//             'ADA/ETH',
//             'LTC/BTC',
//             'BCC/USDT',
//             'OMG/BTC',
//             'SALT/BTC',
//             'RDD/BTC',
//             'RCN/BTC',
//             'ETC/BTC',
//             'XMR/BTC',
//             'SYS/BTC',
//             'BTG/BTC',
//             'VOX/BTC',
//             'NEO/USDT',
//             'LTC/USDT',
//             'DOGE/BTC',
//             'SNT/BTC',
//             'THC/BTC',
//             'ZEC/BTC',
//             'RISE/BTC',
//             'XZC/BTC',
//             'PAY/BTC',
//             'KMD/BTC',
//             'WAVES/BTC',
//             'DASH/BTC',
//             'NBT/BTC',
//             'EDG/BTC',
//             'TRIG/BTC',
//             'MCO/BTC',
//             'POT/BTC',
//             'VTC/BTC',
//             'FUN/BTC',
//             'POWR/BTC',
//             'ZEN/BTC',
//             'GNT/BTC',
//             'CANN/BTC',
//             'PIVX/BTC',
//             'XVG/USDT',
//             'CVC/BTC',
//             'ADX/BTC',
//             'XLM/ETH',
//             'ENG/BTC',
//             'ARK/BTC',
//             'BAY/BTC',
//             'MANA/BTC',
//             'GUP/BTC',
//             'CLOAK/BTC',
//             'OMG/USDT',
//             'EMC2/BTC',
//             'BLK/BTC',
//             'BAT/BTC',
//             'TIX/BTC',
//             'MONA/BTC',
//             'HMQ/BTC',
//             'UNB/BTC',
//             'REP/BTC',
//             'SHIFT/BTC',
//             'MTL/BTC',
//             'NEOS/BTC',
//             'UBQ/BTC',
//             'DOPE/BTC',
//             'STEEM/BTC',
//             'CFI/BTC',
//             'VIB/BTC',
//             'DCT/BTC',
//             'OMG/ETH',
//             'XDN/BTC',
//             'AUR/BTC',
//             'ETC/USDT',
//             'PTOY/BTC',
//             'BURST/BTC',
//             'RADS/BTC',
//             'LBC/BTC',
//             'XMG/BTC',
//             'OK/BTC',
//             'NAV/BTC',
//             'AGRS/BTC',
//             'BTG/USDT',
//             'BNT/BTC',
//             'NLG/BTC',
//             'IOP/BTC',
//             'GRS/BTC',
//             'BCC/ETH',
//             'SLR/BTC',
//             'MER/BTC',
//             'AMP/BTC',
//             'NXT/USDT',
//             '1ST/BTC',
//             'AEON/BTC',
//             'PART/BTC',
//             'FCT/BTC',
//             'NEO/ETH',
//             'OMNI/BTC',
//             'TRST/BTC',
//             'DCR/BTC',
//             'WINGS/BTC',
//             'DASH/USDT',
//             'VIA/BTC',
//             'QTUM/ETH',
//             'XMR/USDT',
//             'ZEC/USDT',
//             'LTC/ETH',
//             'LUN/BTC',
//             'MUSIC/BTC',
//             'FUN/ETH',
//             'LMC/BTC',
//             'XEL/BTC',
//             'GBYTE/BTC',
//             'MEME/BTC',
//             'GAME/BTC',
//             'SLS/BTC',
//             'ION/BTC',
//             'BITB/BTC',
//             'EXP/BTC',
//             'DNT/BTC',
//             'MAID/BTC',
//             'SWT/BTC',
//             'QRL/BTC',
//             'STORJ/ETH',
//             'DYN/BTC',
//             'MYST/BTC',
//             'GCR/BTC',
//             'SBD/BTC',
//             'SALT/ETH',
//             'VRC/BTC',
//             'LGD/BTC',
//             'RLC/BTC',
//             'QWARK/BTC',
//             'MUE/BTC',
//             'GNO/BTC',
//             'CPC/BTC',
//             'XEM/ETH',
//             'NMR/BTC',
//             'DGD/BTC',
//             'SYNX/BTC',
//             'EBST/BTC',
//             'ETC/ETH',
//             'CRB/BTC',
//             'EXCL/BTC',
//             'SNT/ETH',
//             'ANT/BTC',
//             'XCP/BTC',
//             'TX/BTC',
//             'TKS/BTC',
//             'SNRG/BTC',
//             'SPHR/BTC',
//             'NXS/BTC',
//             'FLDC/BTC',
//             'FTC/BTC',
//             'ADT/BTC',
//             'CLUB/BTC',
//             'SC/ETH',
//             'XMR/ETH',
//             'NXC/BTC',
//             'PPC/BTC',
//             'DGB/ETH',
//             'SIB/BTC',
//             'KORE/BTC',
//             'PAY/ETH',
//             'BLOCK/BTC',
//             'BCY/BTC',
//             'SPR/BTC',
//             'GNT/ETH',
//             'BNT/ETH',
//             'XMY/BTC',
//             'EMC/BTC',
//             'XWC/BTC',
//             'PINK/BTC',
//             'BTG/ETH',
//             'DASH/ETH',
//             'ABY/BTC',
//             '2GIVE/BTC',
//             'ADX/ETH',
//             'POWR/ETH',
//             'BLITZ/BTC',
//             'BSD/BTC',
//             'WAVES/ETH',
//             'XST/BTC',
//             'MCO/ETH',
//             'REP/ETH',
//             'EGC/BTC',
//             'CVC/ETH',
//             'COVAL/BTC',
//             'IOC/BTC',
//             'ZEC/ETH',
//             'FLO/BTC',
//             'STRAT/ETH',
//             'VTR/BTC',
//             'GRC/BTC',
//             'START/BTC',
//             'DTB/BTC',
//             'CRW/BTC',
//             'BTCD/BTC',
//             'BAT/ETH',
//             'GOLOS/BTC',
//             'PTC/BTC',
//             'GLD/BTC',
//             'MANA/ETH',
//             'CLAM/BTC',
//             'MLN/BTC',
//             'DMD/BTC',
//             'INCNT/BTC',
//             'ERC/BTC',
//             'GBG/BTC',
//             'WINGS/ETH',
//             'GUP/ETH',
//             'FAIR/BTC',
//             'ENRG/BTC',
//             'PKB/BTC',
//             'RBY/BTC',
//             'ENG/ETH',
//             'VRM/BTC',
//             'ANT/ETH',
//             'TRST/ETH',
//             'XVC/BTC',
//             'INFX/BTC',
//             'TIX/ETH',
//             'SEQ/BTC',
//             'EFL/BTC',
//             'MTL/ETH',
//             'CFI/ETH',
//             'DGD/ETH',
//             'BYC/BTC',
//             'TRUST/BTC',
//             'PDC/BTC',
//             'BRK/BTC',
//             'FCT/ETH',
//             'VIB/ETH',
//             'HMQ/ETH',
//             'CURE/BTC',
//             'LUN/ETH',
//             'MYST/ETH',
//             '1ST/ETH',
//             'BRX/BTC',
//             'PTOY/ETH',
//             'RLC/ETH',
//             'APX/BTC',
//             'DNT/ETH',
//             'ADT/ETH',
//             'LGD/ETH',
//             'QRL/ETH',
//             'NMR/ETH',
//             'GNO/ETH',
//             'CRB/ETH'
//         ]
//         const tickers = {}
//         await Promise.all(exchanges.map(exchangeId =>
//             new Promise(async (resolve, reject) => {
//                 const exchange = new ccxt[exchangeId]({ enableRateLimit: true })
//                 while (true) {
//                     for (i of symbol) {
//                         const ticker = await exchange.fetchTicker(i)
//                         tickers[exchangeId] = ticker;
//                         Object.keys(tickers).map(exchangeId => {
//                             dat[i] = ticker;
//                             dat.ex_name = exchangeId;
//                         })
//                     }
//                 }
//             })
//         ))
//     })();
//     setInterval(function () {
//         if (dat['BTC/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['BTC/USDT'].datetime);
//             let values = [
//                 [dat['BTC/USDT'].symbol, dat['BTC/USDT'].high, dat['BTC/USDT'].low, dat['BTC/USDT'].bid, dat['BTC/USDT'].ask, dat['BTC/USDT'].baseVolume, timeUnix, dat.ex_name, dat['BTC/USDT'].last, dat['BTC/USDT'].average, dat['BTC/USDT'].datetime]
//             ];
//             let sql = format('insert into btc_usdt' + '(symbol, high, low, bid, ask, base_volume,  time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         };
//         if (dat['XRP/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['XRP/USDT'].datetime);
//             let values = [
//                 [dat['XRP/USDT'].symbol, dat['XRP/USDT'].high, dat['XRP/USDT'].low, dat['XRP/USDT'].bid, dat['XRP/USDT'].ask, dat['XRP/USDT'].baseVolume, timeUnix, dat.ex_name, dat['XRP/USDT'].last, dat['XRP/USDT'].average, dat['XRP/USDT'].datetime]
//             ];
//             let sql = format('insert into xrp_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XRP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XRP/BTC'].datetime);
//             let values = [
//                 [dat['XRP/BTC'].symbol, dat['XRP/BTC'].high, dat['XRP/BTC'].low, dat['XRP/BTC'].bid, dat['XRP/BTC'].ask, dat['XRP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XRP/BTC'].last, dat['XRP/BTC'].average, dat['XRP/BTC'].datetime]
//             ];
//             let sql = format('insert into xrp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ADA/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ADA/BTC'].datetime);
//             let values = [
//                 [dat['ADA/BTC'].symbol, dat['ADA/BTC'].high, dat['ADA/BTC'].low, dat['ADA/BTC'].bid, dat['ADA/BTC'].ask, dat['ADA/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ADA/BTC'].last, dat['ADA/BTC'].average, dat['ADA/BTC'].datetime]
//             ];
//             let sql = format('insert into ada_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XLM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XLM/BTC'].datetime);
//             let values = [
//                 [dat['XLM/BTC'].symbol, dat['XLM/BTC'].high, dat['XLM/BTC'].low, dat['XLM/BTC'].bid, dat['XLM/BTC'].ask, dat['XLM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XLM/BTC'].last, dat['XLM/BTC'].average, dat['XLM/BTC'].datetime]
//             ];
//             let sql = format('insert into xlm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['BCC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BCC/BTC'].datetime);
//             let values = [
//                 [dat['BCC/BTC'].symbol, dat['BCC/BTC'].high, dat['BCC/BTC'].low, dat['BCC/BTC'].bid, dat['BCC/BTC'].ask, dat['BCC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BCC/BTC'].last, dat['BCC/BTC'].average, dat['BCC/BTC'].datetime]
//             ];
//             let sql = format('insert into bcc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ETH/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['ETH/USDT'].datetime);
//             let values = [
//                 [dat['ETH/USDT'].symbol, dat['ETH/USDT'].high, dat['ETH/USDT'].low, dat['ETH/USDT'].bid, dat['ETH/USDT'].ask, dat['ETH/USDT'].baseVolume, timeUnix, dat.ex_name, dat['ETH/USDT'].last, dat['ETH/USDT'].average, dat['ETH/USDT'].datetime]
//             ];
//             let sql = format('insert into eth_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XRP/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['XRP/ETH'].datetime);
//             let values = [
//                 [dat['XRP/ETH'].symbol, dat['XRP/ETH'].high, dat['XRP/ETH'].low, dat['XRP/ETH'].bid, dat['XRP/ETH'].ask, dat['XRP/ETH'].baseVolume, timeUnix, dat.ex_name, dat['XRP/ETH'].last, dat['XRP/ETH'].average, dat['XRP/ETH'].datetime]
//             ];
//             let sql = format('insert into xrp_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ETH/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ETH/BTC'].datetime);
//             let values = [
//                 [dat['ETH/BTC'].symbol, dat['ETH/BTC'].high, dat['ETH/BTC'].low, dat['ETH/BTC'].bid, dat['ETH/BTC'].ask, dat['ETH/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ETH/BTC'].last, dat['ETH/BTC'].average, dat['ETH/BTC'].datetime]
//             ];
//             let sql = format('insert into eth_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XVG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XVG/BTC'].datetime);
//             let values = [
//                 [dat['XVG/BTC'].symbol, dat['XVG/BTC'].high, dat['XVG/BTC'].low, dat['XVG/BTC'].bid, dat['XVG/BTC'].ask, dat['XVG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XVG/BTC'].last, dat['XVG/BTC'].average, dat['XVG/BTC'].datetime]
//             ];
//             let sql = format('insert into xvg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ETH/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ETH/BTC'].datetime);
//             let values = [
//                 [dat['ETH/BTC'], dat['ETH/BTC'].high, dat['ETH/BTC'].low, dat['ETH/BTC'].bid, dat['ETH/BTC'].ask, dat['ETH/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ETH/BTC'].last, dat['ETH/BTC'].average, dat['ETH/BTC'].datetime]
//             ];
//             let sql = format('insert into eth_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XQTUM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XQTUM/BTC'].datetime);
//             let values = [
//                 [dat['XQTUM/BTC'], dat['XQTUM/BTC'].high, dat['XQTUM/BTC'].low, dat['XQTUM/BTC'].bid, dat['XQTUM/BTC'].ask, dat['XQTUM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XQTUM/BTC'].last, dat['XQTUM/BTC'].average, dat['XQTUM/BTC'].datetime]
//             ];
//             let sql = format('insert into qtum_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NEO/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NEO/BTC'].datetime);
//             let values = [
//                 [dat['NEO/BTC'], dat['NEO/BTC'].high, dat['NEO/BTC'].low, dat['NEO/BTC'].bid, dat['NEO/BTC'].ask, dat['NEO/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NEO/BTC'].last, dat['NEO/BTC'].average, dat['NEO/BTC'].datetime]
//             ];
//             let sql = format('insert into neo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['SC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SC/BTC'].datetime);
//             let values = [
//                 [dat['SC/BTC'].symbol, dat['SC/BTC'].high, dat['SC/BTC'].low, dat['SC/BTC'].bid, dat['SC/BTC'].ask, dat['SC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SC/BTC'].last, dat['SC/BTC'].average, dat['SC/BTC'].datetime]
//             ];
//             let sql = format('insert into sc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NXT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NXT/BTC'].datetime);
//             let values = [
//                 [dat['NXT/BTC'].symbol, dat['NXT/BTC'].high, dat['NXT/BTC'].low, dat['NXT/BTC'].bid, dat['NXT/BTC'].ask, dat['NXT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NXT/BTC'].last, dat['NXT/BTC'].average, dat['NXT/BTC'].datetime]
//             ];
//             let sql = format('insert into nxt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['STORJ/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['STORJ/BTC'].datetime);
//             let values = [
//                 [dat['STORJ/BTC'].symbol, dat['STORJ/BTC'].high, dat['STORJ/BTC'].low, dat['STORJ/BTC'].bid, dat['STORJ/BTC'].ask, dat['STORJ/BTC'].baseVolume, timeUnix, dat.ex_name, dat['STORJ/BTC'].last, dat['STORJ/BTC'].average, dat['STORJ/BTC'].datetime]
//             ];
//             let sql = format('insert into storj_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['STRAT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['STRAT/BTC'].datetime);
//             let values = [
//                 [dat['STRAT/BTC'].symbol, dat['STRAT/BTC'].high, dat['STRAT/BTC'].low, dat['STRAT/BTC'].bid, dat['STRAT/BTC'].ask, dat['STRAT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['STRAT/BTC'].last, dat['STRAT/BTC'].average, dat['STRAT/BTC'].datetime]
//             ];
//             let sql = format('insert into storj_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XEM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XEM/BTC'].datetime);
//             let values = [
//                 [dat['XEM/BTC'].symbol, dat['XEM/BTC'].high, dat['XEM/BTC'].low, dat['XEM/BTC'].bid, dat['XEM/BTC'].ask, dat['XEM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XEM/BTC'].last, dat['XEM/BTC'].average, dat['XEM/BTC'].datetime]
//             ];
//             let sql = format('insert into xem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['DGB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DGB/BTC'].datetime);
//             let values = [
//                 [dat['DGB/BTC'].symbol, dat['DGB/BTC'].high, dat['DGB/BTC'].low, dat['DGB/BTC'].bid, dat['DGB/BTC'].ask, dat['DGB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DGB/BTC'].last, dat['DGB/BTC'].average, dat['DGB/BTC'].datetime]
//             ];
//             let sql = format('insert into xem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['LSK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LSK/BTC'].datetime);
//             let values = [
//                 [dat['LSK/BTC'].symbol, dat['LSK/BTC'].high, dat['LSK/BTC'].low, dat['LSK/BTC'].bid, dat['LSK/BTC'].ask, dat['LSK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LSK/BTC'].last, dat['LSK/BTC'].average, dat['LSK/BTC'].datetime]
//             ];
//             let sql = format('insert into lsk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ADA/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ADA/ETH'].datetime);
//             let values = [
//                 [dat['ADA/ETH'].symbol, dat['ADA/ETH'].high, dat['ADA/ETH'].low, dat['ADA/ETH'].bid, dat['ADA/ETH'].ask, dat['ADA/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ADA/ETH'].last, dat['ADA/ETH'].average, dat['ADA/ETH'].datetime]
//             ];
//             let sql = format('insert into ada_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['LTC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LTC/BTC'].datetime);
//             let values = [
//                 [dat['LTC/BTC'].symbol, dat['LTC/BTC'].high, dat['LTC/BTC'].low, dat['LTC/BTC'].bid, dat['LTC/BTC'].ask, dat['LTC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LTC/BTC'].last, dat['LTC/BTC'].average, dat['LTC/BTC'].datetime]
//             ];
//             let sql = format('insert into ltc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['BCC/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['BCC/USDT'].datetime);
//             let values = [
//                 [dat['BCC/USDT'].symbol, dat['BCC/USDT'].high, dat['BCC/USDT'].low, dat['BCC/USDT'].bid, dat['BCC/USDT'].ask, dat['BCC/USDT'].baseVolume, timeUnix, dat.ex_name, dat['BCC/USDT'].last, dat['BCC/USDT'].average, dat['BCC/USDT'].datetime]
//             ];
//             let sql = format('insert into bcc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['OMG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['OMG/BTC'].datetime);
//             let values = [
//                 [dat['OMG/BTC'].symbol, dat['OMG/BTC'].high, dat['OMG/BTC'].low, dat['OMG/BTC'].bid, dat['OMG/BTC'].ask, dat['OMG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['OMG/BTC'].last, dat['OMG/BTC'].average, dat['OMG/BTC'].datetime]
//             ];
//             let sql = format('insert into omg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['SALT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SALT/BTC'].datetime);
//             let values = [
//                 [dat['SALT/BTC'].symbol, dat['SALT/BTC'].high, dat['SALT/BTC'].low, dat['SALT/BTC'].bid, dat['SALT/BTC'].ask, dat['SALT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SALT/BTC'].last, dat['SALT/BTC'].average, dat['SALT/BTC'].datetime]
//             ];
//             let sql = format('insert into salt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['RDD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RDD/BTC'].datetime);
//             let values = [
//                 [dat['RDD/BTC'].symbol, dat['RDD/BTC'].high, dat['RDD/BTC'].low, dat['RDD/BTC'].bid, dat['RDD/BTC'].ask, dat['RDD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RDD/BTC'].last, dat['RDD/BTC'].average, dat['RDD/BTC'].datetime]
//             ];
//             let sql = format('insert into rdd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['RCN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RCN/BTC'].datetime);
//             let values = [
//                 [dat['RCN/BTC'].symbol, dat['RCN/BTC'].high, dat['RCN/BTC'].low, dat['RCN/BTC'].bid, dat['RCN/BTC'].ask, dat['RCN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RCN/BTC'].last, dat['RCN/BTC'].average, dat['RCN/BTC'].datetime]
//             ];
//             let sql = format('insert into rcn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ETC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ETC/BTC'].datetime);
//             let values = [
//                 [dat['ETC/BTC'].symbol, dat['ETC/BTC'].high, dat['ETC/BTC'].low, dat['ETC/BTC'].bid, dat['ETC/BTC'].ask, dat['ETC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ETC/BTC'].last, dat['ETC/BTC'].average, dat['ETC/BTC'].datetime]
//             ];
//             let sql = format('insert into etc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XMR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XMR/BTC'].datetime);
//             let values = [
//                 [dat['XMR/BTC'].symbol, dat['XMR/BTC'].high, dat['XMR/BTC'].low, dat['XMR/BTC'].bid, dat['XMR/BTC'].ask, dat['XMR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XMR/BTC'].last, dat['XMR/BTC'].average, dat['XMR/BTC'].datetime]
//             ];
//             let sql = format('insert into xmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['SYS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SYS/BTC'].datetime);
//             let values = [
//                 [dat['SYS/BTC'].symbol, dat['SYS/BTC'].high, dat['SYS/BTC'].low, dat['SYS/BTC'].bid, dat['SYS/BTC'].ask, dat['SYS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SYS/BTC'].last, dat['SYS/BTC'].average, dat['SYS/BTC'].datetime]
//             ];
//             let sql = format('insert into sys_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }

//         if (dat['BTG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BTG/BTC'].datetime);
//             let values = [
//                 [dat['BTG/BTC'].symbol, dat['BTG/BTC'].high, dat['BTG/BTC'].low, dat['BTG/BTC'].bid, dat['BTG/BTC'].ask, dat['BTG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BTG/BTC'].last, dat['BTG/BTC'].average, dat['BTG/BTC'].datetime]
//             ];
//             let sql = format('insert into btg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['VOX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VOX/BTC'].datetime);
//             let values = [
//                 [dat['VOX/BTC'].symbol, dat['VOX/BTC'].high, dat['VOX/BTC'].low, dat['VOX/BTC'].bid, dat['VOX/BTC'].ask, dat['VOX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VOX/BTC'].last, dat['VOX/BTC'].average, dat['VOX/BTC'].datetime]
//             ];
//             let sql = format('insert into vox_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NEO/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['NEO/USDT'].datetime);
//             let values = [
//                 [dat['NEO/USDT'].symbol, dat['NEO/USDT'].high, dat['NEO/USDT'].low, dat['NEO/USDT'].bid, dat['NEO/USDT'].ask, dat['NEO/USDT'].baseVolume, timeUnix, dat.ex_name, dat['NEO/USDT'].last, dat['NEO/USDT'].average, dat['NEO/USDT'].datetime]
//             ];
//             let sql = format('insert into neo_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['LTC/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['LTC/USDT'].datetime);
//             let values = [
//                 [dat['LTC/USDT'].symbol, dat['LTC/USDT'].high, dat['LTC/USDT'].low, dat['LTC/USDT'].bid, dat['LTC/USDT'].ask, dat['LTC/USDT'].baseVolume, timeUnix, dat.ex_name, dat['LTC/USDT'].last, dat['LTC/USDT'].average, dat['LTC/USDT'].datetime]
//             ];
//             let sql = format('insert into ltc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['DOGE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DOGE/BTC'].datetime);
//             let values = [
//                 [dat['DOGE/BTC'].symbol, dat['DOGE/BTC'].high, dat['DOGE/BTC'].low, dat['DOGE/BTC'].bid, dat['DOGE/BTC'].ask, dat['DOGE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DOGE/BTC'].last, dat['DOGE/BTC'].average, dat['DOGE/BTC'].datetime]
//             ];
//             let sql = format('insert into doge_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['SNT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SNT/BTC'].datetime);
//             let values = [
//                 [dat['SNT/BTC'].symbol, dat['SNT/BTC'].high, dat['SNT/BTC'].low, dat['SNT/BTC'].bid, dat['SNT/BTC'].ask, dat['SNT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SNT/BTC'].last, dat['SNT/BTC'].average, dat['SNT/BTC'].datetime]
//             ];
//             let sql = format('insert into snt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['THC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['THC/BTC'].datetime);
//             let values = [
//                 [dat['THC/BTC'].symbol, dat['THC/BTC'].high, dat['THC/BTC'].low, dat['THC/BTC'].bid, dat['THC/BTC'].ask, dat['THC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['THC/BTC'].last, dat['THC/BTC'].average, dat['THC/BTC'].datetime]
//             ];
//             let sql = format('insert into thc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['ZEC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ZEC/BTC'].datetime);
//             let values = [
//                 [dat['ZEC/BTC'].symbol, dat['ZEC/BTC'].high, dat['ZEC/BTC'].low, dat['ZEC/BTC'].bid, dat['ZEC/BTC'].ask, dat['ZEC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ZEC/BTC'].last, dat['ZEC/BTC'].average, dat['ZEC/BTC'].datetime]
//             ];
//             let sql = format('insert into zec_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['RISE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RISE/BTC'].datetime);
//             let values = [
//                 [dat['RISE/BTC'].symbol, dat['RISE/BTC'].high, dat['RISE/BTC'].low, dat['RISE/BTC'].bid, dat['RISE/BTC'].ask, dat['RISE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RISE/BTC'].last, dat['RISE/BTC'].average, dat['RISE/BTC'].datetime]
//             ];
//             let sql = format('insert into rise_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['XZC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XZC/BTC'].datetime);
//             let values = [
//                 [dat['XZC/BTC'].symbol, dat['XZC/BTC'].high, dat['XZC/BTC'].low, dat['XZC/BTC'].bid, dat['XZC/BTC'].ask, dat['XZC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XZC/BTC'].last, dat['XZC/BTC'].average, dat['XZC/BTC'].datetime]
//             ];
//             let sql = format('insert into xzc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['PAY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PAY/BTC'].datetime);
//             let values = [
//                 [dat['PAY/BTC'].symbol, dat['PAY/BTC'].high, dat['PAY/BTC'].low, dat['PAY/BTC'].bid, dat['PAY/BTC'].ask, dat['PAY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PAY/BTC'].last, dat['PAY/BTC'].average, dat['PAY/BTC'].datetime]
//             ];
//             let sql = format('insert into pay_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['KMD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['KMD/BTC'].datetime);
//             let values = [
//                 [dat['KMD/BTC'].symbol, dat['KMD/BTC'].high, dat['KMD/BTC'].low, dat['KMD/BTC'].bid, dat['KMD/BTC'].ask, dat['KMD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['KMD/BTC'].last, dat['KMD/BTC'].average, dat['KMD/BTC'].datetime]
//             ];
//             let sql = format('insert into kmd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['WAVES/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['WAVES/BTC'].datetime);
//             let values = [
//                 [dat['WAVES/BTC'].symbol, dat['WAVES/BTC'].high, dat['WAVES/BTC'].low, dat['WAVES/BTC'].bid, dat['WAVES/BTC'].ask, dat['WAVES/BTC'].baseVolume, timeUnix, dat.ex_name, dat['WAVES/BTC'].last, dat['WAVES/BTC'].average, dat['WAVES/BTC'].datetime]
//             ];
//             let sql = format('insert into waves_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['DASH/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DASH/BTC'].datetime);
//             let values = [
//                 [dat['DASH/BTC'].symbol, dat['DASH/BTC'].high, dat['DASH/BTC'].low, dat['DASH/BTC'].bid, dat['DASH/BTC'].ask, dat['DASH/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DASH/BTC'].last, dat['DASH/BTC'].average, dat['DASH/BTC'].datetime]
//             ];
//             let sql = format('insert into dash_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NBT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NBT/BTC'].datetime);
//             let values = [
//                 [dat['NBT/BTC'].symbol, dat['NBT/BTC'].high, dat['NBT/BTC'].low, dat['NBT/BTC'].bid, dat['NBT/BTC'].ask, dat['NBT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NBT/BTC'].last, dat['NBT/BTC'].average, dat['NBT/BTC'].datetime]
//             ];
//             let sql = format('insert into nbt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['EDG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EDG/BTC'].datetime);
//             let values = [
//                 [dat['EDG/BTC'].symbol, dat['EDG/BTC'].high, dat['EDG/BTC'].low, dat['EDG/BTC'].bid, dat['EDG/BTC'].ask, dat['EDG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EDG/BTC'].last, dat['EDG/BTC'].average, dat['EDG/BTC'].datetime]
//             ];
//             let sql = format('insert into edg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['TRIG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TRIG/BTC'].datetime);
//             let values = [
//                 [dat['TRIG/BTC'].symbol, dat['TRIG/BTC'].high, dat['TRIG/BTC'].low, dat['TRIG/BTC'].bid, dat['TRIG/BTC'].ask, dat['TRIG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TRIG/BTC'].last, dat['TRIG/BTC'].average, dat['TRIG/BTC'].datetime]
//             ];
//             let sql = format('insert into trig_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['MCO/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MCO/BTC'].datetime);
//             let values = [
//                 [dat['MCO/BTC'].symbol, dat['MCO/BTC'].high, dat['MCO/BTC'].low, dat['MCO/BTC'].bid, dat['MCO/BTC'].ask, dat['MCO/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MCO/BTC'].last, dat['MCO/BTC'].average, dat['MCO/BTC'].datetime]
//             ];
//             let sql = format('insert into mco_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['POT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['POT/BTC'].datetime);
//             let values = [
//                 [dat['POT/BTC'].symbol, dat['POT/BTC'].high, dat['POT/BTC'].low, dat['POT/BTC'].bid, dat['POT/BTC'].ask, dat['POT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['POT/BTC'].last, dat['POT/BTC'].average, dat['POT/BTC'].datetime]
//             ];
//             let sql = format('insert into pot_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['VTC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VTC/BTC'].datetime);
//             let values = [
//                 [dat['VTC/BTC'].symbol, dat['VTC/BTC'].high, dat['VTC/BTC'].low, dat['VTC/BTC'].bid, dat['VTC/BTC'].ask, dat['VTC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VTC/BTC'].last, dat['VTC/BTC'].average, dat['VTC/BTC'].datetime]
//             ];
//             let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['FUN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FUN/BTC'].datetime);
//             let values = [
//                 [dat['FUN/BTC'].symbol, dat['FUN/BTC'].high, dat['FUN/BTC'].low, dat['FUN/BTC'].bid, dat['FUN/BTC'].ask, dat['FUN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FUN/BTC'].last, dat['FUN/BTC'].average, dat['FUN/BTC'].datetime]
//             ];
//             let sql = format('insert into fun_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['POWR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['POWR/BTC'].datetime);
//             let values = [
//                 [dat['POWR/BTC'].symbol, dat['POWR/BTC'].high, dat['POWR/BTC'].low, dat['POWR/BTC'].bid, dat['POWR/BTC'].ask, dat['POWR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['POWR/BTC'].last, dat['POWR/BTC'].average, dat['POWR/BTC'].datetime]
//             ];
//             let sql = format('insert into powr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['ZEN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ZEN/BTC'].datetime);
//             let values = [
//                 [dat['ZEN/BTC'].symbol, dat['ZEN/BTC'].high, dat['ZEN/BTC'].low, dat['ZEN/BTC'].bid, dat['ZEN/BTC'].ask, dat['ZEN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ZEN/BTC'].last, dat['ZEN/BTC'].average, dat['ZEN/BTC'].datetime]
//             ];
//             let sql = format('insert into zen_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['GNT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GNT/BTC'].datetime);
//             let values = [
//                 [dat['GNT/BTC'].symbol, dat['GNT/BTC'].high, dat['GNT/BTC'].low, dat['GNT/BTC'].bid, dat['GNT/BTC'].ask, dat['GNT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GNT/BTC'].last, dat['GNT/BTC'].average, dat['GNT/BTC'].datetime]
//             ];
//             let sql = format('insert into gnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['CANN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CANN/BTC'].datetime);
//             let values = [
//                 [dat['CANN/BTC'].symbol, dat['CANN/BTC'].high, dat['CANN/BTC'].low, dat['CANN/BTC'].bid, dat['CANN/BTC'].ask, dat['CANN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CANN/BTC'].last, dat['CANN/BTC'].average, dat['CANN/BTC'].datetime]
//             ];
//             let sql = format('insert into cann_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['PIVX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PIVX/BTC'].datetime);
//             let values = [
//                 [dat['PIVX/BTC'].symbol, dat['PIVX/BTC'].high, dat['PIVX/BTC'].low, dat['PIVX/BTC'].bid, dat['PIVX/BTC'].ask, dat['PIVX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PIVX/BTC'].last, dat['PIVX/BTC'].average, dat['PIVX/BTC'].datetime]
//             ];
//             let sql = format('insert into pivx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['XVG/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['XVG/USDT'].datetime);
//             let values = [
//                 [dat['XVG/USDT'].symbol, dat['XVG/USDT'].high, dat['XVG/USDT'].low, dat['XVG/USDT'].bid, dat['XVG/USDT'].ask, dat['XVG/USDT'].baseVolume, timeUnix, dat.ex_name, dat['XVG/USDT'].last, dat['XVG/USDT'].average, dat['XVG/USDT'].datetime]
//             ];
//             let sql = format('insert into xvg_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['CVC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CVC/BTC'].datetime);
//             let values = [
//                 [dat['CVC/BTC'].symbol, dat['CVC/BTC'].high, dat['CVC/BTC'].low, dat['CVC/BTC'].bid, dat['CVC/BTC'].ask, dat['CVC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CVC/BTC'].last, dat['CVC/BTC'].average, dat['CVC/BTC'].datetime]
//             ];
//             let sql = format('insert into cvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['ADX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ADX/BTC'].datetime);
//             let values = [
//                 [dat['ADX/BTC'].symbol, dat['ADX/BTC'].high, dat['ADX/BTC'].low, dat['ADX/BTC'].bid, dat['ADX/BTC'].ask, dat['ADX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ADX/BTC'].last, dat['ADX/BTC'].average, dat['ADX/BTC'].datetime]
//             ];
//             let sql = format('insert into adx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['XLM/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['XLM/ETH'].datetime);
//             let values = [
//                 [dat['XLM/ETH'].symbol, dat['XLM/ETH'].high, dat['XLM/ETH'].low, dat['XLM/ETH'].bid, dat['XLM/ETH'].ask, dat['XLM/ETH'].baseVolume, timeUnix, dat.ex_name, dat['XLM/ETH'].last, dat['XLM/ETH'].average, dat['XLM/ETH'].datetime]
//             ];
//             let sql = format('insert into xlm_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['ENG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ENG/BTC'].datetime);
//             let values = [
//                 [dat['ENG/BTC'].symbol, dat['ENG/BTC'].high, dat['ENG/BTC'].low, dat['ENG/BTC'].bid, dat['ENG/BTC'].ask, dat['ENG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ENG/BTC'].last, dat['ENG/BTC'].average, dat['ENG/BTC'].datetime]
//             ];
//             let sql = format('insert into eng_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['ARK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ARK/BTC'].datetime);
//             let values = [
//                 [dat['ARK/BTC'].symbol, dat['ARK/BTC'].high, dat['ARK/BTC'].low, dat['ARK/BTC'].bid, dat['ARK/BTC'].ask, dat['ARK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ARK/BTC'].last, dat['ARK/BTC'].average, dat['ARK/BTC'].datetime]
//             ];
//             let sql = format('insert into ark_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['BAY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BAY/BTC'].datetime);
//             let values = [
//                 [dat['BAY/BTC'].symbol, dat['BAY/BTC'].high, dat['BAY/BTC'].low, dat['BAY/BTC'].bid, dat['BAY/BTC'].ask, dat['BAY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BAY/BTC'].last, dat['BAY/BTC'].average, dat['BAY/BTC'].datetime]
//             ];
//             let sql = format('insert into bay_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['MANA/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MANA/BTC'].datetime);
//             let values = [
//                 [dat['MANA/BTC'].symbol, dat['MANA/BTC'].high, dat['MANA/BTC'].low, dat['MANA/BTC'].bid, dat['MANA/BTC'].ask, dat['MANA/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MANA/BTC'].last, dat['MANA/BTC'].average, dat['MANA/BTC'].datetime]
//             ];
//             let sql = format('insert into sys_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['GUP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GUP/BTC'].datetime);
//             let values = [
//                 [dat['GUP/BTC'].symbol, dat['GUP/BTC'].high, dat['GUP/BTC'].low, dat['GUP/BTC'].bid, dat['GUP/BTC'].ask, dat['GUP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GUP/BTC'].last, dat['GUP/BTC'].average, dat['GUP/BTC'].datetime]
//             ];
//             let sql = format('insert into gup_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['CLOAK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CLOAK/BTC'].datetime);
//             let values = [
//                 [dat['CLOAK/BTC'].symbol, dat['CLOAK/BTC'].high, dat['CLOAK/BTC'].low, dat['CLOAK/BTC'].bid, dat['CLOAK/BTC'].ask, dat['CLOAK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CLOAK/BTC'].last, dat['CLOAK/BTC'].average, dat['CLOAK/BTC'].datetime]
//             ];
//             let sql = format('insert into cloak_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['EMC2/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EMC2/BTC'].datetime);
//             let values = [
//                 [dat['EMC2/BTC'].symbol, dat['EMC2/BTC'].high, dat['EMC2/BTC'].low, dat['EMC2/BTC'].bid, dat['EMC2/BTC'].ask, dat['EMC2/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EMC2/BTC'].last, dat['EMC2/BTC'].average, dat['EMC2/BTC'].datetime]
//             ];
//             let sql = format('insert into emc2_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['OMG/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['OMG/USDT'].datetime);
//             let values = [
//                 [dat['OMG/USDT'].symbol, dat['OMG/USDT'].high, dat['OMG/USDT'].low, dat['OMG/USDT'].bid, dat['OMG/USDT'].ask, dat['OMG/USDT'].baseVolume, timeUnix, dat.ex_name, dat['OMG/USDT'].last, dat['OMG/USDT'].average, dat['OMG/USDT'].datetime]
//             ];
//             let sql = format('insert into omg_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['BLK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BLK/BTC'].datetime);
//             let values = [
//                 [dat['BLK/BTC'].symbol, dat['BLK/BTC'].high, dat['BLK/BTC'].low, dat['BLK/BTC'].bid, dat['BLK/BTC'].ask, dat['BLK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BLK/BTC'].last, dat['BLK/BTC'].average, dat['BLK/BTC'].datetime]
//             ];
//             let sql = format('insert into blk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['BAT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BAT/BTC'].datetime);
//             let values = [
//                 [dat['BAT/BTC'].symbol, dat['BAT/BTC'].high, dat['BAT/BTC'].low, dat['BAT/BTC'].bid, dat['BAT/BTC'].ask, dat['BAT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BAT/BTC'].last, dat['BAT/BTC'].average, dat['BAT/BTC'].datetime]
//             ];
//             let sql = format('insert into bat_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['TIX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TIX/BTC'].datetime);
//             let values = [
//                 [dat['TIX/BTC'].symbol, dat['TIX/BTC'].high, dat['TIX/BTC'].low, dat['TIX/BTC'].bid, dat['TIX/BTC'].ask, dat['TIX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TIX/BTC'].last, dat['TIX/BTC'].average, dat['TIX/BTC'].datetime]
//             ];
//             let sql = format('insert into tix_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['MONA/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MONA/BTC'].datetime);
//             let values = [
//                 [dat['MONA/BTC'].symbol, dat['MONA/BTC'].high, dat['MONA/BTC'].low, dat['MONA/BTC'].bid, dat['MONA/BTC'].ask, dat['MONA/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MONA/BTC'].last, dat['MONA/BTC'].average, dat['MONA/BTC'].datetime]
//             ];
//             let sql = format('insert into mona_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['HMQ/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['HMQ/BTC'].datetime);
//             let values = [
//                 [dat['HMQ/BTC'].symbol, dat['HMQ/BTC'].high, dat['HMQ/BTC'].low, dat['HMQ/BTC'].bid, dat['HMQ/BTC'].ask, dat['HMQ/BTC'].baseVolume, timeUnix, dat.ex_name, dat['HMQ/BTC'].last, dat['HMQ/BTC'].average, dat['HMQ/BTC'].datetime]
//             ];
//             let sql = format('insert into hmq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } if (dat['UNB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['UNB/BTC'].datetime);
//             let values = [
//                 [dat['UNB/BTC'].symbol, dat['UNB/BTC'].high, dat['UNB/BTC'].low, dat['UNB/BTC'].bid, dat['UNB/BTC'].ask, dat['UNB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['UNB/BTC'].last, dat['UNB/BTC'].average, dat['UNB/BTC'].datetime]
//             ];
//             let sql = format('insert into unb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['REP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['REP/BTC'].datetime);
//             let values = [
//                 [dat['REP/BTC'].symbol, dat['REP/BTC'].high, dat['REP/BTC'].low, dat['REP/BTC'].bid, dat['REP/BTC'].ask, dat['REP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['REP/BTC'].last, dat['REP/BTC'].average, dat['REP/BTC'].datetime]
//             ];
//             let sql = format('insert into rep_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['SHIFT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SHIFT/BTC'].datetime);
//             let values = [
//                 [dat['SHIFT/BTC'].symbol, dat['SHIFT/BTC'].high, dat['SHIFT/BTC'].low, dat['SHIFT/BTC'].bid, dat['SHIFT/BTC'].ask, dat['SHIFT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SHIFT/BTC'].last, dat['SHIFT/BTC'].average, dat['SHIFT/BTC'].datetime]
//             ];
//             let sql = format('insert into shift_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['MTL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MTL/BTC'].datetime);
//             let values = [
//                 [dat['MTL/BTC'].symbol, dat['MTL/BTC'].high, dat['MTL/BTC'].low, dat['MTL/BTC'].bid, dat['MTL/BTC'].ask, dat['MTL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MTL/BTC'].last, dat['MTL/BTC'].average, dat['MTL/BTC'].datetime]
//             ];
//             let sql = format('insert into mtl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NEOS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NEOS/BTC'].datetime);
//             let values = [
//                 [dat['NEOS/BTC'].symbol, dat['NEOS/BTC'].high, dat['NEOS/BTC'].low, dat['NEOS/BTC'].bid, dat['NEOS/BTC'].ask, dat['NEOS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NEOS/BTC'].last, dat['NEOS/BTC'].average, dat['NEOS/BTC'].datetime]
//             ];
//             let sql = format('insert into neos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['UBQ/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['UBQ/BTC'].datetime);
//             let values = [
//                 [dat['UBQ/BTC'].symbol, dat['UBQ/BTC'].high, dat['UBQ/BTC'].low, dat['UBQ/BTC'].bid, dat['UBQ/BTC'].ask, dat['UBQ/BTC'].baseVolume, timeUnix, dat.ex_name, dat['UBQ/BTC'].last, dat['UBQ/BTC'].average, dat['UBQ/BTC'].datetime]
//             ];
//             let sql = format('insert into ubq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['DOPE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DOPE/BTC'].datetime);
//             let values = [
//                 [dat['DOPE/BTC'].symbol, dat['DOPE/BTC'].high, dat['DOPE/BTC'].low, dat['DOPE/BTC'].bid, dat['DOPE/BTC'].ask, dat['DOPE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DOPE/BTC'].last, dat['DOPE/BTC'].average, dat['DOPE/BTC'].datetime]
//             ];
//             let sql = format('insert into dope_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['STEEM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['STEEM/BTC'].datetime);
//             let values = [
//                 [dat['STEEM/BTC'].symbol, dat['STEEM/BTC'].high, dat['STEEM/BTC'].low, dat['STEEM/BTC'].bid, dat['STEEM/BTC'].ask, dat['STEEM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['STEEM/BTC'].last, dat['STEEM/BTC'].average, dat['STEEM/BTC'].datetime]
//             ];
//             let sql = format('insert into steem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }

//         if (dat['CFI/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CFI/BTC'].datetime);
//             let values = [
//                 [dat['CFI/BTC'].symbol, dat['CFI/BTC'].high, dat['CFI/BTC'].low, dat['CFI/BTC'].bid, dat['CFI/BTC'].ask, dat['CFI/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CFI/BTC'].last, dat['CFI/BTC'].average, dat['CFI/BTC'].datetime]
//             ];
//             let sql = format('insert into cfi_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['VIB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VIB/BTC'].datetime);
//             let values = [
//                 [dat['VIB/BTC'].symbol, dat['VIB/BTC'].high, dat['VIB/BTC'].low, dat['VIB/BTC'].bid, dat['VIB/BTC'].ask, dat['VIB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VIB/BTC'].last, dat['VIB/BTC'].average, dat['VIB/BTC'].datetime]
//             ];
//             let sql = format('insert into vib_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }

//         if (dat['DCT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DCT/BTC'].datetime);
//             let values = [
//                 [dat['DCT/BTC'].symbol, dat['DCT/BTC'].high, dat['DCT/BTC'].low, dat['DCT/BTC'].bid, dat['DCT/BTC'].ask, dat['DCT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DCT/BTC'].last, dat['DCT/BTC'].average, dat['DCT/BTC'].datetime]
//             ];
//             let sql = format('insert into dct_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['OMG/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['OMG/ETH'].datetime);
//             let values = [
//                 [dat['OMG/ETH'].symbol, dat['OMG/ETH'].high, dat['OMG/ETH'].low, dat['OMG/ETH'].bid, dat['OMG/ETH'].ask, dat['OMG/ETH'].baseVolume, timeUnix, dat.ex_name, dat['OMG/ETH'].last, dat['OMG/ETH'].average, dat['OMG/ETH'].datetime]
//             ];
//             let sql = format('insert into omg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['XDN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XDN/BTC'].datetime);
//             let values = [
//                 [dat['XDN/BTC'].symbol, dat['XDN/BTC'].high, dat['XDN/BTC'].low, dat['XDN/BTC'].bid, dat['XDN/BTC'].ask, dat['XDN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XDN/BTC'].last, dat['XDN/BTC'].average, dat['XDN/BTC'].datetime]
//             ];
//             let sql = format('insert into xdn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['AUR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['AUR/BTC'].datetime);
//             let values = [
//                 [dat['AUR/BTC'].symbol, dat['AUR/BTC'].high, dat['AUR/BTC'].low, dat['AUR/BTC'].bid, dat['AUR/BTC'].ask, dat['AUR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['AUR/BTC'].last, dat['AUR/BTC'].average, dat['AUR/BTC'].datetime]
//             ];
//             let sql = format('insert into aur_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['ETC/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['ETC/USDT'].datetime);
//             let values = [
//                 [dat['ETC/USDT'].symbol, dat['ETC/USDT'].high, dat['ETC/USDT'].low, dat['ETC/USDT'].bid, dat['ETC/USDT'].ask, dat['ETC/USDT'].baseVolume, timeUnix, dat.ex_name, dat['ETC/USDT'].last, dat['ETC/USDT'].average, dat['ETC/USDT'].datetime]
//             ];
//             let sql = format('insert into etc_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['PTOY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PTOY/BTC'].datetime);
//             let values = [
//                 [dat['PTOY/BTC'].symbol, dat['PTOY/BTC'].high, dat['PTOY/BTC'].low, dat['PTOY/BTC'].bid, dat['PTOY/BTC'].ask, dat['PTOY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PTOY/BTC'].last, dat['PTOY/BTC'].average, dat['PTOY/BTC'].datetime]
//             ];
//             let sql = format('insert into ptoy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['BURST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BURST/BTC'].datetime);
//             let values = [
//                 [dat['BURST/BTC'].symbol, dat['BURST/BTC'].high, dat['BURST/BTC'].low, dat['BURST/BTC'].bid, dat['BURST/BTC'].ask, dat['BURST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BURST/BTC'].last, dat['BURST/BTC'].average, dat['BURST/BTC'].datetime]
//             ];
//             let sql = format('insert into burst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['RADS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RADS/BTC'].datetime);
//             let values = [
//                 [dat['RADS/BTC'].symbol, dat['RADS/BTC'].high, dat['RADS/BTC'].low, dat['RADS/BTC'].bid, dat['RADS/BTC'].ask, dat['RADS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RADS/BTC'].last, dat['RADS/BTC'].average, dat['RADS/BTC'].datetime]
//             ];
//             let sql = format('insert into rads_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['LBC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LBC/BTC'].datetime);
//             let values = [
//                 [dat['LBC/BTC'].symbol, dat['LBC/BTC'].high, dat['LBC/BTC'].low, dat['LBC/BTC'].bid, dat['LBC/BTC'].ask, dat['LBC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LBC/BTC'].last, dat['LBC/BTC'].average, dat['LBC/BTC'].datetime]
//             ];
//             let sql = format('insert into lbc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['XMG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XMG/BTC'].datetime);
//             let values = [
//                 [dat['XMG/BTC'].symbol, dat['XMG/BTC'].high, dat['XMG/BTC'].low, dat['XMG/BTC'].bid, dat['XMG/BTC'].ask, dat['XMG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XMG/BTC'].last, dat['XMG/BTC'].average, dat['XMG/BTC'].datetime]
//             ];
//             let sql = format('insert into xmg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['OK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['OK/BTC'].datetime);
//             let values = [
//                 [dat['OK/BTC'].symbol, dat['OK/BTC'].high, dat['OK/BTC'].low, dat['OK/BTC'].bid, dat['OK/BTC'].ask, dat['OK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['OK/BTC'].last, dat['OK/BTC'].average, dat['OK/BTC'].datetime]
//             ];
//             let sql = format('insert into ok_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['NAV/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NAV/BTC'].datetime);
//             let values = [
//                 [dat['NAV/BTC'].symbol, dat['NAV/BTC'].high, dat['NAV/BTC'].low, dat['NAV/BTC'].bid, dat['NAV/BTC'].ask, dat['NAV/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NAV/BTC'].last, dat['NAV/BTC'].average, dat['NAV/BTC'].datetime]
//             ];
//             let sql = format('insert into nav_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['AGRS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['AGRS/BTC'].datetime);
//             let values = [
//                 [dat['AGRS/BTC'].symbol, dat['AGRS/BTC'].high, dat['AGRS/BTC'].low, dat['AGRS/BTC'].bid, dat['AGRS/BTC'].ask, dat['AGRS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['AGRS/BTC'].last, dat['AGRS/BTC'].average, dat['AGRS/BTC'].datetime]
//             ];
//             let sql = format('insert into args_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['BTG/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['BTG/USDT'].datetime);
//             let values = [
//                 [dat['BTG/USDT'].symbol, dat['BTG/USDT'].high, dat['BTG/USDT'].low, dat['BTG/USDT'].bid, dat['BTG/USDT'].ask, dat['BTG/USDT'].baseVolume, timeUnix, dat.ex_name, dat['BTG/USDT'].last, dat['BTG/USDT'].average, dat['BTG/USDT'].datetime]
//             ];
//             let sql = format('insert into btg_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['NLG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NLG/BTC'].datetime);
//             let values = [
//                 [dat['NLG/BTC'].symbol, dat['NLG/BTC'].high, dat['NLG/BTC'].low, dat['NLG/BTC'].bid, dat['NLG/BTC'].ask, dat['NLG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NLG/BTC'].last, dat['NLG/BTC'].average, dat['NLG/BTC'].datetime]
//             ];
//             let sql = format('insert into nlg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['IOP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['IOP/BTC'].datetime);
//             let values = [
//                 [dat['IOP/BTC'].symbol, dat['IOP/BTC'].high, dat['IOP/BTC'].low, dat['IOP/BTC'].bid, dat['IOP/BTC'].ask, dat['IOP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['IOP/BTC'].last, dat['IOP/BTC'].average, dat['IOP/BTC'].datetime]
//             ];
//             let sql = format('insert into iop_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['GRS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GRS/BTC'].datetime);
//             let values = [
//                 [dat['GRS/BTC'].symbol, dat['GRS/BTC'].high, dat['GRS/BTC'].low, dat['GRS/BTC'].bid, dat['GRS/BTC'].ask, dat['GRS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GRS/BTC'].last, dat['GRS/BTC'].average, dat['GRS/BTC'].datetime]
//             ];
//             let sql = format('insert into grs_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['BCC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['BCC/ETH'].datetime);
//             let values = [
//                 [dat['BCC/ETH'].symbol, dat['BCC/ETH'].high, dat['BCC/ETH'].low, dat['BCC/ETH'].bid, dat['BCC/ETH'].ask, dat['BCC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['BCC/ETH'].last, dat['BCC/ETH'].average, dat['BCC/ETH'].datetime]
//             ];
//             let sql = format('insert into bcc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }if (dat['SLR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SLR/BTC'].datetime);
//             let values = [
//                 [dat['SLR/BTC'].symbol, dat['SLR/BTC'].high, dat['SLR/BTC'].low, dat['SLR/BTC'].bid, dat['SLR/BTC'].ask, dat['SLR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SLR/BTC'].last, dat['SLR/BTC'].average, dat['SLR/BTC'].datetime]
//             ];
//             let sql = format('insert into slr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
        
//         if (dat['MER/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MER/BTC'].datetime);
//             let values = [
//                 [dat['MER/BTC'].symbol, dat['MER/BTC'].high, dat['MER/BTC'].low, dat['MER/BTC'].bid, dat['MER/BTC'].ask, dat['MER/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MER/BTC'].last, dat['MER/BTC'].average, dat['MER/BTC'].datetime]
//             ];
//             let sql = format('insert into mer_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


//         if (dat['AMP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['AMP/BTC'].datetime);
//             let values = [
//                 [dat['AMP/BTC'].symbol, dat['AMP/BTC'].high, dat['AMP/BTC'].low, dat['AMP/BTC'].bid, dat['AMP/BTC'].ask, dat['AMP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['AMP/BTC'].last, dat['AMP/BTC'].average, dat['AMP/BTC'].datetime]
//             ];
//             let sql = format('insert into amp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['NXT/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['NXT/USDT'].datetime);
//             let values = [
//                 [dat['NXT/USDT'].symbol, dat['NXT/USDT'].high, dat['NXT/USDT'].low, dat['NXT/USDT'].bid, dat['NXT/USDT'].ask, dat['NXT/USDT'].baseVolume, timeUnix, dat.ex_name, dat['NXT/USDT'].last, dat['NXT/USDT'].average, dat['NXT/USDT'].datetime]
//             ];
//             let sql = format('insert into nxt_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


//         if (dat['1ST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['1ST/BTC'].datetime);
//             let values = [
//                 [dat['1ST/BTC'].symbol, dat['1ST/BTC'].high, dat['1ST/BTC'].low, dat['1ST/BTC'].bid, dat['1ST/BTC'].ask, dat['1ST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['1ST/BTC'].last, dat['1ST/BTC'].average, dat['1ST/BTC'].datetime]
//             ];
//             let sql = format('insert into 1st_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['AEON/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['AEON/BTC'].datetime);
//             let values = [
//                 [dat['AEON/BTC'].symbol, dat['AEON/BTC'].high, dat['AEON/BTC'].low, dat['AEON/BTC'].bid, dat['AEON/BTC'].ask, dat['AEON/BTC'].baseVolume, timeUnix, dat.ex_name, dat['AEON/BTC'].last, dat['AEON/BTC'].average, dat['AEON/BTC'].datetime]
//             ];
//             let sql = format('insert into aeon_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }

//         if (dat['PART/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PART/BTC'].datetime);
//             let values = [
//                 [dat['PART/BTC'].symbol, dat['PART/BTC'].high, dat['PART/BTC'].low, dat['PART/BTC'].bid, dat['PART/BTC'].ask, dat['PART/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PART/BTC'].last, dat['PART/BTC'].average, dat['PART/BTC'].datetime]
//             ];
//             let sql = format('insert into part_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['FCT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FCT/BTC'].datetime);
//             let values = [
//                 [dat['FCT/BTC'].symbol, dat['FCT/BTC'].high, dat['FCT/BTC'].low, dat['FCT/BTC'].bid, dat['FCT/BTC'].ask, dat['FCT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FCT/BTC'].last, dat['FCT/BTC'].average, dat['FCT/BTC'].datetime]
//             ];
//             let sql = format('insert into ftc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['NEO/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['NEO/ETH'].datetime);
//             let values = [
//                 [dat['NEO/ETH'].symbol, dat['NEO/ETH'].high, dat['NEO/ETH'].low, dat['NEO/ETH'].bid, dat['NEO/ETH'].ask, dat['NEO/ETH'].baseVolume, timeUnix, dat.ex_name, dat['NEO/ETH'].last, dat['NEO/ETH'].average, dat['NEO/ETH'].datetime]
//             ];
//             let sql = format('insert into neo_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['OMNI/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['OMNI/BTC'].datetime);
//             let values = [
//                 [dat['OMNI/BTC'].symbol, dat['OMNI/BTC'].high, dat['OMNI/BTC'].low, dat['OMNI/BTC'].bid, dat['OMNI/BTC'].ask, dat['OMNI/BTC'].baseVolume, timeUnix, dat.ex_name, dat['OMNI/BTC'].last, dat['OMNI/BTC'].average, dat['OMNI/BTC'].datetime]
//             ];
//             let sql = format('insert into omni_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['TRST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TRST/BTC'].datetime);
//             let values = [
//                 [dat['TRST/BTC'].symbol, dat['TRST/BTC'].high, dat['TRST/BTC'].low, dat['TRST/BTC'].bid, dat['TRST/BTC'].ask, dat['TRST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TRST/BTC'].last, dat['TRST/BTC'].average, dat['TRST/BTC'].datetime]
//             ];
//             let sql = format('insert into trst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['DCR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DCR/BTC'].datetime);
//             let values = [
//                 [dat['DCR/BTC'].symbol, dat['DCR/BTC'].high, dat['DCR/BTC'].low, dat['DCR/BTC'].bid, dat['DCR/BTC'].ask, dat['DCR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DCR/BTC'].last, dat['DCR/BTC'].average, dat['DCR/BTC'].datetime]
//             ];
//             let sql = format('insert into dcr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['WINGS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['WINGS/BTC'].datetime);
//             let values = [
//                 [dat['WINGS/BTC'].symbol, dat['WINGS/BTC'].high, dat['WINGS/BTC'].low, dat['WINGS/BTC'].bid, dat['WINGS/BTC'].ask, dat['WINGS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['WINGS/BTC'].last, dat['WINGS/BTC'].average, dat['WINGS/BTC'].datetime]
//             ];
//             let sql = format('insert into wings_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['DASH/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['DASH/USDT'].datetime);
//             let values = [
//                 [dat['DASH/USDT'].symbol, dat['DASH/USDT'].high, dat['DASH/USDT'].low, dat['DASH/USDT'].bid, dat['DASH/USDT'].ask, dat['DASH/USDT'].baseVolume, timeUnix, dat.ex_name, dat['DASH/USDT'].last, dat['DASH/USDT'].average, dat['DASH/USDT'].datetime]
//             ];
//             let sql = format('insert into dash_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['VIA/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VIA/BTC'].datetime);
//             let values = [
//                 [dat['VIA/BTC'].symbol, dat['VIA/BTC'].high, dat['VIA/BTC'].low, dat['VIA/BTC'].bid, dat['VIA/BTC'].ask, dat['VIA/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VIA/BTC'].last, dat['VIA/BTC'].average, dat['VIA/BTC'].datetime]
//             ];
//             let sql = format('insert into via_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['QTUM/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['QTUM/ETH'].datetime);
//             let values = [
//                 [dat['QTUM/ETH'].symbol, dat['QTUM/ETH'].high, dat['QTUM/ETH'].low, dat['QTUM/ETH'].bid, dat['QTUM/ETH'].ask, dat['QTUM/ETH'].baseVolume, timeUnix, dat.ex_name, dat['QTUM/ETH'].last, dat['QTUM/ETH'].average, dat['QTUM/ETH'].datetime]
//             ];
//             let sql = format('insert into qtum_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['XMR/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['XMR/USDT'].datetime);
//             let values = [
//                 [dat['XMR/USDT'].symbol, dat['XMR/USDT'].high, dat['XMR/USDT'].low, dat['XMR/USDT'].bid, dat['XMR/USDT'].ask, dat['XMR/USDT'].baseVolume, timeUnix, dat.ex_name, dat['XMR/USDT'].last, dat['XMR/USDT'].average, dat['XMR/USDT'].datetime]
//             ];
//             let sql = format('insert into xmr_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['ZEC/USDT'] !== undefined) {
//             let timeUnix = unixTime(dat['ZEC/USDT'].datetime);
//             let values = [
//                 [dat['ZEC/USDT'].symbol, dat['ZEC/USDT'].high, dat['ZEC/USDT'].low, dat['ZEC/USDT'].bid, dat['ZEC/USDT'].ask, dat['ZEC/USDT'].baseVolume, timeUnix, dat.ex_name, dat['ZEC/USDT'].last, dat['ZEC/USDT'].average, dat['ZEC/USDT'].datetime]
//             ];
//             let sql = format('insert into zec_usdt' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['LTC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['LTC/ETH'].datetime);
//             let values = [
//                 [dat['LTC/ETH'].symbol, dat['LTC/ETH'].high, dat['LTC/ETH'].low, dat['LTC/ETH'].bid, dat['LTC/ETH'].ask, dat['LTC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['LTC/ETH'].last, dat['LTC/ETH'].average, dat['LTC/ETH'].datetime]
//             ];
//             let sql = format('insert into ltc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['LUN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LUN/BTC'].datetime);
//             let values = [
//                 [dat['LUN/BTC'].symbol, dat['LUN/BTC'].high, dat['LUN/BTC'].low, dat['LUN/BTC'].bid, dat['LUN/BTC'].ask, dat['LUN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LUN/BTC'].last, dat['LUN/BTC'].average, dat['LUN/BTC'].datetime]
//             ];
//             let sql = format('insert into lun_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['MUSIC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MUSIC/BTC'].datetime);
//             let values = [
//                 [dat['MUSIC/BTC'].symbol, dat['MUSIC/BTC'].high, dat['MUSIC/BTC'].low, dat['MUSIC/BTC'].bid, dat['MUSIC/BTC'].ask, dat['MUSIC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MUSIC/BTC'].last, dat['MUSIC/BTC'].average, dat['MUSIC/BTC'].datetime]
//             ];
//             let sql = format('insert into music_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['FUN/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['FUN/ETH'].datetime);
//             let values = [
//                 [dat['FUN/ETH'].symbol, dat['FUN/ETH'].high, dat['FUN/ETH'].low, dat['FUN/ETH'].bid, dat['FUN/ETH'].ask, dat['FUN/ETH'].baseVolume, timeUnix, dat.ex_name, dat['FUN/ETH'].last, dat['FUN/ETH'].average, dat['FUN/ETH'].datetime]
//             ];
//             let sql = format('insert into fun_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['LMC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LMC/BTC'].datetime);
//             let values = [
//                 [dat['LMC/BTC'].symbol, dat['LMC/BTC'].high, dat['LMC/BTC'].low, dat['LMC/BTC'].bid, dat['LMC/BTC'].ask, dat['LMC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LMC/BTC'].last, dat['LMC/BTC'].average, dat['LMC/BTC'].datetime]
//             ];
//             let sql = format('insert into lmc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['XEL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XEL/BTC'].datetime);
//             let values = [
//                 [dat['XEL/BTC'].symbol, dat['XEL/BTC'].high, dat['XEL/BTC'].low, dat['XEL/BTC'].bid, dat['XEL/BTC'].ask, dat['XEL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XEL/BTC'].last, dat['XEL/BTC'].average, dat['XEL/BTC'].datetime]
//             ];
//             let sql = format('insert into xel_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['GBYTE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GBYTE/BTC'].datetime);
//             let values = [
//                 [dat['GBYTE/BTC'].symbol, dat['GBYTE/BTC'].high, dat['GBYTE/BTC'].low, dat['GBYTE/BTC'].bid, dat['GBYTE/BTC'].ask, dat['GBYTE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GBYTE/BTC'].last, dat['GBYTE/BTC'].average, dat['GBYTE/BTC'].datetime]
//             ];
//             let sql = format('insert into gbyte_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['MEME/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MEME/BTC'].datetime);
//             let values = [
//                 [dat['MEME/BTC'].symbol, dat['MEME/BTC'].high, dat['MEME/BTC'].low, dat['MEME/BTC'].bid, dat['MEME/BTC'].ask, dat['MEME/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MEME/BTC'].last, dat['MEME/BTC'].average, dat['MEME/BTC'].datetime]
//             ];
//             let sql = format('insert into meme_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['GAME/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GAME/BTC'].datetime);
//             let values = [
//                 [dat['GAME/BTC'].symbol, dat['GAME/BTC'].high, dat['GAME/BTC'].low, dat['GAME/BTC'].bid, dat['GAME/BTC'].ask, dat['GAME/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GAME/BTC'].last, dat['GAME/BTC'].average, dat['GAME/BTC'].datetime]
//             ];
//             let sql = format('insert into game_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['SLS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SLS/BTC'].datetime);
//             let values = [
//                 [dat['SLS/BTC'].symbol, dat['SLS/BTC'].high, dat['SLS/BTC'].low, dat['SLS/BTC'].bid, dat['SLS/BTC'].ask, dat['SLS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SLS/BTC'].last, dat['SLS/BTC'].average, dat['SLS/BTC'].datetime]
//             ];
//             let sql = format('insert into sls_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['ION/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ION/BTC'].datetime);
//             let values = [
//                 [dat['ION/BTC'].symbol, dat['ION/BTC'].high, dat['ION/BTC'].low, dat['ION/BTC'].bid, dat['ION/BTC'].ask, dat['ION/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ION/BTC'].last, dat['ION/BTC'].average, dat['ION/BTC'].datetime]
//             ];
//             let sql = format('insert into ion_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['BITB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BITB/BTC'].datetime);
//             let values = [
//                 [dat['BITB/BTC'].symbol, dat['BITB/BTC'].high, dat['BITB/BTC'].low, dat['BITB/BTC'].bid, dat['BITB/BTC'].ask, dat['BITB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BITB/BTC'].last, dat['BITB/BTC'].average, dat['BITB/BTC'].datetime]
//             ];
//             let sql = format('insert into bitb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['EXP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EXP/BTC'].datetime);
//             let values = [
//                 [dat['EXP/BTC'].symbol, dat['EXP/BTC'].high, dat['EXP/BTC'].low, dat['EXP/BTC'].bid, dat['EXP/BTC'].ask, dat['EXP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EXP/BTC'].last, dat['EXP/BTC'].average, dat['EXP/BTC'].datetime]
//             ];
//             let sql = format('insert into exp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['DNT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DNT/BTC'].datetime);
//             let values = [
//                 [dat['DNT/BTC'].symbol, dat['DNT/BTC'].high, dat['DNT/BTC'].low, dat['DNT/BTC'].bid, dat['DNT/BTC'].ask, dat['DNT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DNT/BTC'].last, dat['DNT/BTC'].average, dat['DNT/BTC'].datetime]
//             ];
//             let sql = format('insert into dnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['MAID/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MAID/BTC'].datetime);
//             let values = [
//                 [dat['MAID/BTC'].symbol, dat['MAID/BTC'].high, dat['MAID/BTC'].low, dat['MAID/BTC'].bid, dat['MAID/BTC'].ask, dat['MAID/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MAID/BTC'].last, dat['MAID/BTC'].average, dat['MAID/BTC'].datetime]
//             ];
//             let sql = format('insert into maid_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }       
//         if (dat['SWT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SWT/BTC'].datetime);
//             let values = [
//                 [dat['SWT/BTC'].symbol, dat['SWT/BTC'].high, dat['SWT/BTC'].low, dat['SWT/BTC'].bid, dat['SWT/BTC'].ask, dat['SWT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SWT/BTC'].last, dat['SWT/BTC'].average, dat['SWT/BTC'].datetime]
//             ];
//             let sql = format('insert into swt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         } 
        
        
//         if (dat['QRL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['QRL/BTC'].datetime);
//             let values = [
//                 [dat['QRL/BTC'].symbol, dat['QRL/BTC'].high, dat['QRL/BTC'].low, dat['QRL/BTC'].bid, dat['QRL/BTC'].ask, dat['QRL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['QRL/BTC'].last, dat['QRL/BTC'].average, dat['QRL/BTC'].datetime]
//             ];
//             let sql = format('insert into qrl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
        



//         if (dat['STORJ/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['STORJ/ETH'].datetime);
//             let values = [
//                 [dat['STORJ/ETH'].symbol, dat['STORJ/ETH'].high, dat['STORJ/ETH'].low, dat['STORJ/ETH'].bid, dat['STORJ/ETH'].ask, dat['STORJ/ETH'].baseVolume, timeUnix, dat.ex_name, dat['STORJ/ETH'].last, dat['STORJ/ETH'].average, dat['STORJ/ETH'].datetime]
//             ];
//             let sql = format('insert into storj_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
        
//         if (dat['DYN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DYN/BTC'].datetime);
//             let values = [
//                 [dat['DYN/BTC'].symbol, dat['DYN/BTC'].high, dat['DYN/BTC'].low, dat['DYN/BTC'].bid, dat['DYN/BTC'].ask, dat['DYN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DYN/BTC'].last, dat['DYN/BTC'].average, dat['DYN/BTC'].datetime]
//             ];
//             let sql = format('insert into dyn_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MYST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MYST/BTC'].datetime);
//             let values = [
//                 [dat['MYST/BTC'].symbol, dat['MYST/BTC'].high, dat['MYST/BTC'].low, dat['MYST/BTC'].bid, dat['MYST/BTC'].ask, dat['MYST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MYST/BTC'].last, dat['MYST/BTC'].average, dat['MYST/BTC'].datetime]
//             ];
//             let sql = format('insert into myst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GCR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GCR/BTC'].datetime);
//             let values = [
//                 [dat['GCR/BTC'].symbol, dat['GCR/BTC'].high, dat['GCR/BTC'].low, dat['GCR/BTC'].bid, dat['GCR/BTC'].ask, dat['GCR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GCR/BTC'].last, dat['GCR/BTC'].average, dat['GCR/BTC'].datetime]
//             ];
//             let sql = format('insert into gcr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SBD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SBD/BTC'].datetime);
//             let values = [
//                 [dat['SBD/BTC'].symbol, dat['SBD/BTC'].high, dat['SBD/BTC'].low, dat['SBD/BTC'].bid, dat['SBD/BTC'].ask, dat['SBD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SBD/BTC'].last, dat['SBD/BTC'].average, dat['SBD/BTC'].datetime]
//             ];
//             let sql = format('insert into sbd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SALT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['SALT/ETH'].datetime);
//             let values = [
//                 [dat['SALT/ETH'].symbol, dat['SALT/ETH'].high, dat['SALT/ETH'].low, dat['SALT/ETH'].bid, dat['SALT/ETH'].ask, dat['SALT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['SALT/ETH'].last, dat['SALT/ETH'].average, dat['SALT/ETH'].datetime]
//             ];
//             let sql = format('insert into salt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['VRC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VRC/BTC'].datetime);
//             let values = [
//                 [dat['VRC/BTC'].symbol, dat['VRC/BTC'].high, dat['VRC/BTC'].low, dat['VRC/BTC'].bid, dat['VRC/BTC'].ask, dat['VRC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VRC/BTC'].last, dat['VRC/BTC'].average, dat['VRC/BTC'].datetime]
//             ];
//             let sql = format('insert into vtc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['LGD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['LGD/BTC'].datetime);
//             let values = [
//                 [dat['LGD/BTC'].symbol, dat['LGD/BTC'].high, dat['LGD/BTC'].low, dat['LGD/BTC'].bid, dat['LGD/BTC'].ask, dat['LGD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['LGD/BTC'].last, dat['LGD/BTC'].average, dat['LGD/BTC'].datetime]
//             ];
//             let sql = format('insert into lgd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['RLC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RLC/BTC'].datetime);
//             let values = [
//                 [dat['RLC/BTC'].symbol, dat['RLC/BTC'].high, dat['RLC/BTC'].low, dat['RLC/BTC'].bid, dat['RLC/BTC'].ask, dat['RLC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RLC/BTC'].last, dat['RLC/BTC'].average, dat['RLC/BTC'].datetime]
//             ];
//             let sql = format('insert into elc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MUE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MUE/BTC'].datetime);
//             let values = [
//                 [dat['MUE/BTC'].symbol, dat['MUE/BTC'].high, dat['MUE/BTC'].low, dat['MUE/BTC'].bid, dat['MUE/BTC'].ask, dat['MUE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MUE/BTC'].last, dat['MUE/BTC'].average, dat['MUE/BTC'].datetime]
//             ];
//             let sql = format('insert into mue_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GNO/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GNO/BTC'].datetime);
//             let values = [
//                 [dat['GNO/BTC'].symbol, dat['GNO/BTC'].high, dat['GNO/BTC'].low, dat['GNO/BTC'].bid, dat['GNO/BTC'].ask, dat['GNO/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GNO/BTC'].last, dat['GNO/BTC'].average, dat['GNO/BTC'].datetime]
//             ];
//             let sql = format('insert into gno_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CPC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CPC/BTC'].datetime);
//             let values = [
//                 [dat['CPC/BTC'].symbol, dat['CPC/BTC'].high, dat['CPC/BTC'].low, dat['CPC/BTC'].bid, dat['CPC/BTC'].ask, dat['CPC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CPC/BTC'].last, dat['CPC/BTC'].average, dat['CPC/BTC'].datetime]
//             ];
//             let sql = format('insert into cpc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XEM/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['XEM/ETH'].datetime);
//             let values = [
//                 [dat['XEM/ETH'].symbol, dat['XEM/ETH'].high, dat['XEM/ETH'].low, dat['XEM/ETH'].bid, dat['XEM/ETH'].ask, dat['XEM/ETH'].baseVolume, timeUnix, dat.ex_name, dat['XEM/ETH'].last, dat['XEM/ETH'].average, dat['XEM/ETH'].datetime]
//             ];
//             let sql = format('insert into xem_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['NMR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NMR/BTC'].datetime);
//             let values = [
//                 [dat['NMR/BTC'].symbol, dat['NMR/BTC'].high, dat['NMR/BTC'].low, dat['NMR/BTC'].bid, dat['NMR/BTC'].ask, dat['NMR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NMR/BTC'].last, dat['NMR/BTC'].average, dat['NMR/BTC'].datetime]
//             ];
//             let sql = format('insert into nmr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DGD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DGD/BTC'].datetime);
//             let values = [
//                 [dat['DGD/BTC'].symbol, dat['DGD/BTC'].high, dat['DGD/BTC'].low, dat['DGD/BTC'].bid, dat['DGD/BTC'].ask, dat['DGD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DGD/BTC'].last, dat['DGD/BTC'].average, dat['DGD/BTC'].datetime]
//             ];
//             let sql = format('insert into dgd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SYNX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SYNX/BTC'].datetime);
//             let values = [
//                 [dat['SYNX/BTC'].symbol, dat['SYNX/BTC'].high, dat['SYNX/BTC'].low, dat['SYNX/BTC'].bid, dat['SYNX/BTC'].ask, dat['SYNX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SYNX/BTC'].last, dat['SYNX/BTC'].average, dat['SYNX/BTC'].datetime]
//             ];
//             let sql = format('insert into synx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['EBST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EBST/BTC'].datetime);
//             let values = [
//                 [dat['EBST/BTC'].symbol, dat['EBST/BTC'].high, dat['EBST/BTC'].low, dat['EBST/BTC'].bid, dat['EBST/BTC'].ask, dat['EBST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EBST/BTC'].last, dat['EBST/BTC'].average, dat['EBST/BTC'].datetime]
//             ];
//             let sql = format('insert into ebst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ETC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ETC/ETH'].datetime);
//             let values = [
//                 [dat['ETC/ETH'].symbol, dat['ETC/ETH'].high, dat['ETC/ETH'].low, dat['ETC/ETH'].bid, dat['ETC/ETH'].ask, dat['ETC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ETC/ETH'].last, dat['ETC/ETH'].average, dat['ETC/ETH'].datetime]
//             ];
//             let sql = format('insert into etc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CRB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CRB/BTC'].datetime);
//             let values = [
//                 [dat['CRB/BTC'].symbol, dat['CRB/BTC'].high, dat['CRB/BTC'].low, dat['CRB/BTC'].bid, dat['CRB/BTC'].ask, dat['CRB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CRB/BTC'].last, dat['CRB/BTC'].average, dat['CRB/BTC'].datetime]
//             ];
//             let sql = format('insert into crb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['EXCL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EXCL/BTC'].datetime);
//             let values = [
//                 [dat['EXCL/BTC'].symbol, dat['EXCL/BTC'].high, dat['EXCL/BTC'].low, dat['EXCL/BTC'].bid, dat['EXCL/BTC'].ask, dat['EXCL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EXCL/BTC'].last, dat['EXCL/BTC'].average, dat['EXCL/BTC'].datetime]
//             ];
//             let sql = format('insert into excl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SNT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['SNT/ETH'].datetime);
//             let values = [
//                 [dat['SNT/ETH'].symbol, dat['SNT/ETH'].high, dat['SNT/ETH'].low, dat['SNT/ETH'].bid, dat['SNT/ETH'].ask, dat['SNT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['SNT/ETH'].last, dat['SNT/ETH'].average, dat['SNT/ETH'].datetime]
//             ];
//             let sql = format('insert into snt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ANT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ANT/BTC'].datetime);
//             let values = [
//                 [dat['ANT/BTC'].symbol, dat['ANT/BTC'].high, dat['ANT/BTC'].low, dat['ANT/BTC'].bid, dat['ANT/BTC'].ask, dat['ANT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ANT/BTC'].last, dat['ANT/BTC'].average, dat['ANT/BTC'].datetime]
//             ];
//             let sql = format('insert into ant_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XCP/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XCP/BTC'].datetime);
//             let values = [
//                 [dat['XCP/BTC'].symbol, dat['XCP/BTC'].high, dat['XCP/BTC'].low, dat['XCP/BTC'].bid, dat['XCP/BTC'].ask, dat['XCP/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XCP/BTC'].last, dat['XCP/BTC'].average, dat['XCP/BTC'].datetime]
//             ];
//             let sql = format('insert into xcp_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['TX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TX/BTC'].datetime);
//             let values = [
//                 [dat['TX/BTC'].symbol, dat['TX/BTC'].high, dat['TX/BTC'].low, dat['TX/BTC'].bid, dat['TX/BTC'].ask, dat['TX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TX/BTC'].last, dat['TX/BTC'].average, dat['TX/BTC'].datetime]
//             ];
//             let sql = format('insert into tx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['TKS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TKS/BTC'].datetime);
//             let values = [
//                 [dat['TKS/BTC'].symbol, dat['TKS/BTC'].high, dat['TKS/BTC'].low, dat['TKS/BTC'].bid, dat['TKS/BTC'].ask, dat['TKS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TKS/BTC'].last, dat['TKS/BTC'].average, dat['TKS/BTC'].datetime]
//             ];
//             let sql = format('insert into tks_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SNRG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SNRG/BTC'].datetime);
//             let values = [
//                 [dat['SNRG/BTC'].symbol, dat['SNRG/BTC'].high, dat['SNRG/BTC'].low, dat['SNRG/BTC'].bid, dat['SNRG/BTC'].ask, dat['SNRG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SNRG/BTC'].last, dat['SNRG/BTC'].average, dat['SNRG/BTC'].datetime]
//             ];
//             let sql = format('insert into qrl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SPHR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SPHR/BTC'].datetime);
//             let values = [
//                 [dat['SPHR/BTC'].symbol, dat['SPHR/BTC'].high, dat['SPHR/BTC'].low, dat['SPHR/BTC'].bid, dat['SPHR/BTC'].ask, dat['SPHR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SPHR/BTC'].last, dat['SPHR/BTC'].average, dat['SPHR/BTC'].datetime]
//             ];
//             let sql = format('insert into sphr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['NXS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NXS/BTC'].datetime);
//             let values = [
//                 [dat['NXS/BTC'].symbol, dat['NXS/BTC'].high, dat['NXS/BTC'].low, dat['NXS/BTC'].bid, dat['NXS/BTC'].ask, dat['NXS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NXS/BTC'].last, dat['NXS/BTC'].average, dat['NXS/BTC'].datetime]
//             ];
//             let sql = format('insert into nxs_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['FLDC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FLDC/BTC'].datetime);
//             let values = [
//                 [dat['FLDC/BTC'].symbol, dat['FLDC/BTC'].high, dat['FLDC/BTC'].low, dat['FLDC/BTC'].bid, dat['FLDC/BTC'].ask, dat['FLDC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FLDC/BTC'].last, dat['FLDC/BTC'].average, dat['FLDC/BTC'].datetime]
//             ];
//             let sql = format('insert into fldc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['FTC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FTC/BTC'].datetime);
//             let values = [
//                 [dat['FTC/BTC'].symbol, dat['FTC/BTC'].high, dat['FTC/BTC'].low, dat['FTC/BTC'].bid, dat['FTC/BTC'].ask, dat['FTC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FTC/BTC'].last, dat['FTC/BTC'].average, dat['FTC/BTC'].datetime]
//             ];
//             let sql = format('insert into ftc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ADT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ADT/BTC'].datetime);
//             let values = [
//                 [dat['ADT/BTC'].symbol, dat['ADT/BTC'].high, dat['ADT/BTC'].low, dat['ADT/BTC'].bid, dat['ADT/BTC'].ask, dat['ADT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ADT/BTC'].last, dat['ADT/BTC'].average, dat['ADT/BTC'].datetime]
//             ];
//             let sql = format('insert into adt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CLUB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CLUB/BTC'].datetime);
//             let values = [
//                 [dat['CLUB/BTC'].symbol, dat['CLUB/BTC'].high, dat['CLUB/BTC'].low, dat['CLUB/BTC'].bid, dat['CLUB/BTC'].ask, dat['CLUB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CLUB/BTC'].last, dat['CLUB/BTC'].average, dat['CLUB/BTC'].datetime]
//             ];
//             let sql = format('insert into club_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['SC/ETH'].datetime);
//             let values = [
//                 [dat['SC/ETH'].symbol, dat['SC/ETH'].high, dat['SC/ETH'].low, dat['SC/ETH'].bid, dat['SC/ETH'].ask, dat['SC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['SC/ETH'].last, dat['SC/ETH'].average, dat['SC/ETH'].datetime]
//             ];
//             let sql = format('insert into sc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XMR/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['XMR/ETH'].datetime);
//             let values = [
//                 [dat['XMR/ETH'].symbol, dat['XMR/ETH'].high, dat['XMR/ETH'].low, dat['XMR/ETH'].bid, dat['XMR/ETH'].ask, dat['XMR/ETH'].baseVolume, timeUnix, dat.ex_name, dat['XMR/ETH'].last, dat['XMR/ETH'].average, dat['XMR/ETH'].datetime]
//             ];
//             let sql = format('insert into xmr_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['NXC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['NXC/BTC'].datetime);
//             let values = [
//                 [dat['NXC/BTC'].symbol, dat['NXC/BTC'].high, dat['NXC/BTC'].low, dat['NXC/BTC'].bid, dat['NXC/BTC'].ask, dat['NXC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['NXC/BTC'].last, dat['NXC/BTC'].average, dat['NXC/BTC'].datetime]
//             ];
//             let sql = format('insert into nxc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PPC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PPC/BTC'].datetime);
//             let values = [
//                 [dat['PPC/BTC'].symbol, dat['PPC/BTC'].high, dat['PPC/BTC'].low, dat['PPC/BTC'].bid, dat['PPC/BTC'].ask, dat['PPC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PPC/BTC'].last, dat['PPC/BTC'].average, dat['PPC/BTC'].datetime]
//             ];
//             let sql = format('insert into ppc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DGB/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['DGB/ETH'].datetime);
//             let values = [
//                 [dat['DGB/ETH'].symbol, dat['DGB/ETH'].high, dat['DGB/ETH'].low, dat['DGB/ETH'].bid, dat['DGB/ETH'].ask, dat['DGB/ETH'].baseVolume, timeUnix, dat.ex_name, dat['DGB/ETH'].last, dat['DGB/ETH'].average, dat['DGB/ETH'].datetime]
//             ];
//             let sql = format('insert into dgb_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SIB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SIB/BTC'].datetime);
//             let values = [
//                 [dat['SIB/BTC'].symbol, dat['SIB/BTC'].high, dat['SIB/BTC'].low, dat['SIB/BTC'].bid, dat['SIB/BTC'].ask, dat['SIB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SIB/BTC'].last, dat['SIB/BTC'].average, dat['SIB/BTC'].datetime]
//             ];
//             let sql = format('insert into sib_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['KORE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['KORE/BTC'].datetime);
//             let values = [
//                 [dat['KORE/BTC'].symbol, dat['KORE/BTC'].high, dat['KORE/BTC'].low, dat['KORE/BTC'].bid, dat['KORE/BTC'].ask, dat['KORE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['KORE/BTC'].last, dat['KORE/BTC'].average, dat['KORE/BTC'].datetime]
//             ];
//             let sql = format('insert into kore_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PAY/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['PAY/ETH'].datetime);
//             let values = [
//                 [dat['PAY/ETH'].symbol, dat['PAY/ETH'].high, dat['PAY/ETH'].low, dat['PAY/ETH'].bid, dat['PAY/ETH'].ask, dat['PAY/ETH'].baseVolume, timeUnix, dat.ex_name, dat['PAY/ETH'].last, dat['PAY/ETH'].average, dat['PAY/ETH'].datetime]
//             ];
//             let sql = format('insert into pay_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BLOCK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BLOCK/BTC'].datetime);
//             let values = [
//                 [dat['BLOCK/BTC'].symbol, dat['BLOCK/BTC'].high, dat['BLOCK/BTC'].low, dat['BLOCK/BTC'].bid, dat['BLOCK/BTC'].ask, dat['BLOCK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BLOCK/BTC'].last, dat['BLOCK/BTC'].average, dat['BLOCK/BTC'].datetime]
//             ];
//             let sql = format('insert into block_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BCY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BCY/BTC'].datetime);
//             let values = [
//                 [dat['BCY/BTC'].symbol, dat['BCY/BTC'].high, dat['BCY/BTC'].low, dat['BCY/BTC'].bid, dat['BCY/BTC'].ask, dat['BCY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BCY/BTC'].last, dat['BCY/BTC'].average, dat['BCY/BTC'].datetime]
//             ];
//             let sql = format('insert into bcy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GNT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['GNT/ETH'].datetime);
//             let values = [
//                 [dat['GNT/ETH'].symbol, dat['GNT/ETH'].high, dat['GNT/ETH'].low, dat['GNT/ETH'].bid, dat['GNT/ETH'].ask, dat['GNT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['GNT/ETH'].last, dat['GNT/ETH'].average, dat['GNT/ETH'].datetime]
//             ];
//             let sql = format('insert into gnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BNT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['BNT/ETH'].datetime);
//             let values = [
//                 [dat['BNT/ETH'].symbol, dat['BNT/ETH'].high, dat['BNT/ETH'].low, dat['BNT/ETH'].bid, dat['BNT/ETH'].ask, dat['BNT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['BNT/ETH'].last, dat['BNT/ETH'].average, dat['BNT/ETH'].datetime]
//             ];
//             let sql = format('insert into bnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XMY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XMY/BTC'].datetime);
//             let values = [
//                 [dat['XMY/BTC'].symbol, dat['XMY/BTC'].high, dat['XMY/BTC'].low, dat['XMY/BTC'].bid, dat['XMY/BTC'].ask, dat['XMY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XMY/BTC'].last, dat['XMY/BTC'].average, dat['XMY/BTC'].datetime]
//             ];
//             let sql = format('insert into xmy_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['EMC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EMC/BTC'].datetime);
//             let values = [
//                 [dat['EMC/BTC'].symbol, dat['EMC/BTC'].high, dat['EMC/BTC'].low, dat['EMC/BTC'].bid, dat['EMC/BTC'].ask, dat['EMC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EMC/BTC'].last, dat['EMC/BTC'].average, dat['EMC/BTC'].datetime]
//             ];
//             let sql = format('insert into emc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XWC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XWC/BTC'].datetime);
//             let values = [
//                 [dat['XWC/BTC'].symbol, dat['XWC/BTC'].high, dat['XWC/BTC'].low, dat['XWC/BTC'].bid, dat['XWC/BTC'].ask, dat['XWC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XWC/BTC'].last, dat['XWC/BTC'].average, dat['XWC/BTC'].datetime]
//             ];
//             let sql = format('insert into xwc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PINK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PINK/BTC'].datetime);
//             let values = [
//                 [dat['PINK/BTC'].symbol, dat['PINK/BTC'].high, dat['PINK/BTC'].low, dat['PINK/BTC'].bid, dat['PINK/BTC'].ask, dat['PINK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PINK/BTC'].last, dat['PINK/BTC'].average, dat['PINK/BTC'].datetime]
//             ];
//             let sql = format('insert into pink_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BTG/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['BTG/ETH'].datetime);
//             let values = [
//                 [dat['BTG/ETH'].symbol, dat['BTG/ETH'].high, dat['BTG/ETH'].low, dat['BTG/ETH'].bid, dat['BTG/ETH'].ask, dat['BTG/ETH'].baseVolume, timeUnix, dat.ex_name, dat['BTG/ETH'].last, dat['BTG/ETH'].average, dat['BTG/ETH'].datetime]
//             ];
//             let sql = format('insert into btg_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DASH/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['DASH/ETH'].datetime);
//             let values = [
//                 [dat['DASH/ETH'].symbol, dat['DASH/ETH'].high, dat['DASH/ETH'].low, dat['DASH/ETH'].bid, dat['DASH/ETH'].ask, dat['DASH/ETH'].baseVolume, timeUnix, dat.ex_name, dat['DASH/ETH'].last, dat['DASH/ETH'].average, dat['DASH/ETH'].datetime]
//             ];
//             let sql = format('insert into dash_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GEO/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GEO/BTC'].datetime);
//             let values = [
//                 [dat['GEO/BTC'].symbol, dat['GEO/BTC'].high, dat['GEO/BTC'].low, dat['GEO/BTC'].bid, dat['GEO/BTC'].ask, dat['GEO/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GEO/BTC'].last, dat['GEO/BTC'].average, dat['GEO/BTC'].datetime]
//             ];
//             let sql = format('insert into geo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ABY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ABY/BTC'].datetime);
//             let values = [
//                 [dat['ABY/BTC'].symbol, dat['ABY/BTC'].high, dat['ABY/BTC'].low, dat['ABY/BTC'].bid, dat['ABY/BTC'].ask, dat['ABY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ABY/BTC'].last, dat['ABY/BTC'].average, dat['ABY/BTC'].datetime]
//             ];
//             let sql = format('insert into aby_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['2GIVE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['2GIVE/BTC'].datetime);
//             let values = [
//                 [dat['2GIVE/BTC'].symbol, dat['2GIVE/BTC'].high, dat['2GIVE/BTC'].low, dat['2GIVE/BTC'].bid, dat['2GIVE/BTC'].ask, dat['2GIVE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['2GIVE/BTC'].last, dat['2GIVE/BTC'].average, dat['2GIVE/BTC'].datetime]
//             ];
//             let sql = format('insert into 2give_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ADX/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ADX/ETH'].datetime);
//             let values = [
//                 [dat['ADX/ETH'].symbol, dat['ADX/ETH'].high, dat['ADX/ETH'].low, dat['ADX/ETH'].bid, dat['ADX/ETH'].ask, dat['ADX/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ADX/ETH'].last, dat['ADX/ETH'].average, dat['ADX/ETH'].datetime]
//             ];
//             let sql = format('insert into adx_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['POWR/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['POWR/ETH'].datetime);
//             let values = [
//                 [dat['POWR/ETH'].symbol, dat['POWR/ETH'].high, dat['POWR/ETH'].low, dat['POWR/ETH'].bid, dat['POWR/ETH'].ask, dat['POWR/ETH'].baseVolume, timeUnix, dat.ex_name, dat['POWR/ETH'].last, dat['POWR/ETH'].average, dat['POWR/ETH'].datetime]
//             ];
//             let sql = format('insert into power_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BLITZ/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BLITZ/BTC'].datetime);
//             let values = [
//                 [dat['BLITZ/BTC'].symbol, dat['BLITZ/BTC'].high, dat['BLITZ/BTC'].low, dat['BLITZ/BTC'].bid, dat['BLITZ/BTC'].ask, dat['BLITZ/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BLITZ/BTC'].last, dat['BLITZ/BTC'].average, dat['BLITZ/BTC'].datetime]
//             ];
//             let sql = format('insert into blitz_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BSD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BSD/BTC'].datetime);
//             let values = [
//                 [dat['BSD/BTC'].symbol, dat['BSD/BTC'].high, dat['BSD/BTC'].low, dat['BSD/BTC'].bid, dat['BSD/BTC'].ask, dat['BSD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BSD/BTC'].last, dat['BSD/BTC'].average, dat['BSD/BTC'].datetime]
//             ];
//             let sql = format('insert into bsd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['WAVES/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['WAVES/ETH'].datetime);
//             let values = [
//                 [dat['WAVES/ETH'].symbol, dat['WAVES/ETH'].high, dat['WAVES/ETH'].low, dat['WAVES/ETH'].bid, dat['WAVES/ETH'].ask, dat['WAVES/ETH'].baseVolume, timeUnix, dat.ex_name, dat['WAVES/ETH'].last, dat['WAVES/ETH'].average, dat['WAVES/ETH'].datetime]
//             ];
//             let sql = format('insert into waves_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XST/BTC'].datetime);
//             let values = [
//                 [dat['XST/BTC'].symbol, dat['XST/BTC'].high, dat['XST/BTC'].low, dat['XST/BTC'].bid, dat['XST/BTC'].ask, dat['XST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XST/BTC'].last, dat['XST/BTC'].average, dat['XST/BTC'].datetime]
//             ];
//             let sql = format('insert into xst_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MCO/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['MCO/ETH'].datetime);
//             let values = [
//                 [dat['MCO/ETH'].symbol, dat['MCO/ETH'].high, dat['MCO/ETH'].low, dat['MCO/ETH'].bid, dat['MCO/ETH'].ask, dat['MCO/ETH'].baseVolume, timeUnix, dat.ex_name, dat['MCO/ETH'].last, dat['MCO/ETH'].average, dat['MCO/ETH'].datetime]
//             ];
//             let sql = format('insert into mco_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['REP/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['REP/ETH'].datetime);
//             let values = [
//                 [dat['REP/ETH'].symbol, dat['REP/ETH'].high, dat['REP/ETH'].low, dat['REP/ETH'].bid, dat['REP/ETH'].ask, dat['REP/ETH'].baseVolume, timeUnix, dat.ex_name, dat['REP/ETH'].last, dat['REP/ETH'].average, dat['REP/ETH'].datetime]
//             ];
//             let sql = format('insert into rep_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['EGC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EGC/BTC'].datetime);
//             let values = [
//                 [dat['EGC/BTC'].symbol, dat['EGC/BTC'].high, dat['EGC/BTC'].low, dat['EGC/BTC'].bid, dat['EGC/BTC'].ask, dat['EGC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EGC/BTC'].last, dat['EGC/BTC'].average, dat['EGC/BTC'].datetime]
//             ];
//             let sql = format('insert into egc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CVC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['CVC/ETH'].datetime);
//             let values = [
//                 [dat['CVC/ETH'].symbol, dat['CVC/ETH'].high, dat['CVC/ETH'].low, dat['CVC/ETH'].bid, dat['CVC/ETH'].ask, dat['CVC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['CVC/ETH'].last, dat['CVC/ETH'].average, dat['CVC/ETH'].datetime]
//             ];
//             let sql = format('insert into cvc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['COVAL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['COVAL/BTC'].datetime);
//             let values = [
//                 [dat['COVAL/BTC'].symbol, dat['COVAL/BTC'].high, dat['COVAL/BTC'].low, dat['COVAL/BTC'].bid, dat['COVAL/BTC'].ask, dat['COVAL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['COVAL/BTC'].last, dat['COVAL/BTC'].average, dat['COVAL/BTC'].datetime]
//             ];
//             let sql = format('insert into coval_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['IOC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['IOC/BTC'].datetime);
//             let values = [
//                 [dat['IOC/BTC'].symbol, dat['IOC/BTC'].high, dat['IOC/BTC'].low, dat['IOC/BTC'].bid, dat['IOC/BTC'].ask, dat['IOC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['IOC/BTC'].last, dat['IOC/BTC'].average, dat['IOC/BTC'].datetime]
//             ];
//             let sql = format('insert into ioc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ZEC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ZEC/ETH'].datetime);
//             let values = [
//                 [dat['ZEC/ETH'].symbol, dat['ZEC/ETH'].high, dat['ZEC/ETH'].low, dat['ZEC/ETH'].bid, dat['ZEC/ETH'].ask, dat['ZEC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ZEC/ETH'].last, dat['ZEC/ETH'].average, dat['ZEC/ETH'].datetime]
//             ];
//             let sql = format('insert into zec_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['FLO/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FLO/BTC'].datetime);
//             let values = [
//                 [dat['FLO/BTC'].symbol, dat['FLO/BTC'].high, dat['FLO/BTC'].low, dat['FLO/BTC'].bid, dat['FLO/BTC'].ask, dat['FLO/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FLO/BTC'].last, dat['FLO/BTC'].average, dat['FLO/BTC'].datetime]
//             ];
//             let sql = format('insert into flo_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['STRAT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['STRAT/ETH'].datetime);
//             let values = [
//                 [dat['STRAT/ETH'].symbol, dat['STRAT/ETH'].high, dat['STRAT/ETH'].low, dat['STRAT/ETH'].bid, dat['STRAT/ETH'].ask, dat['STRAT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['STRAT/ETH'].last, dat['STRAT/ETH'].average, dat['STRAT/ETH'].datetime]
//             ];
//             let sql = format('insert into strat_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['VTR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VTR/BTC'].datetime);
//             let values = [
//                 [dat['VTR/BTC'].symbol, dat['VTR/BTC'].high, dat['VTR/BTC'].low, dat['VTR/BTC'].bid, dat['VTR/BTC'].ask, dat['VTR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VTR/BTC'].last, dat['VTR/BTC'].average, dat['VTR/BTC'].datetime]
//             ];
//             let sql = format('insert into vtr_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GRC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GRC/BTC'].datetime);
//             let values = [
//                 [dat['GRC/BTC'].symbol, dat['GRC/BTC'].high, dat['GRC/BTC'].low, dat['GRC/BTC'].bid, dat['GRC/BTC'].ask, dat['GRC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GRC/BTC'].last, dat['GRC/BTC'].average, dat['GRC/BTC'].datetime]
//             ];
//             let sql = format('insert into grc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['START/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['START/BTC'].datetime);
//             let values = [
//                 [dat['START/BTC'].symbol, dat['START/BTC'].high, dat['START/BTC'].low, dat['START/BTC'].bid, dat['START/BTC'].ask, dat['START/BTC'].baseVolume, timeUnix, dat.ex_name, dat['START/BTC'].last, dat['START/BTC'].average, dat['START/BTC'].datetime]
//             ];
//             let sql = format('insert into start_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DTB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DTB/BTC'].datetime);
//             let values = [
//                 [dat['DTB/BTC'].symbol, dat['DTB/BTC'].high, dat['DTB/BTC'].low, dat['DTB/BTC'].bid, dat['DTB/BTC'].ask, dat['DTB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DTB/BTC'].last, dat['DTB/BTC'].average, dat['DTB/BTC'].datetime]
//             ];
//             let sql = format('insert into dtb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CRW/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CRW/BTC'].datetime);
//             let values = [
//                 [dat['CRW/BTC'].symbol, dat['CRW/BTC'].high, dat['CRW/BTC'].low, dat['CRW/BTC'].bid, dat['CRW/BTC'].ask, dat['CRW/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CRW/BTC'].last, dat['CRW/BTC'].average, dat['CRW/BTC'].datetime]
//             ];
//             let sql = format('insert into crw_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BTCD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BTCD/BTC'].datetime);
//             let values = [
//                 [dat['BTCD/BTC'].symbol, dat['BTCD/BTC'].high, dat['BTCD/BTC'].low, dat['BTCD/BTC'].bid, dat['BTCD/BTC'].ask, dat['BTCD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BTCD/BTC'].last, dat['BTCD/BTC'].average, dat['BTCD/BTC'].datetime]
//             ];
//             let sql = format('insert into btcd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BAT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['BAT/ETH'].datetime);
//             let values = [
//                 [dat['BAT/ETH'].symbol, dat['BAT/ETH'].high, dat['BAT/ETH'].low, dat['BAT/ETH'].bid, dat['BAT/ETH'].ask, dat['BAT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['BAT/ETH'].last, dat['BAT/ETH'].average, dat['BAT/ETH'].datetime]
//             ];
//             let sql = format('insert into bat_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GOLOS/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GOLOS/BTC'].datetime);
//             let values = [
//                 [dat['GOLOS/BTC'].symbol, dat['GOLOS/BTC'].high, dat['GOLOS/BTC'].low, dat['GOLOS/BTC'].bid, dat['GOLOS/BTC'].ask, dat['GOLOS/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GOLOS/BTC'].last, dat['GOLOS/BTC'].average, dat['GOLOS/BTC'].datetime]
//             ];
//             let sql = format('insert into golos_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PTC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PTC/BTC'].datetime);
//             let values = [
//                 [dat['PTC/BTC'].symbol, dat['PTC/BTC'].high, dat['PTC/BTC'].low, dat['PTC/BTC'].bid, dat['PTC/BTC'].ask, dat['PTC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PTC/BTC'].last, dat['PTC/BTC'].average, dat['PTC/BTC'].datetime]
//             ];
//             let sql = format('insert into ptc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GLD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GLD/BTC'].datetime);
//             let values = [
//                 [dat['GLD/BTC'].symbol, dat['GLD/BTC'].high, dat['GLD/BTC'].low, dat['GLD/BTC'].bid, dat['GLD/BTC'].ask, dat['GLD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GLD/BTC'].last, dat['GLD/BTC'].average, dat['GLD/BTC'].datetime]
//             ];
//             let sql = format('insert into gld_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MANA/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['MANA/ETH'].datetime);
//             let values = [
//                 [dat['MANA/ETH'].symbol, dat['MANA/ETH'].high, dat['MANA/ETH'].low, dat['MANA/ETH'].bid, dat['MANA/ETH'].ask, dat['MANA/ETH'].baseVolume, timeUnix, dat.ex_name, dat['MANA/ETH'].last, dat['MANA/ETH'].average, dat['MANA/ETH'].datetime]
//             ];
//             let sql = format('insert into mana_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CLAM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CLAM/BTC'].datetime);
//             let values = [
//                 [dat['CLAM/BTC'].symbol, dat['CLAM/BTC'].high, dat['CLAM/BTC'].low, dat['CLAM/BTC'].bid, dat['CLAM/BTC'].ask, dat['CLAM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CLAM/BTC'].last, dat['CLAM/BTC'].average, dat['CLAM/BTC'].datetime]
//             ];
//             let sql = format('insert into clam_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MLN/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['MLN/BTC'].datetime);
//             let values = [
//                 [dat['MLN/BTC'].symbol, dat['MLN/BTC'].high, dat['MLN/BTC'].low, dat['MLN/BTC'].bid, dat['MLN/BTC'].ask, dat['MLN/BTC'].baseVolume, timeUnix, dat.ex_name, dat['MLN/BTC'].last, dat['MLN/BTC'].average, dat['MLN/BTC'].datetime]
//             ];
//             let sql = format('insert into mln_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DMD/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['DMD/BTC'].datetime);
//             let values = [
//                 [dat['DMD/BTC'].symbol, dat['DMD/BTC'].high, dat['DMD/BTC'].low, dat['DMD/BTC'].bid, dat['DMD/BTC'].ask, dat['DMD/BTC'].baseVolume, timeUnix, dat.ex_name, dat['DMD/BTC'].last, dat['DMD/BTC'].average, dat['DMD/BTC'].datetime]
//             ];
//             let sql = format('insert into dmd_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['INCNT/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['INCNT/BTC'].datetime);
//             let values = [
//                 [dat['INCNT/BTC'].symbol, dat['INCNT/BTC'].high, dat['INCNT/BTC'].low, dat['INCNT/BTC'].bid, dat['INCNT/BTC'].ask, dat['INCNT/BTC'].baseVolume, timeUnix, dat.ex_name, dat['INCNT/BTC'].last, dat['INCNT/BTC'].average, dat['INCNT/BTC'].datetime]
//             ];
//             let sql = format('insert into incnt_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ERC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ERC/BTC'].datetime);
//             let values = [
//                 [dat['ERC/BTC'].symbol, dat['ERC/BTC'].high, dat['ERC/BTC'].low, dat['ERC/BTC'].bid, dat['ERC/BTC'].ask, dat['ERC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ERC/BTC'].last, dat['ERC/BTC'].average, dat['ERC/BTC'].datetime]
//             ];
//             let sql = format('insert into erc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GBG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['GBG/BTC'].datetime);
//             let values = [
//                 [dat['GBG/BTC'].symbol, dat['GBG/BTC'].high, dat['GBG/BTC'].low, dat['GBG/BTC'].bid, dat['GBG/BTC'].ask, dat['GBG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['GBG/BTC'].last, dat['GBG/BTC'].average, dat['GBG/BTC'].datetime]
//             ];
//             let sql = format('insert into gbg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['WINGS/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['WINGS/ETH'].datetime);
//             let values = [
//                 [dat['WINGS/ETH'].symbol, dat['WINGS/ETH'].high, dat['WINGS/ETH'].low, dat['WINGS/ETH'].bid, dat['WINGS/ETH'].ask, dat['WINGS/ETH'].baseVolume, timeUnix, dat.ex_name, dat['WINGS/ETH'].last, dat['WINGS/ETH'].average, dat['WINGS/ETH'].datetime]
//             ];
//             let sql = format('insert into wings_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['GUP/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['GUP/ETH'].datetime);
//             let values = [
//                 [dat['GUP/ETH'].symbol, dat['GUP/ETH'].high, dat['GUP/ETH'].low, dat['GUP/ETH'].bid, dat['GUP/ETH'].ask, dat['GUP/ETH'].baseVolume, timeUnix, dat.ex_name, dat['GUP/ETH'].last, dat['GUP/ETH'].average, dat['GUP/ETH'].datetime]
//             ];
//             let sql = format('insert into gup_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['FAIR/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['FAIR/BTC'].datetime);
//             let values = [
//                 [dat['FAIR/BTC'].symbol, dat['FAIR/BTC'].high, dat['FAIR/BTC'].low, dat['FAIR/BTC'].bid, dat['FAIR/BTC'].ask, dat['FAIR/BTC'].baseVolume, timeUnix, dat.ex_name, dat['FAIR/BTC'].last, dat['FAIR/BTC'].average, dat['QRL/BTC'].datetime]
//             ];
//             let sql = format('insert into fair_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ENRG/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['ENRG/BTC'].datetime);
//             let values = [
//                 [dat['ENRG/BTC'].symbol, dat['ENRG/BTC'].high, dat['ENRG/BTC'].low, dat['ENRG/BTC'].bid, dat['ENRG/BTC'].ask, dat['ENRG/BTC'].baseVolume, timeUnix, dat.ex_name, dat['ENRG/BTC'].last, dat['ENRG/BTC'].average, dat['ENRG/BTC'].datetime]
//             ];
//             let sql = format('insert into enrg_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PKB/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PKB/BTC'].datetime);
//             let values = [
//                 [dat['PKB/BTC'].symbol, dat['PKB/BTC'].high, dat['PKB/BTC'].low, dat['PKB/BTC'].bid, dat['PKB/BTC'].ask, dat['PKB/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PKB/BTC'].last, dat['PKB/BTC'].average, dat['PKB/BTC'].datetime]
//             ];
//             let sql = format('insert into pkb_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['RBY/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['RBY/BTC'].datetime);
//             let values = [
//                 [dat['RBY/BTC'].symbol, dat['RBY/BTC'].high, dat['RBY/BTC'].low, dat['RBY/BTC'].bid, dat['RBY/BTC'].ask, dat['RBY/BTC'].baseVolume, timeUnix, dat.ex_name, dat['RBY/BTC'].last, dat['RBY/BTC'].average, dat['RBY/BTC'].datetime]
//             ];
//             let sql = format('insert into rby_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ENG/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ENG/ETH'].datetime);
//             let values = [
//                 [dat['ENG/ETH'].symbol, dat['ENG/ETH'].high, dat['ENG/ETH'].low, dat['ENG/ETH'].bid, dat['ENG/ETH'].ask, dat['ENG/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ENG/ETH'].last, dat['ENG/ETH'].average, dat['ENG/ETH'].datetime]
//             ];
//             let sql = format('insert into eng_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['VRM/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['VRM/BTC'].datetime);
//             let values = [
//                 [dat['VRM/BTC'].symbol, dat['VRM/BTC'].high, dat['VRM/BTC'].low, dat['VRM/BTC'].bid, dat['VRM/BTC'].ask, dat['VRM/BTC'].baseVolume, timeUnix, dat.ex_name, dat['VRM/BTC'].last, dat['VRM/BTC'].average, dat['VRM/BTC'].datetime]
//             ];
//             let sql = format('insert into vrm_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ANT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ANT/ETH'].datetime);
//             let values = [
//                 [dat['ANT/ETH'].symbol, dat['ANT/ETH'].high, dat['ANT/ETH'].low, dat['ANT/ETH'].bid, dat['ANT/ETH'].ask, dat['ANT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ANT/ETH'].last, dat['ANT/ETH'].average, dat['ANT/ETH'].datetime]
//             ];
//             let sql = format('insert into ant_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['TRST/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['TRST/ETH'].datetime);
//             let values = [
//                 [dat['TRST/ETH'].symbol, dat['TRST/ETH'].high, dat['TRST/ETH'].low, dat['TRST/ETH'].bid, dat['TRST/ETH'].ask, dat['TRST/ETH'].baseVolume, timeUnix, dat.ex_name, dat['TRST/ETH'].last, dat['TRST/ETH'].average, dat['TRST/ETH'].datetime]
//             ];
//             let sql = format('insert into trst_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['XVC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['XVC/BTC'].datetime);
//             let values = [
//                 [dat['XVC/BTC'].symbol, dat['XVC/BTC'].high, dat['XVC/BTC'].low, dat['XVC/BTC'].bid, dat['XVC/BTC'].ask, dat['XVC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['XVC/BTC'].last, dat['XVC/BTC'].average, dat['XVC/BTC'].datetime]
//             ];
//             let sql = format('insert into xvc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['INFX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['INFX/BTC'].datetime);
//             let values = [
//                 [dat['INFX/BTC'].symbol, dat['INFX/BTC'].high, dat['INFX/BTC'].low, dat['INFX/BTC'].bid, dat['INFX/BTC'].ask, dat['INFX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['INFX/BTC'].last, dat['INFX/BTC'].average, dat['INFX/BTC'].datetime]
//             ];
//             let sql = format('insert into infx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


      
//         if (dat['TIX/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['TIX/ETH'].datetime);
//             let values = [
//                 [dat['TIX/ETH'].symbol, dat['TIX/ETH'].high, dat['TIX/ETH'].low, dat['TIX/ETH'].bid, dat['TIX/ETH'].ask, dat['TIX/ETH'].baseVolume, timeUnix, dat.ex_name, dat['TIX/ETH'].last, dat['TIX/ETH'].average, dat['TIX/ETH'].datetime]
//             ];
//             let sql = format('insert into tix_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['SEQ/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['SEQ/BTC'].datetime);
//             let values = [
//                 [dat['SEQ/BTC'].symbol, dat['SEQ/BTC'].high, dat['SEQ/BTC'].low, dat['SEQ/BTC'].bid, dat['SEQ/BTC'].ask, dat['SEQ/BTC'].baseVolume, timeUnix, dat.ex_name, dat['SEQ/BTC'].last, dat['SEQ/BTC'].average, dat['SEQ/BTC'].datetime]
//             ];
//             let sql = format('insert into seq_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['EFL/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['EFL/BTC'].datetime);
//             let values = [
//                 [dat['EFL/BTC'].symbol, dat['EFL/BTC'].high, dat['EFL/BTC'].low, dat['EFL/BTC'].bid, dat['EFL/BTC'].ask, dat['EFL/BTC'].baseVolume, timeUnix, dat.ex_name, dat['EFL/BTC'].last, dat['EFL/BTC'].average, dat['EFL/BTC'].datetime]
//             ];
//             let sql = format('insert into efl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MTL/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['MTL/ETH'].datetime);
//             let values = [
//                 [dat['MTL/ETH'].symbol, dat['MTL/ETH'].high, dat['MTL/ETH'].low, dat['MTL/ETH'].bid, dat['MTL/ETH'].ask, dat['MTL/ETH'].baseVolume, timeUnix, dat.ex_name, dat['MTL/ETH'].last, dat['MTL/ETH'].average, dat['MTL/ETH'].datetime]
//             ];
//             let sql = format('insert into mtl_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CFI/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['CFI/ETH'].datetime);
//             let values = [
//                 [dat['CFI/ETH'].symbol, dat['CFI/ETH'].high, dat['CFI/ETH'].low, dat['CFI/ETH'].bid, dat['CFI/ETH'].ask, dat['CFI/ETH'].baseVolume, timeUnix, dat.ex_name, dat['CFI/ETH'].last, dat['CFI/ETH'].average, dat['CFI/ETH'].datetime]
//             ];
//             let sql = format('insert into cfi_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DGD/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['DGD/ETH'].datetime);
//             let values = [
//                 [dat['DGD/ETH'].symbol, dat['DGD/ETH'].high, dat['DGD/ETH'].low, dat['DGD/ETH'].bid, dat['DGD/ETH'].ask, dat['DGD/ETH'].baseVolume, timeUnix, dat.ex_name, dat['DGD/ETH'].last, dat['DGD/ETH'].average, dat['DGD/ETH'].datetime]
//             ];
//             let sql = format('insert into dgd_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BYC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BYC/BTC'].datetime);
//             let values = [
//                 [dat['BYC/BTC'].symbol, dat['BYC/BTC'].high, dat['BYC/BTC'].low, dat['BYC/BTC'].bid, dat['BYC/BTC'].ask, dat['BYC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BYC/BTC'].last, dat['BYC/BTC'].average, dat['BYC/BTC'].datetime]
//             ];
//             let sql = format('insert into btc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['TRUST/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['TRUST/BTC'].datetime);
//             let values = [
//                 [dat['TRUST/BTC'].symbol, dat['TRUST/BTC'].high, dat['TRUST/BTC'].low, dat['TRUST/BTC'].bid, dat['TRUST/BTC'].ask, dat['TRUST/BTC'].baseVolume, timeUnix, dat.ex_name, dat['TRUST/BTC'].last, dat['TRUST/BTC'].average, dat['TRUST/BTC'].datetime]
//             ];
//             let sql = format('insert into qrl_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PDC/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['PDC/BTC'].datetime);
//             let values = [
//                 [dat['PDC/BTC'].symbol, dat['PDC/BTC'].high, dat['PDC/BTC'].low, dat['PDC/BTC'].bid, dat['PDC/BTC'].ask, dat['PDC/BTC'].baseVolume, timeUnix, dat.ex_name, dat['PDC/BTC'].last, dat['PDC/BTC'].average, dat['PDC/BTC'].datetime]
//             ];
//             let sql = format('insert into pdc_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BRK/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BRK/BTC'].datetime);
//             let values = [
//                 [dat['BRK/BTC'].symbol, dat['BRK/BTC'].high, dat['BRK/BTC'].low, dat['BRK/BTC'].bid, dat['BRK/BTC'].ask, dat['BRK/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BRK/BTC'].last, dat['BRK/BTC'].average, dat['BRK/BTC'].datetime]
//             ];
//             let sql = format('insert into brk_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


//         console.log(dat['FCT/ETH'])
//         if (dat['FCT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['FCT/ETH'].datetime);
//             let values = [
//                 [dat['FCT/ETH'].symbol, dat['FCT/ETH'].high, dat['FCT/ETH'].low, dat['FCT/ETH'].bid, dat['FCT/ETH'].ask, dat['FCT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['FCT/ETH'].last, dat['FCT/ETH'].average, dat['FCT/ETH'].datetime]
//             ];
//             let sql = format('insert into fct_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['VIB/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['VIB/ETH'].datetime);
//             let values = [
//                 [dat['VIB/ETH'].symbol, dat['VIB/ETH'].high, dat['VIB/ETH'].low, dat['VIB/ETH'].bid, dat['VIB/ETH'].ask, dat['VIB/ETH'].baseVolume, timeUnix, dat.ex_name, dat['VIB/ETH'].last, dat['VIB/ETH'].average, dat['VIB/ETH'].datetime]
//             ];
//             let sql = format('insert into vib_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['HMQ/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['HMQ/ETH'].datetime);
//             let values = [
//                 [dat['HMQ/ETH'].symbol, dat['HMQ/ETH'].high, dat['HMQ/ETH'].low, dat['HMQ/ETH'].bid, dat['HMQ/ETH'].ask, dat['HMQ/ETH'].baseVolume, timeUnix, dat.ex_name, dat['HMQ/ETH'].last, dat['HMQ/ETH'].average, dat['HMQ/ETH'].datetime]
//             ];
//             let sql = format('insert into hmq_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['CURE/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['CURE/BTC'].datetime);
//             let values = [
//                 [dat['CURE/BTC'].symbol, dat['CURE/BTC'].high, dat['CURE/BTC'].low, dat['CURE/BTC'].bid, dat['CURE/BTC'].ask, dat['CURE/BTC'].baseVolume, timeUnix, dat.ex_name, dat['CURE/BTC'].last, dat['CURE/BTC'].average, dat['CURE/BTC'].datetime]
//             ];
//             let sql = format('insert into cure_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['LUN/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['LUN/ETH'].datetime);
//             let values = [
//                 [dat['LUN/ETH'].symbol, dat['LUN/ETH'].high, dat['LUN/ETH'].low, dat['LUN/ETH'].bid, dat['LUN/ETH'].ask, dat['LUN/ETH'].baseVolume, timeUnix, dat.ex_name, dat['LUN/ETH'].last, dat['LUN/ETH'].average, dat['LUN/ETH'].datetime]
//             ];
//             let sql = format('insert into lun_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['MYST/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['MYST/ETH'].datetime);
//             let values = [
//                 [dat['MYST/ETH'].symbol, dat['MYST/ETH'].high, dat['MYST/ETH'].low, dat['MYST/ETH'].bid, dat['MYST/ETH'].ask, dat['MYST/ETH'].baseVolume, timeUnix, dat.ex_name, dat['MYST/ETH'].last, dat['MYST/ETH'].average, dat['MYST/ETH'].datetime]
//             ];
//             let sql = format('insert into myst_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['1ST/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['1ST/ETH'].datetime);
//             let values = [
//                 [dat['1ST/ETH'].symbol, dat['1ST/ETH'].high, dat['1ST/ETH'].low, dat['1ST/ETH'].bid, dat['1ST/ETH'].ask, dat['1ST/ETH'].baseVolume, timeUnix, dat.ex_name, dat['1ST/ETH'].last, dat['1ST/ETH'].average, dat['1ST/ETH'].datetime]
//             ];
//             let sql = format('insert into 1st_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['BRX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['BRX/BTC'].datetime);
//             let values = [
//                 [dat['BRX/BTC'].symbol, dat['BRX/BTC'].high, dat['BRX/BTC'].low, dat['BRX/BTC'].bid, dat['BRX/BTC'].ask, dat['BRX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['BRX/BTC'].last, dat['BRX/BTC'].average, dat['BRX/BTC'].datetime]
//             ];
//             let sql = format('insert into brx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['PTOY/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['PTOY/ETH'].datetime);
//             let values = [
//                 [dat['PTOY/ETH'].symbol, dat['PTOY/ETH'].high, dat['PTOY/ETH'].low, dat['PTOY/ETH'].bid, dat['PTOY/ETH'].ask, dat['PTOY/ETH'].baseVolume, timeUnix, dat.ex_name, dat['PTOY/ETH'].last, dat['PTOY/ETH'].average, dat['PTOY/ETH'].datetime]
//             ];
//             let sql = format('insert into ptoy_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['RLC/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['RLC/ETH'].datetime);
//             let values = [
//                 [dat['RLC/ETH'].symbol, dat['RLC/ETH'].high, dat['RLC/ETH'].low, dat['RLC/ETH'].bid, dat['RLC/ETH'].ask, dat['RLC/ETH'].baseVolume, timeUnix, dat.ex_name, dat['RLC/ETH'].last, dat['RLC/ETH'].average, dat['RLC/ETH'].datetime]
//             ];
//             let sql = format('insert into rlc_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['APX/BTC'] !== undefined) {
//             let timeUnix = unixTime(dat['APX/BTC'].datetime);
//             let values = [
//                 [dat['APX/BTC'].symbol, dat['APX/BTC'].high, dat['APX/BTC'].low, dat['APX/BTC'].bid, dat['APX/BTC'].ask, dat['APX/BTC'].baseVolume, timeUnix, dat.ex_name, dat['APX/BTC'].last, dat['APX/BTC'].average, dat['APX/BTC'].datetime]
//             ];
//             let sql = format('insert into apx_btc' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['DNT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['DNT/ETH'].datetime);
//             let values = [
//                 [dat['DNT/ETH'].symbol, dat['DNT/ETH'].high, dat['DNT/ETH'].low, dat['DNT/ETH'].bid, dat['DNT/ETH'].ask, dat['DNT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['DNT/ETH'].last, dat['DNT/ETH'].average, dat['DNT/ETH'].datetime]
//             ];
//             let sql = format('insert into dnt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['ADT/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['ADT/ETH'].datetime);
//             let values = [
//                 [dat['ADT/ETH'].symbol, dat['ADT/ETH'].high, dat['ADT/ETH'].low, dat['ADT/ETH'].bid, dat['ADT/ETH'].ask, dat['ADT/ETH'].baseVolume, timeUnix, dat.ex_name, dat['ADT/ETH'].last, dat['ADT/ETH'].average, dat['ADT/ETH'].datetime]
//             ];
//             let sql = format('insert into adt_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['LGD/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['LGD/ETH'].datetime);
//             let values = [
//                 [dat['LGD/ETH'].symbol, dat['LGD/ETH'].high, dat['LGD/ETH'].low, dat['LGD/ETH'].bid, dat['LGD/ETH'].ask, dat['LGD/ETH'].baseVolume, timeUnix, dat.ex_name, dat['LGD/ETH'].last, dat['LGD/ETH'].average, dat['LGD/ETH'].datetime]
//             ];
//             let sql = format('insert into lgd_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['QRL/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['QRL/ETH'].datetime);
//             let values = [
//                 [dat['QRL/ETH'].symbol, dat['QRL/ETH'].high, dat['QRL/ETH'].low, dat['QRL/ETH'].bid, dat['QRL/ETH'].ask, dat['QRL/ETH'].baseVolume, timeUnix, dat.ex_name, dat['QRL/ETH'].last, dat['QRL/ETH'].average, dat['QRL/ETH'].datetime]
//             ];
//             let sql = format('insert into qrl_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }


        
//         if (dat['NMR/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['NMR/ETH'].datetime);
//             let values = [
//                 [dat['NMR/ETH'].symbol, dat['NMR/ETH'].high, dat['NMR/ETH'].low, dat['NMR/ETH'].bid, dat['NMR/ETH'].ask, dat['NMR/ETH'].baseVolume, timeUnix, dat.ex_name, dat['NMR/ETH'].last, dat['NMR/ETH'].average, dat['NMR/ETH'].datetime]
//             ];
//             let sql = format('insert into nmr_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['GNO/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['GNO/ETH'].datetime);
//             let values = [
//                 [dat['GNO/ETH'].symbol, dat['GNO/ETH'].high, dat['GNO/ETH'].low, dat['GNO/ETH'].bid, dat['GNO/ETH'].ask, dat['GNO/ETH'].baseVolume, timeUnix, dat.ex_name, dat['GNO/ETH'].last, dat['GNO/ETH'].average, dat['GNO/ETH'].datetime]
//             ];
//             let sql = format('insert into gno_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }
//         if (dat['CRB/ETH'] !== undefined) {
//             let timeUnix = unixTime(dat['CRB/ETH'].datetime);
//             let values = [
//                 [dat['CRB/ETH'].symbol, dat['CRB/ETH'].high, dat['CRB/ETH'].low, dat['CRB/ETH'].bid, dat['CRB/ETH'].ask, dat['CRB/ETH'].baseVolume, timeUnix, dat.ex_name, dat['CRB/ETH'].last, dat['CRB/ETH'].average, dat['CRB/ETH'].datetime]
//             ];
//             let sql = format('insert into crb_eth' + '(symbol, high, low, bid, ask, base_volume, time_stamp,' +
//                 'ex_name, last, average, date )' + 'values %L', values);
//             db.query(sql, function (err, result) {
//                 if (err) throw err;
//             });
//         }








        
//     }, 5000);
// }

// module.exports = db