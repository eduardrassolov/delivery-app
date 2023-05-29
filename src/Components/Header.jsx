import React from "react";
import "../styles/styles.css";

export default function Header({ children }) {
  return (
    <>
      <h1 className="header">{children}</h1>
    </>
  );
}
