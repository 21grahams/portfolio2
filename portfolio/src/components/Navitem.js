import React, { useState } from "react";
import { Link } from "react-router-dom";

function navItem(props) {
  console.log('navItem props: ', props)
    return (
      <li id={props.item}>
        <Link
          to={props.tolink}
          onClick={props.activec.bind(props.item)}
        >
          {this.props.item}
        </Link>
      </li>
    );
}
export default navItem;
