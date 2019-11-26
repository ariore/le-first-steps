const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const shell = require('shelljs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('we are the world, we are the people, it works!');
});

// routes will go here
app.get('/test', function(req, res) {
  var trigger = req.param('trigger');
  res.send(trigger);
});

app.post('/test', function (req, res) {
 var trigger = req.body.trigger;
  if(trigger == 1)
{
 shell.exec('./lescript.sh');
}
 res.send(req.body.trigger+"deberias funcar");
});

app.listen(3000, () => {
 console.log("Server is working on port 3000");
});

module.exports=app;
