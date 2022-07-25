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
    }

    const changeFocusSeparation = (e) => {
      e.target.nextSibling.nextSibling.focus();
    }

    const selectText = (e) => {
      e.target.select();
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
    
    <div className="timer">
        <h2>Timer</h2>
        <input type="text" placeholder="time" ref={TimerSettup} onChange={changeTimer}></input>
        <div className="timer-container">
          <input type="text" placeholder="0" maxLength="1" className="timer-input" onChange={changeFocus} onClick={selectText}></input>
          <input type="text" placeholder="0" maxLength="1" className="timer-input" onChange={changeFocusSeparation} onClick={selectText}></input>
          <p>:</p>
          <input type="text" placeholder="0" maxLength="1" className="timer-input" onChange={changeFocus} onClick={selectText}></input>
          <input type="text" placeholder="0" maxLength="1" className="timer-input" onClick={selectText}></input>
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


