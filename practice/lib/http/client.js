/**
 * Created by jiangshan on 14/8/5.
 */
var http = require('http');

var options = {
    hostname: 'localhost',
    port: 8124,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();