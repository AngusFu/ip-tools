#!/usr/bin/env node
var os = require('os');
var ifaces = os.networkInterfaces();
var ip = {};

var EXTERNAL = '',
    ETHER = /192\.[\d\.]+/,
    PSEUDO = /127\.0\.0\.1/;


var dev, temp, i, len, details, address;

outer:
    for (dev in ifaces) {
        temp = ifaces[dev];
        len = temp.length;

        for (i = 0; i < len; i++) {

            details = ifaces[dev][i];

            if (details.family == 'IPv4') {
                address = details.address;

                // console.log(dev + (alias ? ':' + alias : ''), details.address);
            
                if (ETHER.test(address)) {
                    ip['ether'] = address;
                    break;
                } else if (PSEUDO.test(address)) {
                    ip['pseudo'] = address;
                    break;
                } else {
                    ip['external'] = address;
                    break outer;
                }
            }
        };
    }


var IPAddress = ip['external'] || ip['ether'] || ip['pseudo'];

console.log(IPAddress)

module.exports = IPAddress;
