// require express
const express = require("express");

const app = express();

const Index = require("./views/Index.jsx");
const port = 3000;

// include a get route / that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
// app.get("/", function (req, res) {
//   res.send("Welcome to the Pokemon App");
// });

// Set up your 'database' so that it can be exported to your server.js and then be required by your server.js
const pokemon = require("./models/pokemon.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

//routes
app.get("/", (req, res) => {
  // Render the view with Pokemon data
  res.render("Index", { pokemonList: pokemon });
});

// Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemonList: pokemon });
});

// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
app.listen(port, function () {
  console.log("Listening on port 3000");
});
