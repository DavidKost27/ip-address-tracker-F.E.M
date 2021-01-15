import React from "react";
import "./App.jsx";
import "./App.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SearchField from "./Components/SearchField";
import InfoContainer from "./Components/InfoContainer";
import axios from "axios";

function App() {
  const position = [51.505, -0.09];

  const apiRequest = () => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_NOT_SECRET_CODE}=8.8.8.8`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="App">
      <div className="top-container">
        <h2> IP Address Tracker</h2>
        <SearchField />
        <InfoContainer />
      </div>

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <button onClick={() => apiRequest()}>GGGGGGGG</button>
    </div>
  );
}

export default App;

{
  /* <div class="attribution">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
Coded by <a href="#">Your Name Here</a>.
</div> */
}
