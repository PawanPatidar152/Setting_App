import React, { useState, useEffect } from "react";
import "./Homepage.css";
import settingLogo from "../assets/settingIcon.png";
import { Link } from "react-router-dom";
import wifi from "../assets/wifi-solid.png";
import battery from "../assets/charge.png";
import RealTimeClock from "../Components/Time";

export default function Homepage() {
  const [isNavVisible, setIsNavVisible] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5555/toggle", {
          method: "GET",
        });

        const data = await response.json();
        setIsNavVisible(!data.data[0].Airplane);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [isNavVisible]);

  return (
    <div className="mainSetting">
      <div className="topNav">
        <RealTimeClock />
        <div className="topNavlogo">
          {isNavVisible && <img src={wifi} alt="" />}

          <img id="battery" src={battery} alt="" />
        </div>
        <div className="nodge"></div>
      </div>
      <div>
        <Link to="/Setting">
          <img className="settingIcon" src={settingLogo} />
        </Link>
      </div>
    </div>
  );
}
