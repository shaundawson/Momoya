import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Recommended from './Recommended';
import Footer from './Footer';
import Gallery from './Gallery';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
        <About />
        <Contact />
        <Recommended />
        <Gallery />
        <Menu />
        <Footer />
        
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />

      </div>
    </Router>
  );
}

export default App;
