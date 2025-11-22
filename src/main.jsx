import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // ✅ import router
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./styles/responsive/core.css";
import "./styles/responsive/components.css";
import "./styles/responsive/pages.css";
import "./styles/responsive.css";

AOS.init({ duration: 1000, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ wrap app inside router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
