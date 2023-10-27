import React, { useState, useEffect } from "react";
import "./BrightnessSlider.css";
function BrightnessSlider(props) {
  const [brightness, setBrightness] = useState(80);
  useEffect(()=>{
    if(props.newData){
      setBrightness(props.newData.BrightnessSlider)
    }
  },[props])


  // useEffect(() => {
  //   async function fetchSliderData() {
  //     try {
  //       const response = await fetch("http://localhost:5555/toggle", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       setBrightness(data.data[0].BrightnessSlider);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchSliderData();
  // }, []);

  const updateSliderDataInAPI = async (id, updatedValue) => {
    await fetch(`http://localhost:5555/toggle/${id}`, {
      body: JSON.stringify({ BrightnessSlider: updatedValue }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error("Error updating data: " + error));
  };

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setBrightness(newBrightness);
    updateSliderDataInAPI("653647b1726802028745bf3b", newBrightness);
  };

  return (
    <div className="brightness-slider">
      <img src={props.image1} alt="" />
      <input
        type="range"
        id="brightness"
        min="40"
        max="100"
        value={brightness}
        onChange={handleBrightnessChange}
      />
      <img src={props.image2} alt="" />
    </div>
  );
}

export default BrightnessSlider;
