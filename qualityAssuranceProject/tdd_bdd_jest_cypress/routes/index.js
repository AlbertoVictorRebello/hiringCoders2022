var express = require('express');
var router = express.Router();
const Client = require("../models/client")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alberto Rebello', clients: Client.all() });
});

module.exports = router;
