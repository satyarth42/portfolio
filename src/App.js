import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <div style={{"height":"100vh","width":"90vw","position":"absolute","top":"100px"}}>
              <Route exact path={"/"} component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/skills"} component={Skills} />
              <Route path={"/projects"} component={Projects} />
              <Route path={"/contact"} component={Contact} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
