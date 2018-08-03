let db = require('./index');
let api = require('../secret/api');
let axios = require('axios')


seed = (url) =>{
    axios.get(url)
    .then(res=>{
        let mapURL = res.config.url
        db.any('INSERT INTO map(map_url) VALUES($1)', [mapURL])
    })
    .catch(err=>{
        console.log(err)
    })
}

getMap = async (req, res, next) =>{
    await db.any('SELECT * FROM map')
    .then((data)=>{
        res.status(200).json({
            status:'success',
            data:data,
            message:'map is loaded'
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:'failed',
            message:err
        })
    })
}

seed('https://image.maps.cit.api.here.com/mia/1.6/mapview?app_id=' + api.HereAppId + '&app_code=' + api.HereAppCode + '&c=40.7033962,-74.0449455&h=600&w=950')

module.exports = {
    seed,
    getMap
};