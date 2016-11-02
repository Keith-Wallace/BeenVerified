var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client/'));
app.get('/*', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});