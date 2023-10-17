import React from "react";
import "./SettingDefault.css";
import wifi from "../assets/wifi-solid.png";
import battery from "../assets/charge.png";
import RealTimeClock from "../Components/Time";
import { useNavigate } from "react-router-dom";

export default function SettingDefault(props) {
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
            <img src={wifi} alt="" />
            <img id="battery" src={battery} alt="" />
          </div>
          <div className="nodge1"></div>
        </div>
        {props.option ? (
          <div className="lowerNav">
            <button onClick={goBack}>{props.option} </button>
            <h4>{props.SettingName} </h4>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>{props.props}</div>
    </div>
  );
}
