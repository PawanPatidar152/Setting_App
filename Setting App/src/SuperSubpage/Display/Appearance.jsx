import React from "react";
import phone from "../../assets/wallpaper.jpg";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import "./Appearance.css";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import image1 from '../../assets/LightMode.jpg'
import image2 from '../../assets/DarkMode.jpg'
import Larger from '../../assets/Larger.jpg'
import Default from '../../assets/Default.jpg'
function Appearance(props) {
  if (props.automatic == "true") {
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
              checked="true"
            />
          </label>
        </div>

        <div>
          <DataInMainComponant
            title="Automatic"
            data={<ToggleSwitch label="Automatic" />}
          />
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
