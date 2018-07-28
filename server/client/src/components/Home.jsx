import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';
import './style/home.css';
import {Jumbotron, Button} from 'react-bootstrap';
import HomeCarousel from './Carousel';

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
                <Jumbotron>
                    <h1>NYC Toll Estimator</h1>
                    <p>
                        Enter the origin and destination to calculate the amount you will need for the trip.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <div>
                    <div>
                        <HomeCarousel/>
                    </div>    
                    <div className="map">
                        {mapURL? 
                        <img src={mapURL} alt="map" />
                        :
                        <h2>Loading...</h2>}
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;