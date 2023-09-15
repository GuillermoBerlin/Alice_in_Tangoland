import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Scafold.css";

function Scafold() {
  const [isActive, setIsActive] = useState({about: true});

  const handleToggle = (e) => {
    if (e.target.value !== Object.keys(isActive)[0]) {
      setIsActive(() => ({ [e.target.value]: !isActive[e.target.value] }));
      console.log(isActive)
    }
  };

  return (
    <div className="buttonsAndContent">
      <div className="container">
        <Link to="/about">
          <button
            value="about"
            onClick={handleToggle}
            className={isActive["about"] ? "activeButton" : "containerButtons"}
          >
            Show
          </button>
        </Link>
        <Link to="/gallery">
          <button
            value="gallery"
            onClick={handleToggle}
            className={
              isActive["gallery"] ? "activeButton" : "containerButtons"
            }
          >
            Galería
          </button>
        </Link>
        <Link to="/contact">
          <button
            value="contact"
            onClick={handleToggle}
            className={
              isActive["contact"] ? "activeButton" : "containerButtons"
            }
          >
            Contacto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Scafold;
