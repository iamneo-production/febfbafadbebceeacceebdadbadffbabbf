import React, { useState, useRef } from "react";
import "./container_styling.css";

const Stopwatch =() =>{
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [isDisabled, setIsDisabled] = useState(true)
    const increment = useRef(null)
    let getSeconds,minutes , getMinutes , getHours;
    const handleIncrement = () =>{
        setIsActive(true);
        setIsPaused(false);
        setIsDisabled(false);

        //let t;
        increment.current = setInterval( () =>{
            setTime((time)=>time+1)},1000);
    }  
    const handleReset = () =>{
        setIsActive(false)
        setIsPaused(true)
        setIsDisabled(true);
        clearInterval(increment.current);
        setTime(0);
        
        
    }
    const handlePause = () =>{
        setIsPaused(true);
       
        clearInterval(increment.current);
    }
    const handleResume = () =>{
        setIsPaused(false);
        //let t;
        increment.current = setInterval( () =>{
            setTime((time)=>time+1)},1000);
    }
    
        
         getSeconds = `0${(time % 60)}`.slice(-2)
         minutes = `${Math.floor(time / 60)}`
         getMinutes = `0${minutes % 60}`.slice(-2)
         getHours = `0${Math.floor(time / 3600)}`.slice(-2)
      
        
    
   return(
    <div className="cont">
            <div className="container">
                <h4> React Stopwatch</h4>
                <h4>{getHours}:{getMinutes}:{getSeconds}</h4>
                {
                    (!isActive && isPaused)?
                    <button  onClick= {handleIncrement} data-testid="start"> START</button> :
                    (
                        !isPaused ?<button  onClick={handlePause} data-testid="pause"> PAUSE</button>:
                        <button  onClick={handleResume} data-testid="resume"> RESUME</button>

                    )
                   
                }
                 <button  onClick={handleReset} disabled = {isDisabled} data-testid="reset"> RESET</button>
            </div>
        </div>
   ) 
}

export default Stopwatch;


                
                
                