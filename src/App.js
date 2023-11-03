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
          <Route path="/" Component={Homepage} /> {/* element changé par component */}
          <Route  path="apropos" Component={About} />
          <Route path="membres" Component={Membres} />
        </Routes>
    a </Router>
    </div>
  );
}

export default App;
