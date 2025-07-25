import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./main";

console.clear(); // Clear logs on each reload

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
