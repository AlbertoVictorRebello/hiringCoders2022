var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo')

/* POST purchase creation */
router.post('/', function(req, res, next) {
  res.send(cielo.buy(req.body));
});


/* GET purchase creation */
router.get('/:buy_id/status', function(req, res, next) {
  res.send('getting status...');
});


module.exports = router;
