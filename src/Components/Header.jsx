import React from "react";
import Image from "./troll-face-nathan-butcher.png"
import { Main, ImageContainer, ParaGraph } from "./Styled Components/styled.js"

const Header = () => {
  return (
    <>
    <Main>
      <ImageContainer src={Image} alt=""/>
      <ParaGraph>Meme Generator</ParaGraph>
    </Main>
    </>
  )
};

export default Header;
