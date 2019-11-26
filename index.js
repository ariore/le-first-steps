const express = require("express");
const bodyParser = require('body-parser');
const server = express();
const shell = require('shelljs');
//const port = require('./port')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function (req, res) {
  res.send('we are the world, we are the people, it works!');
});

// routes will go here
server.get('/test', function(req, res) {
  var trigger = req.param('trigger');
  res.send(trigger);
});

server.post('/test', function (req, res) {
 var trigger = req.body.trigger;
  if(trigger == 1)
{
 shell.exec('./lescript.sh');
}
 res.send(req.body.trigger+"deberias funcar");
});

module.exports=server;
