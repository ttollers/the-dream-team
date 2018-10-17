const R = require('ramda');
const george = require('./george');
const george2 = require('./george2');
const bis = require('./bis');
const andy = require('./andy');
const malik = require('./malik');
const tt = require('./tt');
const almond = require('./almond');
const chree = require('./chree');
const dave = require('./dave');
const rupert = require('./rupert');
const jamie = require('./jamie');
const jimmy = require('./jimmy');
const pete = require('./pete');

const players = [
  almond,
  bis,
  andy,
  chree,
  dave,
  george,
  george2,
  jamie,
  jimmy,
  malik,
  pete,
  rupert,
  tt,
];

const playersToIncludeInSeedOrder = players.filter(x => x.confirmed).sort((a, b) => Number(a.seed) - Number(b.seed));

module.exports = R.sortBy(x => Number(x.seed), playersToIncludeInSeedOrder);