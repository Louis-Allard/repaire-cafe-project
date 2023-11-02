import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/apropos";
import Membres from "./pages/membres";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/RepairCafe-Courchelettes" element={<Homepage />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/membres" element={<Membres />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
