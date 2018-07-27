import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Routes from './components/MapRoute';
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>{" "}
            <Link to="/address">Route</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Brand>
          <Navbar.Text pullRight><Link to="/login">Login/Sign Up</Link></Navbar.Text>
        </Navbar.Brand>>
      </Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/address" component={Routes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
