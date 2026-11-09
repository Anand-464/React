import { useState } from "react";
import About from "./About";

function App() {

  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Show / Hide Stopwatch
      </button>

      {show && <About />}
    </div>
  );
}

export default App;