import React from "react";
import { useState } from "react";
import "./staff.css";
import OnStage from "./subpages/OnStage";
import Backstage from "./subpages/Backstage";

function Staff() {
  const [isActive, setIsActive] = useState({ onStage: true });

  const handleToggle = (e) => {
    if (e.target.value !== Object.keys(isActive)[0]) {
      setIsActive(() => ({ [e.target.value]: !isActive[e.target.value] }));
      console.log(isActive);
    }
  };

  return (
    <div className="main-container-staff">
      <div className="button-container">
        <button
          value="onStage"
          onClick={handleToggle}
          className={isActive["onStage"] ? "activeButton" : "Button"}
        >
          En Escena
        </button>

        <button
          value="backstage"
          onClick={handleToggle}
          className={isActive["backstage"] ? "activeButton" : "Button"}
        >
          Detrás de Escena
        </button>
      </div>
      <div className="text-container">
        <div className={isActive["onStage"] ? "activeText" : "inactiveText"}>
          <OnStage />
        </div>
        <div className={isActive["backstage"] ? "activeText" : "inactiveText"}>
          <Backstage />
        </div>
      </div>
    </div>
  );
}

export default Staff;
