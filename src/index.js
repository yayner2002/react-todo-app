import React from "react";
import "./functionBased/App.css";
import { createRoot } from "react-dom/client";
import TodoContainer from "./functionBased/components/TodoContainer";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
