// Membres.jsx
import React from "react";
import Navigation from "../components/Navigations";
import Footer from "../components/Footer";
import "../scss/membres.scss";

const Membres = () => {
  return (
    <div className="container-membres">
      <Navigation />
      <div className="content">
        <h2>Notre Équipe</h2>
        <ul className="membres-list">
          <li>
            <span className="spam">Patrick COEUGNET-</span> Président <br />
            patrick.coeugnet@wanadoo.fr <br /> Tél : 06.79.98.30.43
          </li>
          <li>
            <span className="spam"> Michel BENEZIT-</span> Secrétaire <br />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Membres;
