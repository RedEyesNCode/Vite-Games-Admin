import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
