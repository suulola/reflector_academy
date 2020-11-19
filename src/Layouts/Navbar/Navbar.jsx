import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: 80,
      }}
      className="d-flex  justify-content-between align-items-center mm-0 p-0 border"
    >
      <Link to="/" className="mr-5">
        <img src="/images/logo.svg" alt="reflector logo" />
      </Link>
      <div className="d-block d-md-none">
        <nav className="navbar navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      <div className="d-none d-md-flex justify-content-around w-100">
        <Link to="/about">About Us</Link>
        <Link to="/programmes">Programmes</Link>
        <Link to="library">Resource Library</Link>
        <Link to="contact">Contact Us</Link>
        <Link to="/register" className="ml-5 mt-0 ">
          <Button text="Join Us" solid={true} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
