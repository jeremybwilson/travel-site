import React from 'react';

const Header = (props) => {
  return(
    <React.Fragment>
      <header className="site-header">
        <div className="wrapper">
            <div className="site-header__logo">
              <img src="./assets/images/icons/clear-view-escapes.svg" />
            </div>
      
            <div className="site-header__menu-icon"></div>
            
            <div className="site-header--menu-content">
              <div className="site-header__btn-container">
                <a href="#" className="btn">Get in Touch</a>
              </div>
              <nav className="primary-nav primary-nav--pull-right">
                <ul>
                  <li><a href="#our-beginning">Our Beginning</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </nav>
            </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;