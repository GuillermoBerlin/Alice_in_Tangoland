import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";
import Header from "./components/Header";
import Scafold from "./components/Scafold";
import florish from "./images/florish.png";

function App() {
  return (
    <Router className="mainDiv">
      <div className="topContent">
        <Header />
      </div>
      <div className="bottomContent">
        <img src={florish} alt="florish" className="florish"/>
        <Scafold />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
