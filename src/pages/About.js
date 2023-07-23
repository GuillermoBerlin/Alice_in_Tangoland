import React from "react";
import "./about.css";
import aboutImage from "../images/pic_about.jpg";

export default function About() {
  return (
    <div className="mainContainerAbout">
      <div className="textContainer">
        <h3>Alice in Tangoland</h3>
        <p>
          Circo Aereo is an international contemporary circus group from
          Finland.
        </p>
        <p>
          Circo Aereo is based in Finland and France but performs frequently
          around the world. Active since 1996, the group has toured festivals
          and theatres in over 40 countries.
        </p>
        <p>
          Circo Aereo is led and directed by three autistic directors: Maksim
          Komaro, Jani Nuutinen and Sanna Silvennoinen.
        </p>
      </div>

      <div className="imageAboutContainer">
        <img src={aboutImage} />
      </div>
    </div>
  );
}
