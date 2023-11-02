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
          <Route exact path="/" component={<Homepage />} />
          <Route  exact path="/apropos" component={<About />} />
          <Route exact path="/membres" component={<Membres />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
