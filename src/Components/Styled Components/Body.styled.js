import { styled } from "styled-components";

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HeroInput = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  width: 230px;
  height: 35px;
  outline: none;
  border: 1px solid #d5d4d8;
  padding-left: 10px;
  border-radius: 5px;
  font-family: "Karla", sans-serif;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 509px;
  height: 40px;
  background-color: #a818da;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const MemesImage = styled.img`
  width: 508px;
  height: 350px;
  object-fit: contain;
`;

export const FirstText = styled.h2`
  text-transform: uppercase;
  color: black;
  width: 8em;
  font-size: 2.5em;
  text-align: center;
  margin-top: -9.7em;
  font-family: Impact, sans-serif;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white;
    1px 1px 0 white;
`;

export const SecondText = styled.h2`
  text-transform: uppercase;
  color: black;
  width: 8em;
  margin-top: 5em;
  font-size: 2.9em;
  text-align: center;
  font-family: Impact, sans-serif;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white;
`;
