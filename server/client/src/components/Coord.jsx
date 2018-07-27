import React from 'react';
import {Modal} from 'react-bootstrap';
import './style/coord.css'

const Coord = (props) =>{
    return(
        <div>
            <Modal.Dialog className="coord">
                <Modal.Header className="modal-body">
                <Modal.Title><h1>Map My Route</h1></Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                <div>
            <h3>Route</h3>
                <form onSubmit={props.submit}>
                    <input type="text" name="searchOrigin" onInput={props.input} placeholder="Origin"/>
                    <button name="origin">Submit</button>
                </form>
                <form onSubmit={props.submitDest}>
                        <input type="text" name="searchDestination" onInput={props.input} placeholder="Destination"/>
                        <button name="dest">Submit</button>
                </form>
                <h3>Origin</h3>
                <p name="Olatitude" onChange={props.change}>Latitude: {props.OLat}</p>
                <p name="Olongitude" onChange={props.change}>Longitude: {props.OLon}</p>
                <h3>Destination</h3>
                <p name="Dlatitude" onChange={props.change}>Latitude: {props.DLat}</p>
                <p name="Dlongitude" onChange={props.change}>Longitude: {props.DLon}</p>
            <div>
                <h3>Directions</h3>
                <button onClick={props.submitDir}>My Directions</button>
            </div>
        </div>
                </Modal.Body>
            </Modal.Dialog>
            <div className="directions">
                <h2 className="directions-heading">{props.duration}</h2>
                <ul className="directions">
                    <b>{props.directions.map(direction=><li key={direction.id}>{direction.instruction}</li>)}</b>
                </ul>
            </div>
            <div id="getMap"></div>
        </div>
    )
}
export default Coord;