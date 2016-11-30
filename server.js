var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var headers = req.headers;
  var os = /\((.+)\)/g.exec(headers['user-agent'])[1];
  res.json({
    ipaddress: headers['x-forwarded-for'],
    language: headers['accept-language'].split(',')[0],
    software: os
  });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 8080!');
});
