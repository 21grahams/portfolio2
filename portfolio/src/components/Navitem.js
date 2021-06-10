import React from "react";
import { Link } from "react-router-dom";

function navItem(props) {

    return (
      <li id={props.item}>
        <Link
          to={props.tolink}
          onClick={props.activec.bind(props.item)}
        >
          {props.item}
        </Link>
      </li>
    );
}
export default navItem;
