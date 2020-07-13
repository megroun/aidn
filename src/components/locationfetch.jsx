import React, { Component, Fragment } from "react";
import Searchbar from "./searchBar";

class Locationfetch extends Component {
  handleLocation = () => {
    console.log("Location fetched", this);
  };
  render() {
    return (
      <Fragment>
        <div className="locationFetcher col-2" id="locfetcher">
          <input
            onClick={this.handleLocation}
            className="locationFetcherTxt"
            type="text"
            placeholder="Location...."
            // value=""
          ></input>
        </div>
        <Searchbar></Searchbar>
      </Fragment>
    );
  }
}

export default Locationfetch;
