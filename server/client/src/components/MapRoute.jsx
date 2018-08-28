import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';
import './style/mapRoute.css';
import {Route, Switch} from 'react-router-dom';
import Coord from './Coord';

class Address extends Component{
    constructor(){
        super()
        this.state={
            appId: api.HereAppId,
            appCode: api.HereAppCode,
            appCoord: api.CoordApiKey,
            Olongitude:'',
            Olatitude:'',
            Dlongitude:'',
            Dlatitude:'',
            directions:[]
        }
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidUpdate(){
        
    }
    handleSubmit = (e) =>{
        e.preventDefault()

        axios.get('https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&searchtext=' + this.state.searchOrigin)
        .then((res)=>{
            this.setState({
                Olongitude: res.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
                Olatitude:res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
            })
        // console.log(res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleSubmitDest = (e) =>{
        e.preventDefault()

        axios.get('https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&searchtext=' + this.state.searchDestination)
        .then((res)=>{
            this.setState({
                Dlongitude: res.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
                Dlatitude:res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
            })
        // console.log(res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleDirections = (e) =>{
        let {Olatitude,Olongitude, Dlatitude, Dlongitude} = this.state
        e.preventDefault()
        axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + Olatitude + ',' + Olongitude + '&destination=' + Dlatitude + ',' + Dlongitude)
        .then(res=>{
            this.setState({
                directions: res.data.routes[0].legs[0].steps
            })
            // console.log(res.data.routes[0].legs[0].steps)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    renderCoord = () =>{
        let {Olatitude, Olongitude, Dlatitude, Dlongitude, directions} = this.state
        return(
            <Coord
                submit={this.handleSubmit}
                submitDest={this.handleSubmitDest}
                change={this.handleChange}
                input={this.handleInput}
                OLat={Olatitude}
                OLon={Olongitude}
                DLat={Dlatitude}
                DLon={Dlongitude}
                submitDir={this.handleDirections}
                directions={directions}
            />
        )
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/address" render={this.renderCoord} />
                </Switch>
            </div>
        )
    }
}
export default Address;