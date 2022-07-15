import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  const handleTogggle = () => {
    setnavbarOpen((prevState) => !prevState);
  };
  return (
    <nav className="navBar">
      <button onClick={handleTogggle}>{navbarOpen ? "close" : "open"}</button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link">
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
