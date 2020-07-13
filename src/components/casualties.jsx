import React, { Component, Fragment } from "react";

class Casualties extends Component {
  //   constructor(props) {
  //     super(props);
  //     const data = [];

  //     for (let i = 0; i < 5; i++) {
  //       data.push({
  //         divData: <div className="casualties_data"></div>,
  //       });
  //     }
  //     this.state = { data };
  //   }
  render() {
    //   <div>
    //     {this.state.props.data.map((casualtiesData, index) => (
    //       <div key={index}>{casualtiesData.divData}</div>
    //     ))}
    //   </div>
    return (
      <Fragment>
        <div className="concernsTagline">
          Consult doctors for any health concerns
        </div>
        <div className="casualties_data">
          <img
            className="casualties_data_img"
            id="casualties_data_heart"
            alt=""
            src={require("./img/1a0fc726567fe21282676126358b795d-heart-disease.png")}
          />
          <text className="img_tagline">Cardio</text>
        </div>
        <div className="casualties_data">
          <img
            alt=""
            className="casualties_data_img"
            src={require("./img/lungs_xd3l3lnjcxkj9p-z898xnjdushx9.png")}
          />
          <text className="img_tagline col-8" id="respiratory">
            Respiratory
          </text>
        </div>
        <div className="casualties_data">
          <img
            alt=""
            className="casualties_data_img"
            src={require("./img/brains.png")}
          />
          <text className="img_tagline col-4" id="neuro">
            Neuro
          </text>
        </div>
        <div className="casualties_data">
          <img
            className="casualties_data_img"
            alt=""
            src={require("./img/bone-nxxi9x3o3jnfk2k3mi93fp3io30djnf93nd38-512.png")}
          />
          <text className="img_tagline col-4" id="ortho">
            Ortho
          </text>
        </div>
        <div className="casualties_data">
          <img
            className="casualties_data_img"
            alt=""
            src={require("./img/5491989-baby-giving-hug-silhouette-transparent-png-svg-vector-baby-silhouette-png-512_512_.png")}
          />
          <div className="img_tagline col-12" id="ChildHealth">
            Child health
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Casualties;
