import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollTop'

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop className="scrollAnime">
    <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("app")
);
