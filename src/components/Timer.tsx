import React, { useEffect, useState, useRef } from 'react'
import {useInterval} from './App/useInterval'

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const Timer = () => {

    let [currentTime,setCurrentTime] = useState(0);
    let [initialTimer,setInitialTimer] = useState(0)
    let [minute1,setMinute1] = useState<number>(0);
    let [minute2,setMinute2] = useState<number>(0);
    let [second1,setSecond1] = useState<number>(0);
    let [second2,setSecond2] = useState<number>(0);
    let [status,setStatus] = useState(STATUS.STOPPED);
    const TimerSettup = useRef(null);
    const displayToSecond = () => {

      let secondTotal = (minute1*10+minute2)*60+(second1*10+second2);
      console.log(minute1*10+minute2);
      return secondTotal;              
    }

    const startTimer = () => {        
       setCurrentTime(displayToSecond);                 
       setStatus(STATUS.STARTED);           
    }   

    const pauseTimer = () => {

      if(status=== STATUS.STARTED) {
         setStatus(STATUS.STOPPED);
      }
      else {
        setStatus(STATUS.STARTED);
      }
       
    }

    const changeFocus = (e) => {      
     e.target.nextSibling.focus();
     e.target.nextSibling.select();
    }

    const changeFocusSeparation = (e) => {
      e.target.nextSibling.nextSibling.focus();
       e.target.nextSibling.nextSibling.select();
    }

    const selectText = (e) => {
      e.target.select();
    }

    const updateTimer = () => {
        if(currentTime>0) {
            setCurrentTime(currentTime-1);
            let time = currentTime-1;
            setMinute1(Math.floor(time/600));            
            time = time % 600;
            setMinute2(Math.floor(time/60));
            time = time % 60;
            setSecond1(Math.floor(time/10));            
            setSecond2(time%10)
        }
        else {
            setStatus(STATUS.STOPPED);
        }  
    }
    useInterval(updateTimer, status === STATUS.STARTED ? 1000 : null);


  return (
    
    <div className="timer">
        <h2>Timer</h2>        
        <div className="timer-container">
          <input type="number" value={minute1} placeholder="0" min="0" max="6" className="timer-input" onChange={e => {changeFocus(e);setMinute1(parseInt(e.target.value))}} onClick={selectText} id="Minute1"></input>
          <input type="number" value={minute2} placeholder="0" min="0" max="9" className="timer-input" onChange={e => {changeFocusSeparation(e);setMinute2(parseInt(e.target.value))}} onClick={selectText} id="Minute2"></input>
          <p>:</p>
          <input type="number" value={second1} placeholder="0" min="0" max="6" className="timer-input" onChange={e => {changeFocus(e);setSecond1(parseInt(e.target.value))}} onClick={selectText} id="Second1"></input>
          <input type="number" value={second2} placeholder="0" min="0" max="9" className="timer-input" onChange={(e) => setSecond2(parseInt(e.target.value))}onClick={selectText} id="Second2"></input>
        </div>       
        <div className="timer-button">
          <input type="button" value="Start" onClick={startTimer} />
          <input type="button" value={status===STATUS.STARTED ? "Pause" : "Restart"} onClick={pauseTimer} />
        </div>
        <p>{currentTime}</p>
    </div>
  )
}

export default Timer


