var express = require('express');
var router = express.Router();
var apiKey = require('../secret/api');
var axios = require('axios');
var db = require('../db/queries');

let appId = apiKey.HereAppId;
let appCode = apiKey.HereAppCode;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map',db.getMap);

module.exports = router;
