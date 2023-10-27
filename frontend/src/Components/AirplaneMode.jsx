import React from "react";
import ToggleSwitch from "../ReusableComponent/Toggle";
import AirplaneModeIcon from "../assets/airplanemodeicon.jpg";
import "./AirplaneMode.css";
function AirplaneMode(data) {

  if (data.data) {
    return (
      <div className="innerComponant">
        <div className="topinnercomponent">
          <div className="leftItem">
            <div className="logoinner">
              <img src={AirplaneModeIcon} alt="" />
            </div>
            <p>Airplane Mode </p>
          </div>
          <div>
            <ToggleSwitch newData={data.data} label="Airplane" />
          </div>
        </div>
        <hr />
      </div>
    );
  }
  else{
    return (
      <div className="innerComponant">
        <div className="topinnercomponent">
          <div className="leftItem">
            <div className="logoinner">
              <img src={AirplaneModeIcon} alt="" />
            </div>
            <p>Airplane Mode </p>
          </div>
          <div>
            <ToggleSwitch  label="Airplane" />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default AirplaneMode;
