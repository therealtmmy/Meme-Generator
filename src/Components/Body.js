import React from "react";
import "./Body.css";
import Image from "./memeimg.png"
import memesData from "./memesData.js"

const Hero = () => {
const getMemeImage = () => {
const memesArray = memesData.data.memes
console.log(memesArray)
}

  return <div className="Hero-Head">
<div className="Hero-Input">
        <input type="text" />
        <input type="text" />
      </div>
      <button
      onClick={getMemeImage}
      >Get a new meme image</button>
      <img className="Meme-Image" src={Image} alt=""/>
  </div>;
};

export default Hero;
