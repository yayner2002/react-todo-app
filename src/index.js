import React from "react";
import ReactDOM from "react-dom/client";
import TodoContainer from './components/TodoContainer';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode> 
  <TodoContainer />
</React.StrictMode>
);
