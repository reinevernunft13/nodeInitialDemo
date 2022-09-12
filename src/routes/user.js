'use strict';

//http://localhost:3000/user

const express = require('express');
const getUser = require('../controllers/user.js');

//create object router
const router = express.Router();

//ENDPOINT TO GET USER
router.get('/user', getUser);

module.exports = router;