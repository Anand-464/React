import { useEffect, useState } from "react";

function Stopwatch() {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Stopwatch stopped!");
    };

  }, []);

  return (
    <div>
      <h1>Stopwatch: {seconds} seconds</h1>
    </div>
  );
}

export default Stopwatch;