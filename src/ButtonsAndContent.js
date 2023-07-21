import { useState } from "react";
import { Link } from "react-router-dom";
import "./ButtonsAndContent.css";

function ButtonsAndContent() {
  const [isActive, setIsActive] = useState({});

  const handleToggle = (e) => {
    setIsActive(() => ({ [e.target.value]: !isActive[e.target.value] }));
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
            About
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
            Gallery
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
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonsAndContent;
