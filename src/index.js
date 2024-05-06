import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Content from "./pages/Content/Content";
import SearchResults from "./pages/SearchResults/SearchResults";
import { Search } from "@mui/icons-material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <SearchResults searchQuery="Calculus" />
    <Content />
  </React.StrictMode>
);
