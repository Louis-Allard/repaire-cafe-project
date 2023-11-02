import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="page-footer">
      <div className="section">
        <Link className="membres" to="/membres" target="_blank">
          Membres
        </Link>
      </div>
      <div className="copyright-container">
        <Link
          to="/RepairCafe-Courchelettes"
          className="copyright"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p>&copy; 2023 Repair Café Courchelettes</p>
        </Link>
        <Link
          to="https://www.repaircafe.org/fr/"
          className="copyGeneral"
          target="_blank"
        >
          <p className="rpFrance">&copy; 2020 Repair Café France</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
