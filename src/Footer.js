import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="Footer">
            <footer className="footer">
                <div className="content">
                    <div class="columns">
                        <div class="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Menu
                       </a>
                        </div>
                        <div class="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Contact
                       </a>
                        </div>
                        <div class="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Gallery
                       </a>
                        </div>
                        <div class="column">
                        <a className="navbar-item has-text-white" href="https://bulma.io/documentation/overview/start/">
                        Order Online
                       </a>
                        </div>
                        <div class="column has-text-white">
                        <div class="is-divider-vertical" data-content="OR"></div>
                        </div>
                        <div class="column has-text-white">
                            UPPER WEST<br></br>
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
