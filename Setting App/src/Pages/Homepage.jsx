import React from "react";
import "./Homepage.css";
import settingLogo from "../assets/settingIcon.png";
import { Link } from "react-router-dom";
import wifi from "../assets/wifi-solid.png";
import battery from "../assets/charge.png";
import RealTimeClock from "../Components/Time";

export default function Homepage() {
  return (
    <div className="mainSetting">
      <div className="topNav">
        <RealTimeClock />
        <div className="topNavlogo">
          <img src={wifi} alt="" />
          <img id="battery" src={battery} alt="" />
        </div>
        <div className="nodge"></div>
      </div>
      <div>
        <Link to="/about">
          <img className="settingIcon" src={settingLogo} />
        </Link>
      </div>
    </div>
  );
}
