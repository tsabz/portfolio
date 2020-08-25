import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tonia Saba',
      headerLinks: [
        { title: 'home', path: '/'},
        { title: 'projects', path: '/projects'},
        { title: 'resume', path: '/resume'}
      ],
      home: {
        title: 'Blah',
        subTitle: 'blah blah',
        text: 'blah blah blah'
      },
      projects : {
        title: 'projects'
      },
      resume: {
        title: 'resume'
      }
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true}>
            
            <Navbar className="border-bottom">
              <Navbar.Brand>Tonia Saba</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav>
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
            </Container>
        
        </Router>
      );
    }
  }
 

export default App;
