import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Scafold.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import florishMenu from "../images/florish.png";

function Scafold() {
  const [isActive, setIsActive] = useState({ about: true });

  const handleToggle = (e) => {
    if (e.target.value !== Object.keys(isActive)[0]) {
      setIsActive(() => ({ [e.target.value]: !isActive[e.target.value] }));
      console.log(isActive);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="main-container-menu">
      <div
        onClick={handleClick}
        className={click ? "buttons-container active" : "buttons-container"}
      >
        <Link to="/about">
          <button
            value="about"
            onClick={handleToggle}
            className={isActive["about"] ? "activeButton" : "Button"}
          >
            SHOW
          </button>
        </Link>
        <Link to="/staff">
          <button
            value="staff"
            onClick={handleToggle}
            className={isActive["staff"] ? "activeButton" : "Button"}
          >
            ELENCO
          </button>
        </Link>

        <Link to="/gallery">
          <button
            value="gallery"
            onClick={handleToggle}
            className={isActive["gallery"] ? "activeButton" : "Button"}
          >
            GALERÍA
          </button>
        </Link>
        <Link to="/contact">
          <button
            value="contact"
            onClick={handleToggle}
            className={isActive["contact"] ? "activeButton" : "Button"}
          >
            CONTACTO
          </button>
        </Link>

        <img src={florishMenu} alt="florish" className="florish-menu" />

        <div className="icon-cancel-container" onClick={handleClick}>
          <IoCloseSharp size={50} className="icon-cancel" />
        </div>
      </div>
      <div onClick={handleClick}>
        <FiMenu size={50} className="icon-menu" />
      </div>
    </div>
  );
}

export default Scafold;
