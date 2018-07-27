import React from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import './style/coord.css'

const Coord = (props) =>{
    return(
        <div>
            <Modal.Dialog className="coord">
                <Modal.Header className="modal-body">
                <Modal.Title>Map My Route</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                <div>
            <h1>Route</h1>
                <form onSubmit={props.submit}>
                    <input type="text" name="searchOrigin" onInput={props.input}/>
                    <button name="origin">Submit</button>
                </form>
                <form onSubmit={props.submitDest}>
                        <input type="text" name="searchDestination" onInput={props.input}/>
                        <button name="dest">Submit</button>
                </form>
                <h2>Origin</h2>
                <p name="Olatitude" onChange={props.change}>Latitude: {props.OLat}</p>
                <p name="Olongitude" onChange={props.change}>Longitude: {props.OLon}</p>
                <h2>Destination</h2>
                <p name="Dlatitude" onChange={props.change}>Latitude: {props.DLat}</p>
                <p name="Dlongitude" onChange={props.change}>Longitude: {props.DLon}</p>
            <div>
                <h2>Directions</h2>
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
        </div>
    )
}
export default Coord;