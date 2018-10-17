const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

/* GET users listing. */
router.get('/:player', auth, (req, res, next) => {
  res.render('player', req.player);
});

module.exports = router;
