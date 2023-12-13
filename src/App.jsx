import { Routes, Route, Link } from "react-router-dom";
import Red from "./Components/Red.jsx";
import Blue from "./Components/Blue.jsx";
import Home from "./Components/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/red" element={<Red />} />
            <Route path="/blue" element={<Blue />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
