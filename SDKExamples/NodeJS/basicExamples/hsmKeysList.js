/// Title   : hsmKeysList.js
/// Purpose : List keys in the mockHsm in the blockchain with optional Alias filter
/// Author  : Gary de Beer @ BankservAfrica
/// Date    : 25/01/2017
/// Updated : 27/01/2017
/// Usage   : node hsmKeysList.js [keyAlias]
///         : The values in the variables below are specific to a private instance of Chain
///           They need to be replaced if using in another environment.

const chain = require('chain-sdk')

const baseurl = 'http://172.16.101.93:1999'
const clienttoken = 'nodejsclient:6fdbf32d489770615c906087fbea3dbdc0a89bada87811cb4afcc5123464ccd9'

const client = new chain.Client(baseurl, clienttoken)

var argv = require('minimist')(process.argv.slice(2));

var keyAlias = argv._[0];

// The query can be performed with a filter

client.mockHsm.keys.queryAll({ aliases: [keyAlias] }, (key, next, done) => {
    console.log(key)
    next()
});

// Or Without filter

// client.mockHsm.keys.queryAll({}, (key, next, done) => {
//     console.log(key)
//     next()
// });
