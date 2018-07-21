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
            directions:''
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

        axios.get('https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&searchtext=' + this.state.search)
        .then((res)=>{
            this.setState({
                Olongitude: res.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
                Olatitude:res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
            })
        console.log(res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleSubmitDest = (e) =>{
        e.preventDefault()

        axios.get('https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&searchtext=' + this.state.search)
        .then((res)=>{
            this.setState({
                Dlongitude: res.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
                Dlatitude:res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
            })
        console.log(res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
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
                
            })
            console.log(res.data)
        })
    }
    render(){
        let {Olongitude, Olatitude, Dlongitude, Dlatitude, directions} = this.state;
        return(
            <div>
                <h1>Route</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" onInput={this.handleInput}/>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSubmitDest}>
                        <input type="text" name="search" onInput={this.handleInput}/>
                        <button>Submit</button>
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
                        {directions}
                    </div>
                </div>
        )
    }
}
export default Address;