import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import user from '../../Images/user.png';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [color, setColor] = useState();
  window.addEventListener('scroll', () => {
    setColor(window.pageYOffset);
  });

  let newClass = '';
  if (color > 50) {
    newClass = `${classes.black}`;
  } else if (color < 150) {
    newClass = '';
  }

  return (
    <nav className={`${classes.navbar} ${newClass}`}>
      <img src={logo} className={classes.logo} alt="logo"></img>
      <div>
        <NavLink
          to="/movies"
          className="links"
          activeClassName={classes.active}
        >
          Movies
        </NavLink>
        <NavLink to="/tv" className="links" activeClassName={classes.active}>
          Tv
        </NavLink>
        <NavLink
          to="/genere"
          className="links"
          activeClassName={classes.active}
        >
          Genere{' '}
        </NavLink>

        <img src={user} width="25" height="25" alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
