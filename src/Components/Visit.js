import Banners from ".././Assets/imgs/banner.jpeg";
import React, { Component } from "react";
import "../App.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{ paddingTop: "3.6%", paddingBottom: "3.6%" }}></div>
        <img src={Banners} style={{ width: "60%" }} />
      </div>
    );
  }
}
