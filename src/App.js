import "./App.css";
import Nav from "././Components/Nav.js";
import Banner from "././Components/Banner.js";
import Museums from "././Components/Museums.js";
import Visit from "././Components/Visit.js";
import Exhibitions from "././Components/Exhibitions.js";
import Collection from "././Components/Collection.js";
import VisitMuseum from "././Components/VisitMuseum.js";
import Foundation from "././Components/Foundation.js";
import News from "././Components/News.js";
import Footer from "././Components/Footer.js";

function App() {
  return (
    // <div className="container-fluid">
    <>
      <Nav />
      <Banner />
      <Museums />
      <Visit />
      <Exhibitions />
      <Collection />
      <VisitMuseum />
      <Foundation />
      <News />
      <Footer />
    </>

    // </div>
  );
}

export default App;
