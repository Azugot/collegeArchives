import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchResults from "./pages/SearchResults/SearchResults";
import Content from "./pages/Content/Content";
import CustomNavBar from "./components/CustomNavBar/CustomNavBar";
import About from "./pages/About/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search/:input" element={<SearchResults />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
