import React from "react";
import "../index.css";
import { searchIcon } from "../constants/icons";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-top fs-4">
        <div className="container-fluid my-1">
          <a className="navbar-brand " href="/">
            MetaBlog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-md-flex gap-md-4 fw-light">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div
              className="d-none d-md-flex align-items-center justify-content-center gap-3 fw-light"
              role="search"
            >
              <span>Search</span>
              <img width={17} height={17} src={searchIcon} alt="search icon" />
            </div>

            <form className="d-flex d-md-none" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
