var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map',db.getMap);

module.exports = router;
