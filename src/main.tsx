import ReactDOM from "react-dom/client";
import axios from "axios";
<script src="https://cdn.tailwindcss.com"></script>;
import { store, persistor } from "./utils/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import App from "./routes/App";

import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
