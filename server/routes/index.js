var express = require('express');
var router = express.Router();
var apiKey = require('../secret/api');
var axios = require('axios');

let appId = apiKey.HereAppId;
let appCode = apiKey.HereAppCode;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/address/convert/coordinates', (req, res) =>{
  let search = req.body.search;

})

router.post('/route', (req, res)=>{

  let hereArrive = req.body.hereArrive;
  let hereDepart = req.body.hereDepart;

  axios.post('https://route.cit.api.here.com/routing/7.2/calculateroute.json?app_id=' + appId + '&app_code=' + appCode + '&waypoint0=geo!' + hereDepart + '&waypoint1=geo!' + hereArrive + '&mode=fastest;car;traffic:disabled')
  .then(() =>{
      res.status(200).json({
        status: 'success',
        message: 'routed'
      })
      let route = res.response;
      console.log(route)
      console.log('https://route.cit.api.here.com/routing/7.2/calculateroute.json?app_id=' + appId + '&app_code=' + appCode + '&waypoint0=geo!' + hereDepart + '&waypoint1=geo!' + hereArrive + '&mode=fastest;car;traffic:disabled')
  })
  .catch(err =>{
    console.log(err)
  })
})

module.exports = router;
