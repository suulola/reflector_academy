import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

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
            onClick={() => setOpenNav(true)}
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

      <div className="d-none d-md-flex justify-content-around w-100 mw-600">
       
        <Link to="/about">About Us</Link>
        <Link to="/programmes">Programmes</Link>
        <Link to="library">Resource Library</Link>
        <Link to="contact">Contact Us</Link>
        <Link to="/register" className="ml-5 mt-0 ">
          <Button text="Join Us" solid={true} />
        </Link>
      </div>
      {/* ABSOLUTE CONTAINER */}
      {openNav && (
        <div 
        onClick={() => setOpenNav(false)}
        className="nav_modal">
           <button 
           onClick={() => setOpenNav(false)}
           className="btn w-100 d-flex justify-content-end px-5 pt-5">
          <img width={20} src="/images/closer.svg" alt="close button"/>
        </button>
          <Link to="/">
            <h4 className="text-white weight-400 mb-4">Home</h4>
          </Link>
          <Link to="/about">
            <h4 className="text-white weight-400 mb-4">About</h4>
          </Link>
       
          <div className="mb-4">
            <h4 className="text-white weight-400 mb-0">Programmes</h4>
            <Link to="/programmes">Career Day</Link>
            <Link to="/programmes">Reflector Web Series</Link>
            <Link to="/programmes">Workshop Conference</Link>
          </div>

          <div className="mb-4">
            <h4 className="text-white weight-400 mb-0">Resource Library</h4>
            <Link to="/blog">Newsletter</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/moments">Picture Gallery</Link>
            <Link to="/ebook">Free Ebook</Link>
            <Link to="/video-resource">Video Library</Link>
          </div>

          <Link to="/contact">
            <h4 className="text-white weight-400 mb-4">Contact Us</h4>
          </Link>
          <Link to="/register">
            <h4 className="text-white weight-400 mb-4">Join Us</h4>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
