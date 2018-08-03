import React, {Component} from 'react';
import './style/home.css';
import {Jumbotron, Button} from 'react-bootstrap';
import HomeCarousel from './Carousel';
import {connect} from 'react-redux';
import {getMap} from '../actions/mapActions'


class Home extends Component{
    componentDidMount(){
        this.props.getMap()
    }
    render(){
        let {map} = this.props
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
                        {map? 
                        <img src={map} alt="map" />
                        :
                        <h2>Loading...</h2>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state  => {
    return{
        map: state.map.mapURL
    }
};

export default connect(mapStateToProps, {getMap}) (Home);