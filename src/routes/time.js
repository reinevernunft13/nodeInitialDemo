const express = require('express');
const router = express.Router();

//controllers and middlewares
const getTime = require('../controllers/time.js');
const cors = require('cors');
const noCache = require('../middlewares/noCache.js');

const userAuth = require('../middlewares/userAuth.js');

//endpoint to get time
router.post('/time',
    cors(),
    noCache,                         
    userAuth,
    getTime);

module.exports = router;