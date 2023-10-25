import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import Slider from "../../ReusableComponent/Slider";
import image1 from "../../assets/SmallA.png";
import image2 from "../../assets/BIgA.png";
function Text() {
  const props1 = [
    <>
      <Slider label="TextSlider" image1={image1} image2={image2} />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="Apps that support Dynamic Type will adjust to your peferred reading size below." />
      <br></br>
      <MainComponants props1={props1[0]} />
    </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Text Size" />
  );
}

export default Text;
