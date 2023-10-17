import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file


function Slider(props) {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
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
