import Alabaster from ".././Assets/imgs/alabaster.png";
import Dali from ".././Assets/imgs/cadaques.jpeg";
import React, { Component } from "react";
import "../App.css";

export default class Exhibitions extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row ms-4 ps-5">
          <h2 className="p-0">Exhibitions</h2>
          <br />

          <div className="col-md-11 card p-0 mb-5">
            <div className="col-md-4 p-0">
              <img src={Dali} width={400} height={200} className="p-0" />
            </div>
            <div className="col-md-3  ms-5 me-5 p-0 mt-5">
              <h4 className="mt-5">THE MILL</h4>
              <h4>CADAQUES LANDSCAPE</h4>
            </div>
            <div className="col-md-4 text-end  p-0 ">
              <p className="mb-5 me-4 mt-2 greytext">
                {" "}
                5 Mar 2022 - 2 Jun 2022
              </p>
              <button className="btn buynow mt-5 me-4 ms-md-5">DETAILS</button>
            </div>
          </div>

          <div className="col-md-11 card signincard p-0 mb-5">
            <div className="col-md-4 p-0">
              <img src={Dali} width={400} height={200} className="p-0" />
            </div>
            <div className="col-md-3  ms-5 me-5 p-0 mt-5">
              <h4 className="mt-5">THE MILL</h4>
              <h4>CADAQUES LANDSCAPE</h4>
            </div>
            <div className="col-md-4 text-end  p-0 ">
              <p className="mb-5 me-4 mt-2 "> 5 Mar 2022 - 2 Jun 2022</p>
              <button className="btn whiteborderbtn mt-5 me-4 ms-md-5">
                DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mb-5">
          <button className="btn buynow mt-5 me-4 ms-md-5">VIEW MORE</button>
        </div>
      </div>
    );
  }
}
