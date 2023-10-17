import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";
import ToggleSwitch from "../ReusableComponent/Toggle";
import Appearance from "../SuperSubpage/Display/Appearance";
import Slider from "../ReusableComponent/Slider";
import lowBright from "../assets/brightnessLow.png";
import highBright from "../assets/brightnessHigh.png";
import TextBwnMainComponant from "../ReusableComponent/TextBwnMainComponant";

function SubDisplay() {
  const props1 = [
    <>
      <Appearance text1="Light" text2="Dark" automatic="true" />
    </>,
    <>
      <DataInMainComponant title="Automatic" data={<ToggleSwitch label="Automatic1" />} />
    </>,
    <>
      <DataInMainComponant title="Text Size" data=">"  link="/Text"/>
      <DataInMainComponant title="Bold Text" data={<ToggleSwitch label="BoldText" />} />
    </>,
    <>
      <Slider image1={lowBright} image2={highBright} />
      <DataInMainComponant title="True Tone" data={<ToggleSwitch label="TrueTone" />} />
    </>,
    <>
      <DataInMainComponant title="Night Shift" data=">" link="/Night" />
    </>,
    <>
      <DataInMainComponant title="Auto Lock" data=">" link="/AutoLock" />
      <DataInMainComponant title="Raise to Wake" data={<ToggleSwitch label="Raise" />} />
    </>,
    <>
      <DataInMainComponant title="Display Zoom" data="Default >" link="/DisplayZoom" />
    </>,
  ];

  const props = (
    <>
    <br/>
      <TextBwnMainComponant text="APPEARANCE" />
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      
      <MainComponants props1={props1[2]}/> <TextBwnMainComponant text="BRIGHTNESS" />
      <MainComponants props1={props1[3]} />
      <TextBwnMainComponant text="Automatically adapt iphone display based on ambient lightning conditions to make colours appear consistent in different environments" />
      <MainComponants props1={props1[4]} />
      <MainComponants props1={props1[5]} />
      <TextBwnMainComponant text="DISPLAY" />
      <MainComponants props1={props1[6]} />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Display & Brightness"
      />
    </div>
  );
}

export default SubDisplay;
