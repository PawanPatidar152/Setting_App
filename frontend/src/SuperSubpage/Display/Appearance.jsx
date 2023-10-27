import React from "react";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import "./Appearance.css";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import image1 from "../../assets/LightMode.jpg";
import image2 from "../../assets/DarkMode.jpg";
import Larger from "../../assets/Larger.jpg";
import Default from "../../assets/Default.jpg";
import { useState, useEffect } from "react";

function Appearance(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);



  const updateModeInAPI = async (id, updatedValue) => {
    console.log("Updating Modein API ", id, updatedValue);

    await fetch(`http://localhost:5555/toggle/${id}`, {
      body: JSON.stringify({ Mode: updatedValue }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error("Error updating data: " + error));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(true);
    updateModeInAPI("653647b1726802028745bf3b", true);
  };
  const toggleLightkMode = () => {
    setIsDarkMode(false);
    updateModeInAPI("653647b1726802028745bf3b", false);
  };

  if (props.automatic == "yes") {
    return (
      <>
        <div className="upperPhones">
          <label className="labelInner">
            <img id="image1" src={image1} alt="Image 1" />
            <p>{props.text1}</p>
            <input
              type="radio"
              name="imageSelection"
              value="image1"
              id="image1Radio"
              onClick={toggleLightkMode}
            />
          </label>
          <label className="labelInner">
            <img id="image2" src={image2} alt="Image 2" />
            <p>{props.text2}</p>
            <input
              type="radio"
              name="imageSelection"
              value="image2"
              id="image2Radio"
              defaultChecked={isDarkMode}
              onClick={toggleDarkMode}
            />
          </label>
        </div>
      </>
    );
  } else {
    return (
      <div className="upperPhones">
        <label className="labelInner">
          <img id="image1" src={Larger} alt="Image 1" />
          <p>{props.text1}</p>
          <input
            type="radio"
            name="imageSelection"
            value="image1"
            id="image1Radio"
          />
        </label>
        <label className="labelInner">
          <img id="image2" src={Default} alt="Image 2" />
          <p>{props.text2}</p>
          <input
            type="radio"
            name="imageSelection"
            value="image2"
            id="image2Radio"
            checked="true"
          />
        </label>
      </div>
    );
  }
}

export default Appearance;
