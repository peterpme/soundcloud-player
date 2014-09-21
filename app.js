var express = require('express');
var connect = require('connect');
var port = process.env.PORT || 4242;
var router = express.Router();
var app = express();

app.set('port', port);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/app'));

router.use(function (err, req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', function (req, res) {
  res.resnder ('pages/index');
});

app.use('/', router);

app.listen(port, function () {
  console.log('Express Running on: ' + port + ' NODE _ENV: ' + process.env.NODE_ENV);
});
