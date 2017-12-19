var
    express = require('express'),
    app = express();
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8080);
