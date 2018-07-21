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
            suggest:[]
        }
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

        // axios.get('http://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json?app_id=' + api.HereAppId + '&app_code=' + api.HereAppCode + '&query=' + this.state.search + '&beginHighlight=<b>&endHighlight=</b>')
        // .then((res)=>{
        //     this.setState({
        //         suggest: res.data.suggestions
        //     })
        // console.log(res.data.suggestions[0].address)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
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
        axios.post('https://route.cit.api.here.com/routing/7.2/calculateroute.json?app_id=' + this.state.appId + '&app_code=' + this.state.appCode + '&waypoint0=geo!' + Olatitude + ',' + Olongitude + '&waypoint1=geo!' + Dlatitude + ',' + Dlongitude + '&mode=fastest;car;traffic:disabled',{
            Olatitude:Olatitude,
            Olongitude:Olongitude,
            Dlatitude:Dlatitude,
            Dlongitude:Dlongitude
        })
        .then((res)=>{
            this.setState({

            })
            console.log('click')
        })
    }
    render(){
        let {Olongitude, Olatitude, Dlongitude, Dlatitude} = this.state;
        return(
            <div>
                <h1>Route</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSubmitDest}>
                        <input type="text" name="search" onChange={this.handleChange}/>
                        <button>Submit</button>
                </form>
                    <h2>Origin</h2>
                    <p>Latitude: {Olatitude}</p>
                    <p>Longitude: {Olongitude}</p>
                    <h2>Destination</h2>
                    <p>Latitude: {Dlatitude}</p>
                    <p>Longitude: {Dlongitude}</p>

                <div>
                    {/* <h2>SUGGESTIONS</h2>
                    <ul>
                        {this.state.suggest.map(s=><li>
                            {s.address.houseNumber} {s.address.street}
                            {s.address.city} {s.address.state} {s.address.postalCode}
                        </li>)}
                    </ul> */}
                </div>
                <h2>Directions</h2>

                <button onClick={this.handleDirections}>My Directions</button>
            </div>
        )
    }
}
export default Address;