const express = require('express');
const router = express.Router();
const players = require('../players');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { players });
});

module.exports = router;
