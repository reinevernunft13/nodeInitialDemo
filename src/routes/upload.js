const express = require('express');
const router = express.Router();

//require controller
const uploadImage = require('../controllers/upload.js')

//endpoint to upload file
router.post('/upload', uploadImage);

module.exports = router;