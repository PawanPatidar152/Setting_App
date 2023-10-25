import React from "react";
import "./logoplusname.css";
import { Link } from "react-router-dom";
function Logoplusname(props) {
  if (props.link && props.hr) {
    return (
      <Link to={props.link}>
        <div className="innerComponant3">
          <div className="topinnercomponent3">
            <div className="topLeft">
              <div className="logoinner3">
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
        <div className="innerComponant3">
          <div className="topinnercomponent3">
            <div className="topLeft">
              <div className="logoinner3">
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
      <div className="innerComponant3">
        <div className="topinnercomponent3">
          <div style={{ display: "flex", columnGap: "11px" }}>
            <div className="logoinner3">
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
      <div className="innerComponant3">
        <div className="topinnercomponent3">
          <div style={{ display: "flex", columnGap: "11px" }}>
            <div className="logoinner3">
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
