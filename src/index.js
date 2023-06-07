import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { MainBody } from "./Components/Styled Components/Body.styled";
import { Main } from "./Components/Styled Components/styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainBody>
      <Header />
      <Body />
    </MainBody>
  </React.StrictMode>
);

reportWebVitals();
