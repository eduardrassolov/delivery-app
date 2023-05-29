import React, { useMemo } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

//get object of style for navbar
//TODO refactor component
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
}
