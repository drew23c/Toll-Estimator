import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import image from './images/background.jpg';
import image1 from './images/highways-1.jpg';
import image2 from './images/image2.jpeg';
import './style/carousel.css';

class HomeCarousel extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <Carousel className="carousel">
                <Carousel.Item>
                    <img width={900} height={300} alt="900x500" src={image} />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={image1} />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={image2} />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default HomeCarousel;