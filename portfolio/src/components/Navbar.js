import React from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavItem item="Home" tolink="/"></NavItem>
        <NavItem item="About" tolink="/about"></NavItem>
        <NavItem item="Education" tolink="/education"></NavItem>
        <NavItem item="Skills" tolink="/skills"></NavItem>
        <NavItem item="Contact" tolink="/contact"></NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
