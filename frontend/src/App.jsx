import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateEntry from "./pages/CreateEntry";
import SingleEntry from "./pages/SingleEntry";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-[80%] mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-entry" element={<CreateEntry />} />
          <Route path="/entry/:id" element={<SingleEntry />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
