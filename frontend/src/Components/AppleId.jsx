import React from "react";
import { Link } from "react-router-dom";
import "./AppleId.css";
export default function AppleID(props) {
  if (props.image) {
    return (
      <>
        <Link to={props.link}>
          <div className="appleID">
            <div className="innerappleID">
              <div className="logo">
                <img src={props.image} alt="dp" />
              </div>
              <div>
                <p>{props.name}</p>
                <p className="description">{props.description}</p>
              </div>
            </div>
            <div>
              <p className="data">{props.data}</p>
            </div>
          </div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={props.link}>
          <div className="appleID">
            <div className="innerappleID">
              <div>
                <p>{props.name}</p>
                <p>{props.description}</p>
              </div>
            </div>
            <div>
              <p>{props.data}</p>
            </div>
          </div>
        </Link>
      </>
    );
  }
}
