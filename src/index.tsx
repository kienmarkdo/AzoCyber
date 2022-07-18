import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n"; // useTranslation - react i18next hook
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
