import React from "react";
import "./styles.scss";

export default function Menu(props) {
  return (
    <div className={`menu-container ${props.isOpen ? "open" : "closed"} `}>
      <div className="menu-container__menu">
        <p>This project is a challenge from the: </p>
        <a className="first-a" href="https://www.frontendmentor.io/solutions">
          {" "}
          "Front End Mentor"
        </a>
        <hr />
        <p>The API used for the IP tracking is: </p>
        <a className="second-a" href="https://www.ipify.org/">
          {" "}
          "Ipify"
        </a>
        <hr />
        <p>The API used for the map is:</p>{" "}
        <a href="https://leafletjs.com/"> "Leafletjs"</a>
      </div>
    </div>
  );
}
