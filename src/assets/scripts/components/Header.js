import React from 'react';

const Header = (props) => {
  return(
    <React.Fragment>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
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
    </React.Fragment>
  );
}

export default Header;