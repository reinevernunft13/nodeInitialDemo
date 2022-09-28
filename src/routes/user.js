'use strict';

//http://localhost:3000/user

const express = require('express');
//create object router
const router = express.Router();

const getUser = require('../controllers/user.js');

//endpoint to get user info
router.get('/user', getUser);

module.exports = router;