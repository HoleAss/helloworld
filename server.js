var
    http = require('http'),
    url = require('url'),
    querystring = require('querystring'),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

function accept(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache'
    });
    res.end("OK");
}

http.createServer(accept).listen(port);
