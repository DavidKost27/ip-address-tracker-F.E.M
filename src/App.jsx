import { useState } from "react";
import "./App.jsx";
import "./App.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import SearchField from "./Components/SearchField";
import InfoContainer from "./Components/InfoContainer";
import axios from "axios";
require("dotenv").config();

function App() {
  const [apiUserInputRequest, setApiUserInputRequest] = useState(null);

  const [OutputData, setOutputData] = useState({
    ip: "0.0.0.0",
    isp: "None",
    country: "UK",
    region: null,
    city: "London",
    timezone: "+01:00",
    lat: 51.5,
    lng: -0.09,
  });
  const [position, setPosition] = useState([OutputData.lat, OutputData.lng]);

  const submitHandler = (event) => {
    event.preventDefault();
    apiRequest();
  };

  const apiRequest = () => {
    if (apiUserInputRequest) {
      axios
        .get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${apiUserInputRequest}`
        )
        .then((res) => {
          const apiResponse = res.data;

          const { ip, isp } = apiResponse;
          const {
            city,
            country,
            region,
            timezone,
            lat,
            lng,
          } = apiResponse.location;
          setOutputData({
            ip: ip,
            isp: isp,
            country: country,
            region: region,
            city: city,
            timezone: timezone,
            lat: lat,
            lng: lng,
          });
          setPosition([lat, lng]);
        });
    }
  };

  // const map = useMap();
  return (
    <div className="App">
      <div className="top-container">
        <h2> IP Address Tracker</h2>

        <SearchField
          setApiUserInputRequest={setApiUserInputRequest}
          submitHandler={submitHandler}
        />

        <InfoContainer OutputData={OutputData} />
      </div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
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
    </div>
  );
}

export default App;
