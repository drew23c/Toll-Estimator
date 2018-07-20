import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';

class Home extends Component{
    constructor(){
        super()
        this.state={
            appId: api.HereAppId,
            appCode: api.HereAppCode,
            mapURL:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3100/map')
        .then(res=>{
            this.setState({
                mapURL: res.data.data[0].map_url
            })
            // console.log(res.data.data[0].map_url)
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