import React from "react";
import { useState, useEffect } from "react";
import "./container_styling.css";
export default function Stopwatch() {
  const [hour, sethour] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  const [stop, setStop] = useState(true);
  const [dis, setdis] = useState(true);
  const [isstart, setstart] = useState(true);
  const [ispause, setpause] = useState(false);
  const onStart = () => {
    setStop(false);
    setdis(false);
    setstart(false);
  };
  const onStop = () => {
    setStop(true);
    setpause(true);
  };
  const onReset = () => {
    sethour(0);
    setmin(0);
    setsec(0);
  };
  const onResume = () => {
    setStop(false);
    setpause(false);
  };
  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          sethour(hour + 1);
          setmin(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setmin(min + 1);
          setsec(0);
          clearInterval(interval);
        }
        if (sec <= 59) {
          setsec(sec + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="main">

    <div className="App">
        <div className="container">
      <p data-testid="time">
        {hour < 10 ? "0" + hour : hour} : {min < 10 ? "0" + min : min} :{" "}
        {sec < 10 ? "0" + sec : sec}
      </p>

      {isstart === false ? (
        ispause === true ? (
          <button data-testid="resume"onClick={onResume}>resume</button>
        ) : (
          <button data-testid="pause" onClick={onStop}>pause</button>
        )
      ) : (
        <button data-testid="start" onClick={onStart}>start</button>
      )}

      <button data-testid="reset" disabled={dis} onClick={onReset}>
        reset
      </button>
      </div>
    </div>
    
    </div>
  );
}