import React from "react";
import { MainBody, HeroInput, Input, Button, MemesImage, FirstText, SecondText } from "./Styled Components/Body.styled.js";
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
}))}



// console.log(formData)

const handleChange = (event) => {
  const {name, value} = event.target
  setMeme(prevMeme => ({
    ...prevMeme,
    [name]: value
}))
}


return (
  <>
  <MainBody>
        <HeroInput>
          <Input type="text" 
          onChange={handleChange}
          name="topText"
          placeholder="Top text"
          value={meme.topText}
          />
          <Input type="text" 
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom text"
          />
        
        </HeroInput>
        <Button
        onClick={getMemeImage}
        >Get a new meme image</Button>
        <MemesImage src={meme.randomImage} alt=""/>
        <FirstText>{meme.topText}</FirstText>
        <SecondText>{meme.bottomText}</SecondText>
    </MainBody>
  </>
  )
};

export default Hero;
