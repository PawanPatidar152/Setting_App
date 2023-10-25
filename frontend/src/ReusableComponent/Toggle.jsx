

import "./Toggle.css";
import React, { useState, useEffect } from "react";

function ToggleSwitch({ label }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    updateDataInAPI("653647b1726802028745bf3b", !isToggled, label);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5555/toggle", {
          method: "GET",
        });

        const data = await response.json();
        setIsToggled(data.data[0][label]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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
            name={label}
            checked={isToggled}
            onChange={handleToggleChange}
            id={label}
          />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
