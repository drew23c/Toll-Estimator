import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Routes from './components/MapRoute';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navigation">
          <Link to='/'>Home</Link>{" "}
          <Link to='/address'>Routes</Link>{" "}
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/address" component={Routes}/>
      </div>
    );
  }
}

export default App;
