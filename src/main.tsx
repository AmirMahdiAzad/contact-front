import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Contacts from "./components/contact/contacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Contacts />
      <App />
      <ToastContainer position="top-right"   autoClose={3000} />
    </Router>
  </React.StrictMode>,
);
