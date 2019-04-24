/*
var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8080);
*/
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Http');
});

server.listen(8080);
