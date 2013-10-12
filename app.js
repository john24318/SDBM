var connect = require('connect'),
    http = require('http'),
    directory = '../SDBM'

connect()
    .use(connect.static(directory))
    .listen(80);

console.log('Listening on port 80.');