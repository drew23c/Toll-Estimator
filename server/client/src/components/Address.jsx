import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';

class Address extends Component{
    constructor(){
        super()
        this.state={
            appId: api.HereAppId,
            appCode: api.HereAppCode,
            longitude:'',
            latitude:'',
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
                longitude: res.data.Response.View[0].Result[0].Location.DisplayPosition.Longitude,
                latitude:res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude
            })
        console.log(res.data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
        })
        .catch(err=>{
            console.log(err)
        })

        axios.get('http://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json?app_id=' + api.HereAppId + '&app_code=' + api.HereAppCode + '&query=' + this.state.search + '&beginHighlight=<b>&endHighlight=</b>')
        .then((res)=>{
            this.setState({
                suggest: res.data.suggestions
            })
        console.log(res.data.suggestions[0].address)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        let {longitude, latitude} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <div>
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                </div>
                <div>
                    <h2>SUGGESTIONS</h2>
                    <ul>
                        {this.state.suggest.map(s=><li>
                            {s.address.houseNumber} {s.address.street}
                            {s.address.city} {s.address.state} {s.address.postalCode}
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Address;