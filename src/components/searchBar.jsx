import React, { Component } from "react";

class Searchbar extends Component {
  handleClick = () => {
    console.log("Searching", this);
  };
  render() {
    return (
      <div className="searchBar col-4">
        <input
          onClick={this.handleClick}
          className="searchBarTxt"
          type="text"
          placeholder="Search doctors, clinics, hospitals etc...."
          // value=""
        ></input>
      </div>
    );
  }
}

export default Searchbar;
