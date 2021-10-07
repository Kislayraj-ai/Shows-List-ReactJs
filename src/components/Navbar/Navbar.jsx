import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../Images/user.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-default navbar-dark  sticky-top">
      <div className="logo"></div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>

      <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
        <ul className="ml-md-auto w-25 navbar-nav  d-flex justify-content-between ">
          <li className="nav-item ">
            <NavLink
              to="/movies"
              className="links navLink"
              activeClassName="active"
            >
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/tv"
              className="links navLink"
              activeClassName="active"
            >
              Tv
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/genere"
              className="links navLink"
              activeClassName="active"
            >
              Genere
            </NavLink>
          </li>
          <li>
            <img src={user} width="20" height="20" alt="profile" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
