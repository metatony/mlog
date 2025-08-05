import React from "react";
import "../index.css";
import { searchIcon } from "../constants/icons";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top ">
      <div class="container-fluid my-1">
        <a class="navbar-brand" href="#">
          Mlog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-md-flex gap-md-4 fw-light">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div
            class="d-none d-md-flex align-items-center justify-content-center gap-3 fw-light"
            role="search"
          >
            <span>Search</span>
            <img width={17} height={17} src={searchIcon} alt="search icon" />
          </div>

          <form class="d-flex d-md-none" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
