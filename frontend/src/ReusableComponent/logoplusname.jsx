import React from "react";
import "./logoplusname.css";
import { Link } from "react-router-dom";
function Logoplusname(props) {
//if need to link any other page and to show horizontal line between componant

  if (props.link && props.hr) {
    return (
      <Link to={props.link}>
        <div className="LogoplusnameInner">
          <div className="LogoplusnameTop">
            <div className="topLeft">
              <div className="innerLogoPlus">
                <img src={props.image} alt="" />
              </div>
              <p>{props.label} </p>
            </div>
            <div id="data">{props.data}</div>
          </div>
          <hr />
        </div>
      </Link>
    );
  } else if (props.link) {
    return (
      <Link to={props.link}>
        <div className="LogoplusnameInner">
          <div className="LogoplusnameTop">
            <div className="topLeft">
              <div className="innerLogoPlus">
                <img src={props.image} alt="" />
              </div>
              <p>{props.label} </p>
            </div>
            <div id="data">{props.data}</div>
          </div>
        </div>
      </Link>
    );
  } else if (props.hr) {
    return (
      <div className="LogoplusnameInner">
        <div className="LogoplusnameTop">
          <div style={{ display: "flex", columnGap: "11px" }}>
            <div className="innerLogoPlus">
              <img src={props.image} alt="" />
            </div>
            <p>{props.label} </p>
          </div>
          <div id="data">{props.data}</div>
        </div>
        <hr />
      </div>
    );
  } else {
    return (
      <div className="LogoplusnameInner">
        <div className="LogoplusnameTop">
          <div style={{ display: "flex", columnGap: "11px" }}>
            <div className="innerLogoPlus">
              <img src={props.image} alt="" />
            </div>
            <p>{props.label} </p>
          </div>
          <div id="data">{props.data}</div>
        </div>
      </div>
    );
  }
}

export default Logoplusname;
