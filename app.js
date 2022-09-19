'use strict';
//IMPORTS
require('dotenv').config();
const express = require('express');
const path = require('path');

//instantiate express
const app = express();

//Set up server environment
const PORT = 3000;
//const PORT = process.env.PORT;
//const PORT = process.env.PORT || 3000;

//IMPORT ROUTES
const user_routes = require('./src/routes/user.js');
const upload_routes = require('./src/routes/upload.js');
const time_routes = require('./src/routes/time.js');
const poke_routes = require('./src/routes/pokemon.js');

//ADDS MIDDLEWARE FUNCTIONS 
app.use(express.static(path.join(__dirname, './my_uploads')));
//global middleware => parses JSON data in the request body. 
app.use(express.json());

//LEVEL 1 
app.use('/', user_routes);
app.use('/', upload_routes);

//LEVEL 2
app.use('/', time_routes);

//LEVEL 3
app.use('/', poke_routes);

//error
app.use((req, res, next) => {
    res.status(404).send('ERROR 404 - Route Not Found'); 
  });
//START SERVER -- always last!
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
