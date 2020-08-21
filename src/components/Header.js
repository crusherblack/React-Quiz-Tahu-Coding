import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Tahu Coding React
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-link " to="/crud">
            Crud
          </Link>
          <Link className="nav-link " to="/about">
            About
          </Link>
          <Link className="nav-link " to="/quiz">
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
