import React, { useState } from "react";
import Navitem from "./Navitem";

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
        <Navitem item="Home" tolink="/" activec={activeItem}></Navitem>
        <Navitem item="About" tolink="/about" activec={activeItem}></Navitem>
        <Navitem
          item="Education"
          tolink="/education"
          activec={activeItem}
        ></Navitem>
        <Navitem item="Skills" tolink="/skills" activec={activeItem}></Navitem>
        <Navitem
          item="Contact"
          tolink="/contact"
          activec={activeItem}
        ></Navitem>
      </ul>
    </nav>
  );
}

export default Navbar;
