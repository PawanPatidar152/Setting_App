import React from "react";
import { Link } from "react-router-dom";
import './SubSetting.css'
function SubSetting(props) {
  return (
    <Link to={props.link}>
      <div className="innerComponant">
        <div className="topinnercomponent">
          <div className="subSettingLeft">
            <div className="logoinner">
              <img src={props.image} alt="" />
            </div>
            <p>{props.label}</p>
          </div>
          <div id="data" >{props.data}</div>
        </div>
        <hr/>
      </div>
    </Link>
  );
}

export default SubSetting;
