'use strict';

//IMPORTS
require('dotenv').config();
const express = require('express');
const path = require('path');

//instantiate express
const app = express();

//set up environment
const PORT = 3000;
//const PORT = process.env.PORT;

//IMPORT ROUTES
const user_routes = require('./src/routes/user.js');

//ADDS MIDDLEWARE FUNCTIONS 
//parses JSON data in the request body. 
app.use(express.json());

//LEVEL 1 
app.use('/', user_routes);


//Starts server -- always last!
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});