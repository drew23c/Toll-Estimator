import React, {Component} from 'react';
import axios from 'axios';
import api from '../secret/api';

class Address extends Component{
    constructor(){
        super()
        this.state={
            appId: api.HereAppId,
            appCode: api.HereAppCode,
            output:'',
            search:''
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
        //     this.setState({
        //         search: data
        // })
        console.log(res.data)
    })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        let {output, search} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={search} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <div>{output}</div>
            </div>
        )
    }
}
export default Address;