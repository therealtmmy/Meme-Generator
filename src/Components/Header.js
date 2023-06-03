import React from "react";
import "./Header.css";
import Image from "./troll-face-nathan-butcher.png"


const Header = () => {
  return <div className="Header">
    <img className="Head-Img" src={Image} alt=""/>
      <p>Meme Generator</p>
  </div>;
};

export default Header;
