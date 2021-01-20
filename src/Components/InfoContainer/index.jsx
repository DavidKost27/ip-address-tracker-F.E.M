import React from "react";
import "./styles.scss";

export default function InfoContainer(props) {
  return (
    <div className="info-container">
      <div className="info-container__wrapper">
        <div className="info-container__header first">IP Address</div>
        <div className="info-container__ip output">{`${props.OutputData.ip}`}</div>
      </div>

      <hr />

      <div className="info-container__wrapper">
        <div className="info-container__header">Location</div>
        <div className="info-container__location output">{`${props.OutputData.city}, ${props.OutputData.country}`}</div>
      </div>

      <hr />

      <div className="info-container__wrapper">
        <div className="info-container__header ">Timezone</div>
        <div className="info-container__time-zone output">{`UTC ${props.OutputData.timezone}`}</div>
      </div>

      <hr />

      <div className="info-container__wrapper">
        <div className="info-container__header last">Isp</div>
        <div className="info-container__isp output">{`${props.OutputData.isp}`}</div>
      </div>
    </div>
  );
}
