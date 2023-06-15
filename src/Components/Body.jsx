import React from "react";
import { MainBody, HeroInput, Input, Button, MemesImage } from "./Styled Components/Body.styled.js";
import memesData from "./memesData.js"

const Hero = () => {
const [meme, setMeme ]= React.useState(
  {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bhm.jpg"
  }
)
 
const [allMemeImages, setAllMemeImages] = React.useState(memesData)
const getMemeImage = () => {
const memesArray = allMemeImages.data.memes
const randomNumber = Math.floor(Math.random() * memesArray.length)
const url = memesArray[randomNumber].url
setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
}))


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
        <MemesImage src={meme.randomImage} alt=""/>
    </MainBody>
  </>
  )}
};

export default Hero;
