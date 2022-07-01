import React from "react";
import { createRoot } from "react-dom/client";
import TodoContainer from "./components/TodoContainer";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
