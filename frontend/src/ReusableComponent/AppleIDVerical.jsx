import React from "react";
import "./AppleIDVerical.css";
export default function AppleIDVertical(props) {
  return (
    <>
      <div className="appleIdVertical">
        <div className="appleIdVerticalLogo">
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
