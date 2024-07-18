import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NotificacionProvaider } from "./context/NotificacionesContext.jsx";
import { CssBaseline } from "@mui/material";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificacionProvaider>
      <CssBaseline>
        <App />
      </CssBaseline>
    </NotificacionProvaider>
  </React.StrictMode>
);
