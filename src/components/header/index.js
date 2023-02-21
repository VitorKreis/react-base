import React from "react";
import { FaHome, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav } from "./styled";

export default function Headers() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={19} />
      </Link>
      <Link to="login">
        <FaUser size={19} />
      </Link>
      <Link to="asd">
        <FaSignInAlt size={19} />
      </Link>
    </Nav>
  );
}
