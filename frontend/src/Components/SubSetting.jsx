import React from "react";
import { Link } from "react-router-dom";
import "./SubSetting.css";
function SubSetting(props) {
  if (props.hr == "yes") {
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
            <div id="data">{props.data}</div>
          </div>
          <hr />
        </div>
      </Link>
    );
  } else {
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
            <div id="data">{props.data}</div>
          </div>
          <br />
        </div>
      </Link>
    );
  }
}
export default SubSetting;
