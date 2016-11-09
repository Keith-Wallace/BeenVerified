var express = require('express');
var app = express();

// SET UP WEB SERVER
<<<<<<< HEAD
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
=======
app.use('/js/vendors', express.static(__dirname + '/node_modules/bootstrap/dist/js/')); // redirect bootstrap JS
app.use('/js/vendors', express.static(__dirname + '/node_modules/jquery/')); // redirect JS jQuery
app.use('/css/vendors', express.static(__dirname + '/node_modules/bootstrap/dist/css/')); // redirect CSS bootstrap
>>>>>>> 880691ccdc5be09eda6eb2493c50f8ff899e81ac

app.use('/css', express.static(__dirname + '/client/styles/'));

app.use(express.static(__dirname + '/client/'));
app.get('/*', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD


var port = process.env.PORT || 4000;
=======
// LISTEN FOR ANY REQUESTS TO OUR SERVER
var port = process.env.PORT || 8000;
>>>>>>> 880691ccdc5be09eda6eb2493c50f8ff899e81ac

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
<<<<<<< HEAD
});
=======
});




// var request = require('request');
// var bodyParser = require('body-parser');
// var express = require('express');
// var app = express();

// // SET STATIC FILE LOCATION & PARSING
// app.use(express.static(__dirname + '/client')); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


// // LOAD OUR SINGLE PAGE APPLICATION
// app.use('/*', function (req, res){
//   res.sendFile(path.resolve('client/index.html'));
// })

// // LISTEN FOR ANY REQUESTS TO OUR SERVER
// var port = process.env.PORT || 8000;

// app.listen(port, function(error){
//   if(error) throw error;
//   console.log('Express server listening on port', port);
// });
>>>>>>> 880691ccdc5be09eda6eb2493c50f8ff899e81ac
