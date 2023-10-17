import React from "react";
import "./AppleIDVerical.css";
export default function AppleID1(props) {
  return (
    <>
      <div className="appleID1">
        <div className="logo1">
          <img src={props.image} alt="dp" />
        </div>
        <div>
          <p id="name">{props.name}</p>
          <p id="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
