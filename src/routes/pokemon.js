const express = require('express');
const router = express.Router();

const getPokemon = require('../controllers/pokemon.js');

//endpoint to get pokemon
router.get('/pokemon/:id', getPokemon);

module.exports = router;