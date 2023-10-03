import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Import the main App component
import "./index.css"; // Import the CSS file for styling

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
