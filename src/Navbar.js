import React from 'react';


const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="">
                  <strong>Menu</strong>
                </a>
                <a className="button is-light" href="">
                Contact
                </a>
                <a className="button is-light" href="">
                Gallery
                </a>
                <a className="button is-light" href="">
                Order Online
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                   Locations
                  </a>
                  <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Chelsea
                    </a>
                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Upper Westside
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
