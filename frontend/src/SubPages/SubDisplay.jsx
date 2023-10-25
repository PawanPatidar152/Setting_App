import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";
import ToggleSwitch from "../ReusableComponent/Toggle";
import Appearance from "../SuperSubpage/Display/Appearance";
import lowBright from "../assets/brightnessLow.png";
import highBright from "../assets/brightnessHigh.png";
import TextBwnMainComponant from "../ReusableComponent/TextBwnMainComponant";
import BrightnessSlider from "../ReusableComponent/BrightnessSlider";

function SubDisplay() {
  const props1 = [
    <>
      <Appearance text1="Light" text2="Dark" automatic="yes" />
    </>,

    <>
      <DataInMainComponant
        title="Text Size"
        data=">"
        link="/Setting/Display/Text"
        hr="yes"
      />
      <DataInMainComponant
        title="Bold Text"
        data={<ToggleSwitch label="BoldText" />}
      />
    </>,
    <>
      <BrightnessSlider image1={lowBright} image2={highBright} />
      <DataInMainComponant
        title="True Tone"
        data={<ToggleSwitch label="TrueTone" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Night Shift"
        data=">"
        link="/Setting/Display/Night"
      />
    </>,
    <>
      <DataInMainComponant
        title="Auto Lock"
        data=">"
        link="/Setting/Display/AutoLock"
        hr="yes"
      />
      <DataInMainComponant
        title="Raise to Wake"
        data={<ToggleSwitch label="RaiseToWake" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Display Zoom"
        data="Default >"
        link="/Setting/Display/DisplayZoom"
      />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="APPEARANCE" />
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="BRIGHTNESS" />
      <MainComponants props1={props1[2]} />
      <TextBwnMainComponant text="Automatically adapt iphone display based on ambient lightning conditions to make colours appear consistent in different environments" />
      <MainComponants props1={props1[3]} />

      <MainComponants props1={props1[4]} />
      <TextBwnMainComponant text="DISPLAY" />
      <MainComponants props1={props1[5]} />
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
