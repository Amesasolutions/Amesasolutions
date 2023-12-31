import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { FirebaseProvider } from "./Context/firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Router>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </Router>
  </React.StrictMode>
);
