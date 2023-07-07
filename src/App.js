import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import "./App.css";
import Header from "./Header";
import ButtonsAndContent from "./ButtonsAndContent";

function App() {
  return (
    <Router className="mainDiv">
      <div className="cuadradoArriba">
        <Header />
      </div>
      <div className="cuadradoAbajo">
        <ButtonsAndContent />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
