import React from "react";
import { useState, useRef, useCallback } from "react";

import "./ResponseCheck.css";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      timeout.current = window.setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      console.log(timeout.current);
      console.log(endTime.current);
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
    } else if (state === "ready") {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setState("waiting");
      setMessage("초록색이 되면 클릭하세요");
    } else if (state === "now") {
      endTime.current = new Date().getTime();
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevent) => {
        return [...prevent, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  //{result.reduce((a, c) => a + c) / result.length}

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
