import React from "react";
import { MainBody, HeroInput, Input, Button, MemesImage } from "./Styled Components/Body.styled.js";
import Image from "./memeimg.png"
import memesData from "./memesData.js"

let url
const Hero = () => {
const getMemeImage = () => {
const memesArray = memesData.data.memes
const randomNumber = Math.floor(Math.random() * memesArray.length)
url = memesArray[randomNumber].url
}

return (
  <>
  <MainBody>
        <HeroInput>
          <Input type="text" />
          <Input type="text" />
        </HeroInput>
        <Button
        onClick={getMemeImage}
        >Get a new meme image</Button>
        <MemesImage className="Meme-Image" src={Image} alt=""/>
    </MainBody>
  </>
  )
};

export default Hero;
