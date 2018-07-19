import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';

class Home extends Component{
    constructor(){
        super()
        this.state={
            appId: api.HereAppId,
            appCode: api.HereAppCode,
            mapURL:''
        }
    }
    componentDidMount(){
        axios.get('https://image.maps.cit.api.here.com/mia/1.6/mapview?app_id=' + api.HereAppId + '&app_code=' + api.HereAppCode + '&c=40.7033962,-74.0449455&h=800&w=800')
        .then(res=>{
            this.setState({
                mapURL: res.config.url
            })
            console.log(res.config.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        let {mapURL} = this.state
        return(
            <div>
                <h1>Toll Estimator</h1>
                <img src={mapURL} alt="map" />
            </div>
        )
    }
}
export default Home;