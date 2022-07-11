import React from "react";
import './functionBased/App.css';
import { createRoot } from "react-dom/client";
import TodoContainer from "./functionBased/components/TodoContainer";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
