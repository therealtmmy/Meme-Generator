import React from "react";
import "./Body.css";
import Image from "./memeimg.png"

const Hero = () => {
  return <div className="Hero-Head">
      <div className="Hero-Input">
        <input type="text" />
        <input type="text" />
      </div>
      <button>Get a new meme image</button>
      <img className="Meme-Image" src={Image} />
  </div>;
};

export default Hero;
