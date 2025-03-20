import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'nprogress/nprogress.css';
import App from "./App";
import "./core/config/i18n";
import "./mocks/server";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
