import Alabaster from ".././Assets/imgs/alabaster.png";
import Dali from ".././Assets/imgs/figures.jpg";
import React, { Component } from "react";
import "../App.css";

export default class Foundation extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-around">
          {/* <h2 className="ms-5 mb-5 mt-5">The Dali Foundation</h2> */}

          <div className="col-md-3  col-12 mt-5 align-items-center align-content-center align-self-center text-center ">
            <img src={Alabaster} width={270} height={400} />
          </div>
          <div className="col-md-3 text-md-start col-12 mt-5 align-items-center align-content-center align-self-center text-center ">
            <p>
              Please visit this section before your visit to know opening hours,
              ticket prices, access information, Trequenty osked questions, etc.
            </p>
            <button className="btn buynow ">DISCOVER MORE</button>
          </div>
          <div className="col-md-3    sideborder  col-12 mt-5 align-items-center align-content-center align-self-center text-center">
            <img src={Dali} width={250} height={350} />
            <p style={{ fontSize: 12, marginTop: 10, marginBottom: 0 }}>
              In this section, you can find all the information <br />
              about the centenary year of Salvador Dali's birth,
              <br /> a list of publications, and a list of the concerts
            </p>
          </div>
        </div>
      </div>
    );
  }
}
