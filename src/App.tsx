import React from "react";
import "./App.css";
import {Aside} from "./components/aside/Aside";
import {Main} from "./components/main/Main";

function App() {
  return (
    <div className="resume-container">
      <Aside/>
      <Main/>
    </div>
  );
}

export default App;
