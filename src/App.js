import "./App.css";
import Nav from "././Components/Nav.js";
import Banner from "././Components/Banner.js";
import Museums from "././Components/Museums.js";
import Visit from "././Components/Visit.js";

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <Banner />
      <Museums />
      <Visit />
    </div>
  );
}

export default App;
