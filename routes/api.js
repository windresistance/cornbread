// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Picture = require('../models/picture');

// Routes
Picture.methods(['get','put','post','delete']);
Picture.register(router, '/pictures');

// Return router
module.exports = router;