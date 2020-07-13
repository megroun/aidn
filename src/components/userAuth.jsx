import React, { Component, Fragment } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Userauthsign from "./userauthSign";

class Userauth extends Component {
  render() {
    return (
      <Fragment>
        {/* <div> */}
        <div className="loginPath">
          <Router>
            <Link className="loginPathtxt" to="home.jsx">
              Login
            </Link>
          </Router>
        </div>
        <div id="divide">/</div>
        <Userauthsign></Userauthsign>
        {/* </div> */}
      </Fragment>
    );
  }
}

export default Userauth;
