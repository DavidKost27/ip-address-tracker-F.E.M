import React from 'react';
import "./styles.scss";

export default function InfoContainer() {
    return (
        <div className="info-container">
            
            <div className="info-container__header">IP Address</div>
            <div className="info-container__ip">192.212.174.101</div>

            <div className="info-container__header">Location</div>
            <div className="info-container__location">Brooklyn, NY 10001</div>

            <div className="info-container__header">Timezone</div>
            <div className="info-container__time-zone">UTC - 05:00</div>

            <div className="info-container__header">Isp</div>
            <div className="info-container__isp">SpaceX Starlink</div>

        </div>
    )
}
