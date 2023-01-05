import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Search from "./components/Search.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App p="tags=front_page" />} />
        <Route path="/new" element={<App p="tags=story" />} />
        <Route
          path="/past"
          element={
            <App p="tags=story&numericFilters=created_at_i<2006-10-09T18:21:51.000Z" />
          }
        />
        <Route path="/comments" element={<App p="tags=comment" />} />
        <Route path="/ask" element={<App p="tags=ask_hn" />} />
        <Route path="/show" element={<App p="tags=show_hn" />} />
        <Route path="/jobs" element={<App p="query=hiring&tags=story" />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
