import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Tonia from './assests/images/toniasaba.JPG'
import Footer from './components/footer.js'
import HomePage from './pages/home.js'
import ProjectPage from './pages/projects.js'
import Typist from 'react-typist';


// import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tonia Saba',
      headerLinks: [
        { title: 'home', path: '/'},
        { title: 'projects', path: '/projects'}
      ],
      home: {
        img: Tonia,
        title: 'Software Engineer',
        subTitle: 'Node JS, Express JS, React, AngularJS, jQuery, PHP, MongoDB, PostgreSQL',
        text: 'I believe that learning how to learn new software is the key to the future. As a self taught audio engineer and producer who is passionate about creating with technology, learning how to code was the next step to innovation. As a creative in software development nothing excites me more than coming together with a team of individuals to share our unique skill sets to work through code in order to reach our end product. '
      },
      projects : {
        title: 'projects'
      },
    }
  }

  render() {
    return (
      <Router>
          <Container className="p-0" fluid={true}>
            
            <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Typist className="TypistExample-message"
              cursor={{ hideWhenDone: true }}>
            <Typist.Delay ms={1000} />
              <span className="helloworld">print('Hello World')</span>
              </Typist>
              
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <a className="nav-link" href="https://docs.google.com/document/d/1yrCAZunRJWwRmdi-le2rSYupCvo4D5cnQbg2cJnQyFQ/export?format=pdf"> Download Resume</a>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact render={() => 
                <HomePage 
                    img={this.state.home.img} title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Route path="/projects" render={() => 
                <ProjectPage 
                    title={this.state.projects.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Footer />
            </Container>
        
        </Router>
      );
    }
  }
 

export default App;
