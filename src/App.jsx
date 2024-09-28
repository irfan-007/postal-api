import React, { useState } from "react";
import "./App.css";
import GetPin from "./components/GetPin";
import ShowPost from "./components/ShowPost";

function App() {
  const [clicked, setClicked] = useState(false);
  const [pin, setPin] = useState("");
  return (
    <div>
      {clicked ? (
        <ShowPost pin={pin} />
      ) : (
        <GetPin setClicked={setClicked} pin={pin} setPin={setPin} />
      )}
    </div>
  );
}

export default App;
