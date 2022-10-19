import React, { Component } from "react";
import Dali from ".././Assets/imgs/figures.jpg";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-md-5 mt-4">
          {/* <h2 className="mt-md-5 mt-2 mb-3 ms-5 ">Breaking news</h2> */}
        </div>
        <div className="row justify-content-around flex-wrap">
          <div className="col-md-3 p-0 m-0  col-12 mt-5 align-items-center align-content-center align-self-center text-center  ">
            <img src={Dali} width={"80%"} height={300} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              Pleasure, But Because Those Who Do not Know How To Pursue.
            </p>
          </div>
          <div className="col-md-3 p-0 m-0 align-items-center align-content-center align-self-center text-center col-12 mt-5  ">
            <img src={Dali} width={"80%"} height={300} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              But I Must Explain To You How All This mistaken Idea Denouncing.
            </p>
          </div>
          <div className="col-md-3 p-0 m-0 align-items-center align-content-center align-self-center text-center col-12 mt-5  ">
            <img src={Dali} width={"80%"} height={300} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              I Will Give You A Complete Account Of the System.
            </p>
          </div>
        </div>
        <div className="row center  align-items-center align-content-center align-self-center text-center justify-content-around">
          <button className="col-md-3 col-6 btn text-center buynow mt-5 mb-5">
            DISCOVER MORE
          </button>
          {/* <button className="col-md-2  btn buynow ">DISCOVER MORE</button> */}
        </div>
      </div>
    );
  }
}
