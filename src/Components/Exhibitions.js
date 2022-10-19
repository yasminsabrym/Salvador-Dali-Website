import Alabaster from ".././Assets/imgs/alabaster.png";
import Dali from ".././Assets/imgs/cadaques.jpeg";
import React, { Component } from "react";
import "../App.css";

export default class Exhibitions extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <h2 className="  text-start">Exhibitions</h2>
        <div className="cardd">
          <div className="row d-flex flex-row    ">
            <div className="  col-12  col-md-4  pe-0">
              <img
                src={Dali}
                width={"97%"}
                height={"200px"}
                // style={{ borderRadius: "10px" }}
                className=" "
              />
            </div>
            <div className="   col-10 ms-4 ms-md-0 text-center col-md-3 text-md-start pe-0  p-0  mt-md-5">
              <div className="  mt-3">
                <h3 className="mt-md-5  p-0">THE MILL CADAQUES LANDSCAPE</h3>
              </div>
            </div>
            <div className="   col-10 ms-4 ms-md-0 col-md-5 text-center text-md-end p-0 ">
              <div className=" me-md-5">
                <p className="mb-5 mt-md-3  greytext p-0">
                  5 Mar 2022 - 2 Jun 2022
                </p>
              </div>

              <div className="me-md-4 mt-md-5 mb-3">
                {/* <div className=" col-md-12    col-9 mt-md-3"> */}
                <button className="btn buynow mt-md-5">DETAILS</button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="cardd">
          <div className="row d-flex flex-row    ">
            <div className="  col-12  col-md-4  pe-0">
              <img
                src={Dali}
                width={"97%"}
                height={"200px"}
                // style={{ borderRadius: "10px" }}
                className=" "
              />
            </div>
            <div className="   col-10 ms-4 ms-md-0 text-center col-md-3 text-md-start pe-0  p-0  mt-md-5">
              <div className="  mt-3">
                <h3 className="mt-md-5  p-0">THE MILL CADAQUES LANDSCAPE</h3>
              </div>
            </div>
            <div className="   col-10 ms-4 ms-md-0 col-md-5 text-center text-md-end p-0 ">
              <div className=" me-md-5">
                <p className="mb-5 mt-md-3  greytext p-0">
                  5 Mar 2022 - 2 Jun 2022
                </p>
              </div>

              <div className="me-md-4 mt-md-5 mb-3">
                {/* <div className=" col-md-12    col-9 mt-md-3"> */}
                <button className="btn buynow mt-md-5">DETAILS</button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-row    align-items-center align-content-center align-self-center text-center justify-content-around">
          <button className="col-md-3 col-6 btn text-center buynow mt-5 mb-5">
            VIEW MORE
          </button>
        </div>
      </div>
    );
  }
}
