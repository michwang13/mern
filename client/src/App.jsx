import React, { useState } from "react";
import axios from "axios";

function App() {
  const [test, setTest] = useState("");
  function handleClick() {
    axios.get("/server/test").then((res) => {
      setTest(res.data);
    });
  }
  return (
    <div>
      <h1> Hello There {test} </h1>
      <button onClick={handleClick}> Click here </button>
    </div>
  );
}

export default App;
