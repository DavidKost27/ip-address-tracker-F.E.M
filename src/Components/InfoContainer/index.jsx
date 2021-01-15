import React from "react";
import "./styles.scss";

export default function InfoContainer(props) {
  return (
    <div className="info-container">
      <div className="info-container__header">IP Address</div>
      <div className="info-container__ip">{`${props.OutputData.ip}`}</div>

      <div className="info-container__header">Location</div>
      <div className="info-container__location">{`${props.OutputData.city}, ${props.OutputData.country}`}</div>

      <div className="info-container__header">Timezone</div>
      <div className="info-container__time-zone">{`UTC ${props.OutputData.timezone}`}</div>

      <div className="info-container__header">Isp</div>
      <div className="info-container__isp">{`${props.OutputData.isp}`}</div>
    </div>
  );
}
