import Alabaster from ".././Assets/imgs/alabaster.png";
import Dali from ".././Assets/imgs/dali.jpeg";
import React, { Component } from "react";
import "../App.css";

export default class Exhibitions extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 ms-5 me-5 ps-5 ">
            <h2>Visit</h2>
            <br />
            <h6>EVERYTHING YOU NEED TO KNOW BEFORE VISITING THE MUSEUM</h6>
            <br />
            <p>
              Please visit this section before your visit to know opening hours,
              ticket prices, access information, Trequenty osked questions, etc.
            </p>
            <button className="btn buynow ms-md-5">Buy Tickets</button>
          </div>
          <div className="col-md-3 ms-5 me-5">
            <img src={Alabaster} width={300} height={400} />
          </div>
          <div className="col-md-3 ms-5">
            <img src={Dali} width={260} height={260} />
          </div>
        </div>
      </div>
    );
  }
}
