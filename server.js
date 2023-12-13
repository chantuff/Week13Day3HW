// require express
const express = require('express');

const app = express();

//set a variable of portto 3000
const port = 3000;

// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
app.listen(3000, function() {
    console.log('Listening on port 3000');
   });

   // include a get route / that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
   app.get('/', function(req, res) {
    res.send('Welcome to the Pokemon App');
})

