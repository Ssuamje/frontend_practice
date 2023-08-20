import './App.css'
import { FC } from "react";
import BackgroundImageComponent from "./components/background/BackgroundImageContainer.tsx";
import Timer from "./components/Timer.tsx";

const App : FC = () => {
  return (
    <BackgroundImageComponent>
      <h1 style={{ fontSize: '60px' }}>OPPENTEIMER</h1>
        <Timer />
        <button>Click Me!</button>
    </BackgroundImageComponent>
  );
}

export default App
