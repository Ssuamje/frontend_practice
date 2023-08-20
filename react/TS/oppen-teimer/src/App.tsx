import './App.css'
import React, { FC } from "react";
import BackgroundImageComponent from "./components/background/BackgroundImageContainer.tsx";

const App : FC = () => {
  return (
    <BackgroundImageComponent>
      <h1 style={{ fontSize: '60px' }}>OPPENTEIMER</h1>
        <button>Click Me!</button>
    </BackgroundImageComponent>
  );
}

export default App
