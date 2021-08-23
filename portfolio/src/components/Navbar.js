import React from "react";
import NavItem from "./NavLink";

function Navbar() {
  return (
    <nav>
      <ul>
        <hr/>
        <NavItem item="Home" tolink="/"></NavItem>
        <hr/>
        <NavItem item="About" tolink="/about"></NavItem>
        <hr/>
        <NavItem item="Projects" tolink="/projects"></NavItem>
        <hr/>
        <NavItem item="Skills" tolink="/skills"></NavItem>
        <hr/>
        <NavItem item="Contact" tolink="/contact"></NavItem>
        <hr/>
      </ul>
    </nav>
  );
}

export default Navbar;
