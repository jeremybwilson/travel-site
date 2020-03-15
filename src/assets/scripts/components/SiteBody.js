import React from 'react';
import { render } from 'react-dom';

class SiteBody extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="large-hero">
          <picture>
            <source srcSet="./assets/images/hero--large.jpg 1920w, ./assets/images/hero--large-hi-dpi.jpg 3840w"
              media="(min-width: 1380px)" />
            <source srcSet="./assets/images/hero--medium.jpg 1380w, ./assets/images/hero--medium-hi-dpi.jpg 2760w"
              media="(min-width: 990px)" />
            <source srcSet="./assets/images/hero--small.jpg 990w, ./assets/images/hero--small-hi-dpi.jpg 1980w"
              media="(min-width: 640px)" />
            <img srcSet="./assets/images/hero--smaller.jpg 640w, ./assets/images/hero--smaller-hi-dpi.jpg 1280w"
              alt="Coastal view of ocean and mountains" className="large-hero__image" />
          </picture>
          <div className="large-hero__text-content">
            <div className="wrapper">
              <h1 className="large-hero__title">Your clarity.</h1>
              <h2 className="large-hero__subtitle">One trip away.</h2>
              <p className="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>
              <p><a href="#" className="btn btn--orange btn--large">Get Started Today</a></p>
            </div>
          </div>
        </div>

        <div id="our-beginning" className="page-section">
          <div className=" wrapper">
            <h2 className="headline headline--centered headline--light headline--b-margin-small">The first trip we planned <span
                className="headline--strong">was our own</span>.</h2>
            <h3
              className="headline headline--centered headline--light headline--orange headline--small headline--narrow headline--b-margin-large">
              Ever since, we&rsquo;ve been working to make <span className="headline--strong">travel better for everyone</span>.
            </h3>
            <div className="wrapper wrapper--medium wrapper--b-margin">
              <img sizes="(min-width: 970px) 976px, 100vw"
                srcSet="./assets/images/first-trip-low-res-i.jpg 565w, ./assets/images/first-trip-i.jpg 976w, ./assets/images/first-trip-hi-dpi-i.jpg 1952w"
                alt="Couple walking down a street." />
            </div>

            <div className="row row--gutters">
              <div className="row__medium-4 row__medium-4--larger row__b-margin-until-medium">
                <picture>
                  <source sizes="404px"
                    srcSet="./assets/images/our-start-i.jpg 404w, ./assets/images/our-start-hi-dpi-i.jpg 808w"
                    media="(min-width: 1020px)" />
                  <source sizes="320px"
                    srcSet="./assets/images/our-start-portrait-i.jpg 382w, ./assets/images/our-start-portrait-hi-dpi-i.jpg 764w"
                    media="(min-width: 800px)" />
                  <img
                    srcSet="./assets/images/our-start-landscape.jpg 800w, ./assets/images/our-start-landscape-hi-dpi.jpg 1600w"
                    alt="Our founder, Jane Doe" />
                </picture>
              </div>
              <div className="row__medium-8 row__medium-8--smaller">
                <div className="generic-content-container">
                  <h2 className="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.</p>
                  <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum velit esse cillum <strong>dolore eu fugiat.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="page-section page-section--blue">
          <div className=" wrapper">
            <img src="./assets/images/icons/star.svg" />
            <h2>Our Features</h2>

            <img src="./assets/images/icons/rain.svg" />
            <h3>We&rsquo;ll Watch the Weather</h3>
            <p>Download our app and we&rsquo;ll send you a notice if it&rsquo;s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.</p>

            <img src="./assets/images/icons/globe.svg" />
            <h3>Global Guides</h3>
            <p>We&rsquo;ve scoured the entire planet for the best retreats and beautiful vistas. If there&rsquo;s a corner of the world you want to escape to we know the most scenic and inspiring locations.</p>

            <img src="./assets/images/icons/wifi.svg" />
            <h3>Wi-Fi Waypoints</h3>
            <p>We only send you on trips to places we can personally vouch for as being amazing. Which means we&rsquo;ve mapped out where local wi-fi spots are and marked them in our app&rsquo;s map view.</p>

            <img src="./assets/images/icons/fire.svg" />
            <h3>Survival Kit</h3>
            <p>Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes.</p>
          </div>
        </div>

        <div id="testimonials">
          <img src="./assets/images/icons/comment.svg" />
          <h2>Real Testimonials</h2>

          <img src="./assets/images/testimonial-jane.jpg" />
          <h3>Jane Doe</h3>
          <h3>9 Time Escaper</h3>
          <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.&rdquo;</p>

          <img src="./assets/images/testimonial-john.jpg" />
          <h3>John Smith</h3>
          <h3>4 Time Escaper</h3>
          <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur.&rdquo;</p>

          <img src="./assets/images/testimonial-cat.jpg" />
          <h3>Cat McKitty</h3>
          <h3>6 Time Escaper</h3>
          <p>&ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;</p>
        </div>
      </React.Fragment>
    );
  }
}

export default SiteBody;