import Alabaster from ".././Assets/imgs/PAINTING.jpg";
import Dali from ".././Assets/imgs/dali.jpeg";
import SCULPTOR from ".././Assets/imgs/SCUPLTOR.jpg";
import React, { Component } from "react";
import "../App.css";

export default class Collection extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 ms-4 me-5 ps-5 ">
            <h2>The Collection</h2>
            <br />
            <p>
              The Collection by Salvador Dali is the catclog of works belonging
              to Dali's paintings and sculptures between 1910 and 1985
            </p>
            <br />

            <button className="btn buynow fs-6">EXPLORE THE COLLECTION</button>
          </div>
          <div className="col-md-3 me-5 mt-5 sideborder">
            <p>CATALOG OF PAINTINGS</p>
            <img src={Alabaster} width={250} height={300} className="  me-5" />
          </div>
          <div className="col-md-3 ms-5 mt-5 sideborder">
            <p>CATALOG OF SCULPTORS</p>

            <img className="  me-5" src={SCULPTOR} width={250} height={300} />
          </div>
        </div>
      </div>
    );
  }
}
