import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Recommended from './Recommended';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
        <About />
        <Contact />
        <Recommended />
        <Footer />
        
        <Route path="/menu" component={Contact} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Contact} />

      </div>
    </Router>
  );
}

export default App;
