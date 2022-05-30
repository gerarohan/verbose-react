import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, Container} from 'react-bootstrap';
// import About from './About';
import '../style/Navbar.css';

function Navigation() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <Router>
            <Navbar bg="dark" variant='dark' expand="lg" sticky='top'>
              <Navbar.Brand href="#home">test for navigation</Navbar.Brand>
            </Navbar>
          </Router>
        </div>
      </div>
    </div>
  
    
      
  );
}

export default Navigation;