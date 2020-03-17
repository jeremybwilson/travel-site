import React from 'react';

const Footer = (props) => {
  return(
    <footer className="site-footer">
      <div className="wrapper">
        <p><span className="site-footer__text">Copyright &copy; 2020 Clear View Escapes. All rights reserved.</span> <a href="#" className="btn btn--orange">Get in Touch</a></p>
      </div>
      {/* <!-- Leave this commented out HTML here until you need it for an upcoming "modal" lesson -->
      <div className="modal">
        <div className="modal__inner">
          <h2 className="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" className="section-title__icon"> Get in <strong>Touch</strong></h2>
          <div className="wrapper wrapper--narrow">
            <p className="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" className="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" className="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" className="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div className="modal__close">X</div>
      </div>
      <!-- This is the end of the "modal" reference HTML --> */}
    </footer>
  );
}

export default Footer;