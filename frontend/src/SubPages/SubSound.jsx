import React, { useState, useEffect } from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";
import ToggleSwitch from "../ReusableComponent/Toggle";
import Slider from "../ReusableComponent/Slider";
import highVol from "../assets/highVol.png";
import lowhVol from "../assets/lowVol.png";
import TextBwnMainComponant from "../ReusableComponent/TextBwnMainComponant.jsx";
import LoadingSpinner from '../ReusableComponent/LoadingSpinner'
function SubSound() {
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
        <DataInMainComponant
          title="Headphone Safety"
          data=">"
          link="/Setting/Sound/Headphone"
          hr="yes"
        />
        <DataInMainComponant
          title="Personalised Spatial Audio"
          data=">"
          link="/Setting/Sound/Personalise"
        />
      </>,
      <>
        <Slider newData={data.data[0]} image1={lowhVol} image2={highVol} label="RingtoneSlider" />
      </>,
      <>
        <DataInMainComponant
          title="Ringtone"
          data="Opening >"
          link="/Setting/Sound/Ringtone"
          hr="yes"
        />
        <DataInMainComponant
          title="Text Tone"
          data="Keys >"
          link="/Setting/Sound/TextTone"
          hr="yes"
        />
        <DataInMainComponant
          title="New Voicemail"
          data="Tri-Tone >"
          link="/Setting/Sound/VoiceMail"
          hr="yes"
        />
        <DataInMainComponant
          title="New Mail"
          data="Chord >"
          link="/Setting/Sound/Newmail"
          hr="yes"
        />
        <DataInMainComponant
          title="Sent Mail"
          data="Swoosh >"
          link="/Setting/Sound/SentMail"
          hr="yes"
        />
        <DataInMainComponant
          title="Calender Alerts"
          data="Chord >"
          link="/Setting/Sound/CalenderNotes"
          hr="yes"
        />
        <DataInMainComponant
          title="Reminder Alerts"
          data="Chord >"
          link="/Setting/Sound/Reminder"
        />
      </>,
      <>
        <DataInMainComponant
          title="Keyboard Feedback"
          data="Sound >"
          link="/Setting/Sound/KeyboardFeedback"
          hr="yes"
        />
        <DataInMainComponant
          title="Lock Sound"
          data={<ToggleSwitch newData={data.data[0]} label="LockSound" />}
        />
      </>,
      <>
        <DataInMainComponant
          title="Play Haptics in Ring Mode"
          hr="yes"
          data={<ToggleSwitch newData={data.data[0]} label="HapticsInRing" />}
        />
        <DataInMainComponant
          title="Play Haptics in Silent Mode"
          data={<ToggleSwitch newData={data.data[0]} label="HapticsInSilent" />}
        />
      </>,
      <>
        <DataInMainComponant
          title="System Haptics"
          data={<ToggleSwitch newData={data.data[0]} label="SystemHaptics" />}
        />
      </>,
    ];
    const props = (
      <>
        <TextBwnMainComponant text="HEADPHONE AUDIO" />
        <MainComponants mainData={mainData[0]} />
        <TextBwnMainComponant text="RINGTONE AND ALERT VALUE" />
        <MainComponants mainData={mainData[1]} />
        <TextBwnMainComponant text="The volume of the ringer and alerts can be adjusted using the volume buttons." />
        <TextBwnMainComponant text="SOUND AND HEPTIC PATTERNS" />
        <MainComponants mainData={mainData[2]} />
        <MainComponants mainData={mainData[3]} />
        <TextBwnMainComponant text="RING / SILENT MODE SWITCH" />
        <MainComponants mainData={mainData[4]} />

        <MainComponants mainData={mainData[5]} />
      </>
    );

    return (
      <div>
        <SettingDefault
          props={props}
          option="< Settings"
          SettingName="Sound & Haptics"
        />
      </div>
    );
  } 
  else {
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
          SettingName="Sound & Haptics"
        />
      </div>
    );
    }
}

export default SubSound;
