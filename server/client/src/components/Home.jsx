import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';
import './style/home.css';

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
            <div className="home">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Toll Estimator</h1>
                        <p className="lead">Enter your route and get an estimate the cost of tolls.</p>
                    </div>
                </div>
                {mapURL? 
                <img src={mapURL} alt="map" />
                :
                <h2>Loading...</h2>}
            </div>
        )
    }
}
export default Home;