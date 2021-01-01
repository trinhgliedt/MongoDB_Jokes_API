const express = require("express");
const mongoose = require('mongoose');
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json());
// app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the jokes routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
