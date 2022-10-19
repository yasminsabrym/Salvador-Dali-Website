import logo from ".././Assets/icons/logo.svg";
import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class Foot extends Component {
  render() {
    return (
      <div className="container-fluid center text-center p-0">
        <div className="bgdark mt-5 pt-5 pb-5 ">
          <img
            src={logo}
            style={{ height: 50, width: 120, alignSelf: "center" }}
          />
          <div className="container">
            <hr className="whitecol mt-5" />
            <div className="row">
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Museums</b> <br />
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Dali Theatre-Museum</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali-Jewels</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Gala Dali Castle Pubol</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Salvador Dali House</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali by Night</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> The Dalinian Triangle</a>{" "}
                </div>
              </div>
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Museums</b> <br />{" "}
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Dali Theatre-Museum</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali-Jewels</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Gala Dali Castle Pubol</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Salvador Dali House</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali by Night</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> The Dalinian Triangle</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> FAQ</a>{" "}
                </div>
              </div>
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Exhibitions</b> <br />{" "}
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Current Exhibitions</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Coming soon</a>{" "}
                </div>
                <div className="pt-1 pb-2">
                  <a href="#"> Post</a>{" "}
                </div>
                <div className="pt-3 pb-3">
                  <b>The Collection</b> <br />{" "}
                </div>
                <div className="pt-4 pb-1">
                  <b>Virtual Visit</b> <br />{" "}
                </div>
              </div>
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Museums</b> <br />
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Dali Theatre-Museum</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali-Jewels</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Gala Dali Castle Pubol</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Salvador Dali House</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali by Night</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> The Dalinian Triangle</a>{" "}
                </div>
              </div>
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Museums</b> <br />{" "}
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Dali Theatre-Museum</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali-Jewels</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Gala Dali Castle Pubol</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Salvador Dali House</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Dali by Night</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> The Dalinian Triangle</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> FAQ</a>{" "}
                </div>
              </div>
              <div className="col-sm-2 text-md-start whitecol">
                <div>
                  <b>Exhibitions</b> <br />{" "}
                </div>
                <div className="pt-3 pb-1">
                  <a href="#"> Current Exhibitions</a>{" "}
                </div>
                <div className="pt-1 pb-1">
                  <a href="#"> Coming soon</a>{" "}
                </div>
                <div className="pt-1 pb-2">
                  <a href="#"> Post</a>{" "}
                </div>
                <div className="pt-3 pb-3">
                  <b>The Collection</b> <br />{" "}
                </div>
                <div className="pt-4 pb-1">
                  <b>Virtual Visit</b> <br />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    );
  }
}
