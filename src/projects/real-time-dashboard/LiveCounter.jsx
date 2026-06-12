import { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";
import FakeWebSocket from "./FakeWebSocket";

const LiveCounter = () => {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    // setRunning(true);

    return () => clearInterval(interval);
  }, [running]);

  const resetCounter = () => {
    setCounter(0);
  };
  const pauseCounter = () => {
    setRunning(false);
  };
  const continueCounter = () => {
    setRunning(true);
  };

  return (
    <>
      <div className="px-20 py-8">
        <FakeWebSocket />
      </div>
      <hr />

      {/* <ControlPanel
        pauseCounter={pauseCounter}
        continueCounter={continueCounter}
        resetCounter={resetCounter}
        counter={counter}
      /> */}
    </>
  );
};

export default LiveCounter;
