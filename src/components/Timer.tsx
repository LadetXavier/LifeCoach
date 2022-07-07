import React, { useEffect, useState, useRef } from 'react'
import {useInterval} from './App/useInterval'

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}

const Timer = () => {

    let [currentTime,setCurrentTime] = useState(0);
    let [initialTimer,setInitialTimer] = useState(0)
    let [status,setStatus] = useState(STATUS.STOPPED);
    const TimerSettup = useRef(null);
    const changeTimer = (e) => {
        setInitialTimer(e.target.value)                
    }

    const startTimer = () => {        
       setCurrentTime(initialTimer);                 
       setStatus(STATUS.STARTED);           
    }

    const updateTimer = () => {
        if(currentTime>0) {
            setCurrentTime(currentTime-1);
        }
        else {
            setStatus(STATUS.STOPPED);
        }        
        console.log(currentTime);              
    }
    useInterval(updateTimer, status === STATUS.STARTED ? 1000 : null);


  return (
    
    <div>
        <h2>Timer</h2>
        <input type="text" placeholder="time" ref={TimerSettup} onChange={changeTimer}></input>
        <input type="button" value="Start" onClick={startTimer} />
        <p>{currentTime}</p>
    </div>
  )
}

export default Timer


