import React, { useState } from "react";
import NavItem from "./NavItem";

function Navbar() {
  const [NavItemActive, useNavItemActive] = useState("");
  const [NavItemId, useNavItemId] = useState("");

  function activeItem(x) {
    if (NavItemActive.length > 0) {
      document.getElementById(NavItemActive).classList.remove("active");
    }
  }

  // useNavItemId((NavItemId) => {
  //   document.getElementById(NavItemActive).classList.add("active");
  // })

  return (
    <nav>
      <ul>
        <NavItem item="Home" tolink="/" activec={activeItem}></NavItem>
        <NavItem item="About" tolink="/about" activec={activeItem}></NavItem>
        <NavItem item="Projects" tolink="/projects" activec={activeItem}></NavItem>
        <NavItem item="Skills" tolink="/skills" activec={activeItem}></NavItem>
        <NavItem item="Contact" tolink="/contact" activec={activeItem}></NavItem>
      </ul>
    </nav>
  );
}

export default Navbar;
