import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <div className="columns">
        <div className="column is-half">
          <h1 className="title">About Momoya </h1>
          <hr />
          <p>
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="column">
          <figure className="image is-square">
            <img src="https://i.imgur.com/3b3ZoPI.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;

