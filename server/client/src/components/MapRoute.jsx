import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';

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
            suggest:[],
            directions:[],
            duration:''
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
        axios.post('https://route.cit.api.here.com/routing/7.2/calculateroute.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&waypoint0=geo!' + Olatitude + ',' + Olongitude + '&waypoint1=geo!' + Dlatitude + ',' + Dlongitude + '&mode=fastest;car;traffic:disabled')
        .then((res)=>{
            this.setState({
                directions: res.data.response.route[0].leg[0].maneuver,
                duration:res.data.response.route[0].summary.text,
            })
            console.log(res.data)
        })
    }
    render(){
        let {Olongitude, Olatitude, Dlongitude, Dlatitude, duration} = this.state;
        return(
            <div>
                <h1>Route</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchOrigin" onInput={this.handleInput}/>
                    <button name="origin">Submit</button>
                </form>
                <form onSubmit={this.handleSubmitDest}>
                        <input type="text" name="searchDestination" onInput={this.handleInput}/>
                        <button name="dest">Submit</button>
                </form>
                    <h2>Origin</h2>
                    <p name="Olatitude" onChange={this.handleChange}>Latitude: {Olatitude}</p>
                    <p name="Olongitude" onChange={this.handleChange}>Longitude: {Olongitude}</p>
                    <h2>Destination</h2>
                    <p name="Dlatitude" onChange={this.handleChange}>Latitude: {Dlatitude}</p>
                    <p name="Dlongitude" onChange={this.handleChange}>Longitude: {Dlongitude}</p>
                <div>
                </div>
                <h2>Directions</h2>
                    <button onClick={this.handleDirections}>My Directions</button>
                    <div>
                            <h2>{duration}</h2>
                        <ul>
                            <b>{this.state.directions.map(direction=><li key={direction.id}>{direction.instruction}</li>)}</b>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Address;