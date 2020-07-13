import React, { Component, Fragment } from "react";
import { Navbar } from "react-bootstrap";
// import Appointment from "./appointment";
import Userauth from "./userAuth";
import Searchbanner from "./searchBanner";
import Casualties from "./casualties.jsx";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar bg="" className="homeNavbar col-12">
            <Navbar.Brand href="#home" id="brandName">
              ALZRO
            </Navbar.Brand>
            {/* <Appointment></Appointment> */}
            <Userauth></Userauth>
          </Navbar>
          <Searchbanner></Searchbanner>
          <Casualties></Casualties>
        </div>
      </Fragment>
    );
  }
}

export default Home;
