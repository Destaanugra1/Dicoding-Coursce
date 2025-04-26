import React, { useEffect } from "react";
import Stopwatch from "./components/Stopwatch";

import "./styles/style.css";

function App() {
  useEffect(() => {
    console.log("efek dijalankan");
    const intervalId = setInterval(() => {
      setTimeInMillis((prevValue) => prevValue + 100);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <React.StrictMode>
        <Stopwatch />
      </React.StrictMode>
      <Stopwatch color="yellow" />
    </>
  );
}

export default App;
