import React, { Component } from "react";
import Locationfetch from "./locationfetch";
// import Searchbar from "./searchBar";

class Searchbanner extends Component {
  render() {
    return (
      <div className="searchBannerbg col-12">
        <img
          alt=""
          src={require("./img/new_darker.png")}
          className="ecgBanner"
        />
        <div className="bannerTxt">
          Book your appointment anytime, anywhere.
        </div>
        <Locationfetch></Locationfetch>
        {/* <Searchbar></Searchbar>; */}
      </div>
    );
  }
}

export default Searchbanner;
