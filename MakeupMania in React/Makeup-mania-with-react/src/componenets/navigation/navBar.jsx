import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
