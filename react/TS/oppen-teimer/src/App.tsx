import './App.css'
import {FC, useState} from "react";
import BackgroundImageComponent from "./components/background/BackgroundImageContainer.tsx";
import Timer from "./components/Timer.tsx";

const App : FC = () => {
    const [inputTime, setInputTime] = useState<Date>(new Date());
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [seconds, setSeconds] = useState<string>('');


    function setInputTimeHandler() {
        let newTime = new Date();
        newTime.setHours(Number(hours));
        newTime.setMinutes(Number(minutes));
        newTime.setSeconds(Number(seconds));
        setInputTime(newTime);
    }

  return (
    <BackgroundImageComponent>
      <h1 style={{ fontSize: '60px' }}>OPPENTEIMER</h1>
        <div>
            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="hours"
            style={{ position: 'absolute', top: '60%', left: '25%' }}/>
            <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="minutes"
            style={{ position: 'absolute', top: '60%', left: '45%' }}/>
            <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder="seconds"
            style={{ position: 'absolute', top: '60%', left: '65%' }}/>
        </div>
        <Timer time={inputTime}/>
        <button onClick={setInputTimeHandler} style={{ position: 'absolute', top: '65%'}}>Click Me!</button>
    </BackgroundImageComponent>
  );
}

export default App
