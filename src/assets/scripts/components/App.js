import React from 'react';
import { render } from 'react-dom';
import Header from "./Header";
import SiteBody from "./SiteBody";
import Footer from "./Footer";

class App extends React.Component {
  render(){
    console.log(`.:: DEBUG ::.  Inside the App component`);
    return(
      <React.Fragment>
        <Header />
        <SiteBody />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;