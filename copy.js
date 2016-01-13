#!/usr/bin/env node

var shelljs = require('shelljs/global');

exec('ip | clip', function () {
    console.log('copy done');
});