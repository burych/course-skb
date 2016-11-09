var express = require('express');
var app = express();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res) {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n ' + sum.toString());
});

app.listen(3000);
  console.log(`Server running at http://${hostname}:${port}/`);
