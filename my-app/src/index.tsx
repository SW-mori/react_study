import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { CounterApp } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById("root")
);
