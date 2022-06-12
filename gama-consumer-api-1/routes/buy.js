var express = require('express');
var router = express.Router();

/* POST purchase creation */
router.post('/', function(req, res, next) {
  res.send('buying...');
});


/* GET purchase creation */
router.get('/:buy_id/status', function(req, res, next) {
  res.send('getting status...');
});


module.exports = router;
