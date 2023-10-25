import React, { useState, useEffect } from "react";
import "./SettingDefault.css";
import wifi from "../assets/wifi-solid.png";
import battery from "../assets/charge.png";
import RealTimeClock from "../Components/Time";
import { useNavigate } from "react-router-dom";

export default function SettingDefault(props) {
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mainSetting1">
      <div className="topNav1">
        <div className="upperNav">
          <RealTimeClock />
          <div className="topNavlogo1">
            {isNavVisible && <img src={wifi} alt="" />}
            <img id="battery" src={battery} alt="battery" />
          </div>
          <div className="nodge1"></div>
        </div>
        {props.option ? (
          <div className="lowerNav">
            <button onClick={goBack}>{props.option} </button>
            <div className="SettingName">
              {" "}
              <h4>{props.SettingName} </h4>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mainBox">{props.props}</div>
    </div>
  );
}
