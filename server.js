var express = require('express');
var app = express();

// SET UP WEB SERVER
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/css', express.static(__dirname + '/client/styles/'));

app.use(express.static(__dirname + '/client/'));
app.get('/*', function (req, res){
  res.sendFile(__dirname + '/index.html');
});



var port = process.env.PORT || 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
});