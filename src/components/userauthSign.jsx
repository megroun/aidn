import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Userauthsign extends Component {
  render() {
    return (
      <div className="signupPath">
        <Router>
          <Link className="signupPathtxt" to="home.jsx">
            Sign Up
          </Link>
        </Router>
      </div>
    );
  }
}

export default Userauthsign;
