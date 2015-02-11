var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.set('port', process.env.PORT || 8000);

app.use(express.static(path.join(__dirname, 'static')));

// Allows for HTML5 mode
app.all('/*', function(req, res, next) {
    res.sendfile('/static/index.html', { root: __dirname });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});