import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchResults from "./pages/SearchResults/SearchResults";
import Content from "./pages/Content/Content";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  RouterProvider,
  Routes,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
