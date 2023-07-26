import { useState } from 'react'
import './App.css'
import Break from './Break'
import Session from './Session'
import Timer from './Timer'

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [seconds, setSeconds] = useState(sessionTime * 60);
  const [intervalId, setIntervalId] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <h1>Pomodoro Timer</h1>
      <Break 
        breakTime={breakTime}
        setBreakTime={setBreakTime}
      />
      <Session 
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
      />
      <Timer 
        seconds={seconds}
        setSeconds={setSeconds}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        playing={playing}
        setPlaying={setPlaying}
      />
    </>
  )
}

export default App
