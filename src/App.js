import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Recommended from './Recommended';
import Footer from './Footer';

const App = ()  => {
  return (
    <div className="App">
    <Hero/>
    <About/>
    <Contact/>
    <Recommended/>
    <Footer/>
    </div>
 );
};

export default App;
