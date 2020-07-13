import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/css/home.css";
import "../src/components/css/appointment.css";
import "../src/components/css/userAuth.css";
import "../src/components/css/searchBanner.css";
import "../src/components/css/locationfetch.css";
import "../src/components/css/searchBar.css";
import "../src/components/css/casualties.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
