# ip tool

## Description

* fetch computer ip address with node
* copy your ip address to clipboard
* open your server in browser


## Install

for node
```bash
$  npm install ip --save-dev
```

for command line
```bash
$  npm install ip -g
```


## Usage

### Get your ip

#### nodejs
```javascript
var ip = require('ip');
console.log(ip);
```

#### command line
```bash
$ ip
# this prints: xxx.xx.xxx.xxx
```

### Copy ip to clipboard

```bash
$ getip
# prints: copy done
# then you can use `ctrl + v`
```


### Open local server

```bash
# default port: 80
$ open

# or
$ open -p 8080

# or
$ open --port 8080 
```