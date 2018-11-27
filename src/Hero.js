import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <div className="Hero">
      <section className="hero is-large has-bg-img">
        <div className="hero-head">
          <nav className="navbar ">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="">
                  <img src="https://i.imgur.com/sSzLPai.png" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item has-text-white" href="">
                  Menu
                  </a>
                  <a className="navbar-item has-text-white" href="">
                  Contact
                  </a>
                  <a className="navbar-item has-text-white" href="">
                  Gallery
                  </a>
                  <a className="navbar-item has-text-white" href="">
                  Order Online
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white">
            MOMOYA CHELSEA
            </p>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth has">
            <div className="container">
              <ul>
                <li className="is-active"><a>SCROLL DOWN</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Hero;
