import Alabaster from ".././Assets/imgs/PAINTING.jpg";
import Dali from ".././Assets/imgs/dali.jpeg";
import SCULPTOR from ".././Assets/imgs/SCUPLTOR.jpg";
import React, { Component } from "react";
import "../App.css";

export default class Collection extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-around">
          <div className="col-md-4 col-12   text-center text-md-start">
            <h2 className="mb-4">The Collection</h2>
            <p className="mb-4">
              The Collection by Salvador Dali is the catclog of works belonging
              to Dali's paintings and sculptures between 1910 and 1985
            </p>

            <button className="btn buynow fs-6">EXPLORE THE COLLECTION</button>
          </div>
          <div className="col-md-3 col-12 mt-5 align-items-center align-content-center align-self-center text-center text-md-start sideborder">
            <p>CATALOG OF PAINTINGS</p>
            <img
              src={Alabaster}
              width={270}
              height={300}
              className="  me-md-5"
            />
          </div>
          <div className="col-md-3 col-12 mt-5 align-items-center align-content-center align-self-center text-center text-md-start sideborder">
            <p>CATALOG OF SCULPTORS</p>

            <img
              className="  me-md-5"
              src={SCULPTOR}
              width={260}
              height={300}
            />
          </div>
        </div>
      </div>
    );
  }
}
