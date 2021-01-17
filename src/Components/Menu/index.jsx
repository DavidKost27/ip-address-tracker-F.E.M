import React from "react";
import "./styles.scss";

export default function Menu(props) {
  return (
    <div className={`menu-container ${props.isOpen ? "open" : "closed"} `}>
      <div className="menu-container__menu">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contribution</a>
      </div>
    </div>
  );
}
