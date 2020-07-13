import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Appointment extends Component {
  render() {
    return (
      <div className="btnWrapper">
        <Button variant="outline-dark" className="appointmentBtn">
          Book an appointment
        </Button>
      </div>
    );
  }
}

export default Appointment;
