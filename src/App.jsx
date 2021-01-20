import { useState, useEffect } from "react";
import "normalize.css";
import "./App.scss";

// imported components
import TopBar from "./Components/TopBar";
import Menu from "./Components/Menu";
import SearchField from "./Components/SearchField";
import InfoContainer from "./Components/InfoContainer";
//

// impoeted dependencies
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
require("dotenv").config();
//

function App() {
  // State For Hamburger Button
  const [isOpen, setOpen] = useState(false);

  const [apiUserInputRequest, setApiUserInputRequest] = useState(null);
  const [apiUserInputRequestCopy, setApiUserInputRequestCopy] = useState(null);

  const userIP = () =>
    axios.get(`https://api.ipify.org?format=json`).then((res) => {
      setApiUserInputRequest(res.data.ip);
    });

  useEffect(() => {
    userIP();
  }, []);
  useEffect(() => {
    apiRequest(apiUserInputRequest);
  }, [apiUserInputRequest]); // eslint-disable-line react-hooks/exhaustive-deps

  const [OutputData, setOutputData] = useState({
    ip: "0.0.0.0",
    isp: "None",
    country: "null",
    region: null,
    city: "null",
    timezone: "null",
    lat: 0,
    lng: 0,
  });
  const [position, setPosition] = useState([OutputData.lat, OutputData.lng]);

  const submitHandler = (event) => {
    event.preventDefault();
    setApiUserInputRequest(apiUserInputRequestCopy);
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
          const { ip } = apiResponse;
          const isp = apiResponse.as.name;
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

  // Zoom Level Based on Screen-width
  let width = document.documentElement.clientWidth;
  let preferedZoom = 13;
  if (width > 767 && width < 1279) {
    preferedZoom = 14;
  } else if (width > 1279 && width < 2000) {
    preferedZoom = 15;
  } else if (width > 2000) {
    preferedZoom = 16;
  }

  // Map Components
  const Map = () => {
    return (
      <MapContainer
        center={position}
        zoom={preferedZoom}
        scrollWheelZoom={true}
        // style={{ height: "50vh",  }}
      >
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
    );
  };
  //

  // App
  return (
    <div className="App">
      <div className="top-container">
        <TopBar setOpen={setOpen} isOpen={isOpen} />
        <Menu isOpen={isOpen} />

        <div className="top-container__header"> IP Address Tracker</div>

        <SearchField
          setApiUserInputRequest={setApiUserInputRequest}
          setApiUserInputRequestCopy={setApiUserInputRequestCopy}
          submitHandler={submitHandler}
        />

        <InfoContainer OutputData={OutputData} />
      </div>

      <Map />
    </div>
  );
}

export default App;
