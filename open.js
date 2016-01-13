#!/usr/bin/env node
var shelljs = require('shelljs/global');
var open = require('opn');

var argv = require('yargs')
    .option('p', {
        alias: 'port',
        demand: false,
        default: '80',
        describe: 'port',
        type: 'string'
    })
    .argv;

var ip = require('./index');

open('http://' + ip + (!argv.port ? '' : ':' + argv.port));
