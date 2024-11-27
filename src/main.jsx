import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { AppRouter } from "./router/AppRouter";
import MovieStackApp from "./MovieStackApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieStackApp />
    </BrowserRouter>
  </React.StrictMode>
);
