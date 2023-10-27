import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider(props) {
  const [sliderValue, setSliderValue] = useState(50);
  const sliderLabel=props.label
  useEffect(()=>{
    if(props.newData){
      setSliderValue(props.newData[sliderLabel])
    }
  },[props])


  // useEffect(() => {
  //   async function fetchSliderData() {
  //     try {
  //       const response = await fetch("http://localhost:5555/toggle", {
  //         method: "GET",
  //       });

  //       const data = await response.json();
  //       setSliderValue(data.data[0][props.label]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchSliderData();
  // }, []);

  const updateSliderData = async (id, updatedValue, label) => {
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

  const handleSliderChange = (event) => {
    const newSlidervalue = event.target.value;
    setSliderValue(newSlidervalue);
    updateSliderData("653647b1726802028745bf3b", newSlidervalue, props.label);
  };

  return (
    <div className="slider-container">
      <img src={props.image1} alt="" />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="custom-slider"
      />
      <img src={props.image2} alt="" />
    </div>
  );
}

export default Slider;
