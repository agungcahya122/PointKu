import ReactDOM from "react-dom/client";
import React, { Provider } from "react";
import axios from "axios";
<script src="https://cdn.tailwindcss.com"></script>;

import App from "./routes/App";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
