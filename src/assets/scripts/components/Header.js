import React from 'react';

const Header = (props) => {
  return(
    <header>
      <img src="./assets/images/icons/clear-view-escapes.svg" />
      <a href="#" className="btn">Get in Touch</a>
      <nav>
        <ul>
          <li><a href="#our-beginning">Our Beginning</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;