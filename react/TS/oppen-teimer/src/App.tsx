import './App.css'
import React, { FC } from "react";
import BackgroundImageComponent from "./components/background/BackgroundImageContainer.tsx";

const App : FC = () => {
  return (
    <BackgroundImageComponent>
      <h1>OPPEN TEIMER</h1>
    </BackgroundImageComponent>
  );
}

export default App
