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
import { useState, useEffect } from "react";
import LoadingSpinner from "../ReusableComponent/LoadingSpinner";
function SubDisplay() {

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5555/toggle", {
          method: "GET",
        });

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);


  if (data && data.data[0]) {
  const mainData = [
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
        data={<ToggleSwitch newData={data.data[0]} label="BoldText" />}
      />
    </>,
    <>
      <BrightnessSlider newData={data.data[0]} image1={lowBright} image2={highBright} />
      <DataInMainComponant
        title="True Tone"
        data={<ToggleSwitch newData={data.data[0]} label="TrueTone" />}
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
        data={<ToggleSwitch newData={data.data[0]} label="RaiseToWake" />}
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
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="BRIGHTNESS" />
      <MainComponants mainData={mainData[2]} />
      <TextBwnMainComponant text="Automatically adapt iphone display based on ambient lightning conditions to make colours appear consistent in different environments" />
      <MainComponants mainData={mainData[3]} />
      <MainComponants mainData={mainData[4]} />
      <TextBwnMainComponant text="DISPLAY" />
      <MainComponants mainData={mainData[5]} />
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
  else{
    const mainData = [
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
       <LoadingSpinner/>
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
}

export default SubDisplay;
