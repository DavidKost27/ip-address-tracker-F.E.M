import React from "react";
import "./styles.scss";

// Imported Hamburger Icon
import Hamburger from "hamburger-react";

export default function TopBar(props) {
  // Zoom Level Based on Screen-width
  let width = document.documentElement.clientWidth;
  let hamburgerSize;

  if (width > 2000) {
    hamburgerSize = 48;
  }
  return (
    <div className="top-bar-container">
      <Hamburger
        toggled={props.isOpen}
        toggle={props.setOpen}
        size={hamburgerSize}
      />
    </div>
  );
}
