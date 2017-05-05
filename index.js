/*jshint esversion: 6 */

// Require in modules
const express = require('express');
const app = express();


// Middleware
const bodyParser = require('body-parser');

// Global variables
const db = require('./models');
const PORT = process.env.PORT || 3000;

// When there is a body coming in, if json, parse the json and put it on the req
app.use(bodyParser.json());


//ROUTES

// Serve static files from /public
app.use(express.static('./public'));

// Route handler
app.use('/api', require('./api'));

// Clears db every time
//db.sequelize.sync({force:true});

// Initialize server
app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`);
});

