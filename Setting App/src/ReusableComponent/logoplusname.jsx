import React from "react";
import "./logoplusname.css";
import { Link } from "react-router-dom";
function Logoplusname(props) {
  if (props.link) {
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
            <div>{props.data}</div>
          </div>
          <hr />
        </div>
      </Link>
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
          <div>{props.data}</div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Logoplusname;
