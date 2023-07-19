import React from "react";
import { MainBody, HeroInput, Input, Button, MemesImage, FirstText, SecondText } from "./Styled Components/Body.styled.js";

const Hero = () => {
const [meme, setMeme ] = React.useState(
  {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bhm.jpg"
  }
)

const [allMeme, setAllMeme] = React.useState([])

React.useEffect(() => {
  // fetch("https://api.imgflip.com/get_memes")
  // .then(res => res.json())
  // .then(data => setAllMeme(data.data.memes))

  async function getMeme() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMeme(data.data.memes)
  }
  
  getMeme()
}, [])
 
const getMemeImage = () => {
const randomNumber = Math.floor(Math.random() * allMeme.length)
const url = allMeme[randomNumber].url
setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
}))}

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
