import Alabaster from ".././Assets/imgs/alabaster.png";
import Dali from ".././Assets/imgs/dali.jpeg";
import React, { Component } from "react";
import "../App.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="container mt-2 mb-5">
        <div className="row justify-content-around">
          <div className="col-md-3 col-12 mt-2 align-items-center align-content-center align-self-center text-center text-md-start">
            <h2 className="mb-4">Visit</h2>

            <h6 className="mb-4">
              EVERYTHING YOU NEED TO KNOW BEFORE VISITING THE MUSEUM
            </h6>
            <p className="mb-5">
              Please visit this section before your visit to know opening hours,
              ticket prices, access information, Trequenty osked questions, etc.
            </p>
            <button className="btn buynow col-6 col-md-11 mb-md-5 mb-4">
              PLAN YOUR VISIT
            </button>
          </div>
          <div className="col-md-3 col-12 mt-5 align-items-center align-content-center align-self-center text-center text-md-start">
            <img src={Alabaster} width={270} height={400} />
          </div>
          <div className="col-md-3 col-12 mt-5 align-items-center align-content-center align-self-center text-center text-md-start">
            <img src={Dali} width={270} height={260} />
          </div>
        </div>
      </div>
    );
  }
}
