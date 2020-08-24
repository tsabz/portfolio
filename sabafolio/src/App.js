import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>

      <div className="App">

          <Route exact path= '/' component={Projects} />
          <Route exact path= '/articles' component={Articles} />
          <Route exact path= '/about' component={About} />

          <div className="navigation">
              <div className="navigation-sub">
                  <Link to="/" className="item">Projects</Link>
                  <Link to="/articles" className="item">Articles</Link>
                  <Link to="/about" className="item">About</Link>
              </div>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
