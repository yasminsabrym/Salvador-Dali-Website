import React, { Component } from "react";
import w1 from ".././Assets/imgs/work1.jpg";
import w2 from ".././Assets/imgs/work2.jpg";
import w3 from ".././Assets/imgs/work3.jpg";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-around flex-wrap ms-md-0">
          <h2 className="text-md-start text-center mt-2 mb-3 ms-md-5">
            Breaking news
          </h2>
          <div className="col-md-3 p-0 m-0  col-12 mt-5 align-items-center align-content-center align-self-center text-center  ">
            <img src={w1} width={264} height={264} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              Pleasure, But Because Those Who Do not Know How To Pursue.
            </p>
          </div>
          <div className="col-md-3 p-0 m-0 align-items-center align-content-center align-self-center text-center col-12 mt-5  ">
            <img src={w2} width={264} height={264} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              But I Must Explain To You How All This mistaken Idea Denouncing.
            </p>
          </div>
          <div className="col-md-3 p-0 m-0 align-items-center align-content-center align-self-center text-center col-12 mt-5  ">
            <img src={w3} width={264} height={264} />
            <p className="redtext mb-0 mt-2">10 December 2021</p>
            <h6 className="mt-md-2 mt-3 ">THIS IS THE TITLE</h6>
            <p className="mt-md-3 mt-3">
              I Will Give You A Complete Account Of the System.
            </p>
          </div>
        </div>
        <div className="row center  align-items-center align-content-center align-self-center text-center justify-content-around">
          <button className="col-md-2 col-6 btn text-center buynow mt-5 mb-5">
            DISCOVER MORE
          </button>
        </div>
      </div>
    );
  }
}
