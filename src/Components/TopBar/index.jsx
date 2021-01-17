import React from "react";
import "./styles.scss";

// Imported Hamburger Icon
import Hamburger from "hamburger-react";

export default function TopBar() {
  return (
    <div className="top-bar-container">
      <Hamburger />
    </div>
  );
}
