import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="Footer">
            <footer className="footer">
                <div className="content">
                       <div className="columns">
                       <div className="column has-text-white">
                       <a className="navbar-item" href="">
                  <img src="https://i.imgur.com/sSzLPai.png" alt="Logo" />
                </a>
                        <b> CHELSEA </b><br></br>
                        185 7TH AVE NY, NY
                        10011| 212 989 4466
                        </div>
                        <div className="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Menu
                       </a>
                        </div>
                        <div className="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        <b>Contact </b>
                       </a>
                        </div>
                        <div className="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Gallery
                       </a>
                        </div>
                        <div className="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Order Online
                       </a>
                        </div>
                        <div className="column has-text-white">
                            <b>UPPER WEST </b><br></br>
                            427 AMSTERDAM AVE NY, NY
                            10024 | 212 580 0007
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
