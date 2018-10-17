const R = require('ramda');
const basicAuth = require('basic-auth');
const players = require('../players');

module.exports = function (req, res, next) {
  function unauthorized(res, body) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401, body);
  }

  const user = basicAuth(req);
  const strPlayer = req.params.player.toLowerCase();

  if (!user || !user.name || user.name.toLowerCase() !== strPlayer) {
    return unauthorized(res, 'Wrong username - it\'s not fucking hard. Just type the name of the player.');
  }
  const player = R.find(x => user.name.toLowerCase() === x.fifaInspiration.player.toLowerCase(), players);
  if(!player) return unauthorized(res, 'Wrong username - it\'s not fucking hard. Just type the name of the player.');

  if (user.pass.toLowerCase() === player.name.toLowerCase()) {
    req.player = player;
    return next();
  } else {
    return unauthorized(res, 'Password incorrect. Contact a member of the spine for access.');
  }
};