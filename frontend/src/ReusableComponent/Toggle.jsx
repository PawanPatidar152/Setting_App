import "./Toggle.css";
import React, { useState, useEffect } from "react";

function ToggleSwitch(props) {


const [isToggled, setIsToggled] = useState(false);
useEffect(()=>{
  if(props.newData){

  setIsToggled(props.newData[props.label])
  }
},[props])


  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    updateDataInAPI("653647b1726802028745bf3b", !isToggled, props.label);
  };


  const updateDataInAPI = async (id, updatedValue, label) => {
    await fetch(`http://localhost:5555/toggle/${id}`, {
      body: JSON.stringify({ [label]: updatedValue }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error("Error updating data: " + error));
  };

  return (
    <>
      <div className="container">
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name={props.label}
            checked={isToggled}
            onChange={handleToggleChange}
            id={props.label}
          />
          <label className="label" htmlFor={props.label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
