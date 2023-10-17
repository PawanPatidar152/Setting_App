import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";
import ToggleSwitch from "../ReusableComponent/Toggle";
import Slider from "../ReusableComponent/Slider";
import highVol from "../assets/highVol.png";
import lowhVol from "../assets/lowVol.png";
import TextBwnMainComponant from "../ReusableComponent/TextBwnMainComponant.jsx";
function SubSound() {
  const props1 = [
    <>
      <DataInMainComponant title="Headphone Safety" data=">" link="/Headphone" />
      <DataInMainComponant
        title="Personalised Spatial Audio"
        data=">"
        link="/Personalise"
      />
    </>,
    <>
      <Slider image1={lowhVol} image2={highVol} />
      <DataInMainComponant
        title="Change with Buttons"
        data={<ToggleSwitch label="ChangeWithButton" />}
      />
    </>,
    <>
      <DataInMainComponant title="Ringtone" data="Opening >" link="/Ringtone" />
      <DataInMainComponant title="Text Tone" data="Keys >" link="/TextTone" />
      <DataInMainComponant title="New Voicemail" data="Tri-Tone >" link="/VoiceMail" />
      <DataInMainComponant title="New Mail" data="Chord >" link="/Newmail" />
      <DataInMainComponant title="Sent Mail" data="Swoosh >" link="/SentMail" />
      <DataInMainComponant title="Calender Alerts" data="Chord >" link="/CalenderNotes" />
      <DataInMainComponant title="Reminder Alerts" data="Chord >" link="/Reminder" />
    </>,
    <>
      <DataInMainComponant title="Keyboard Feedback" data="Sound >" link="/KeyboardFeedback" />
      <DataInMainComponant title="Lock Sound" data={<ToggleSwitch label="LockSound" />} />
    </>,
    <>
      <DataInMainComponant
        title="Play Haptics in Ring Mode"
        data={<ToggleSwitch label="HapticsInRing" />}
      />
      <DataInMainComponant
        title="Play Haptics in Silent Mode"
        data={<ToggleSwitch label="HapticsInSilent " />}
      />
    </>,
    <>
      <DataInMainComponant
        title="System Haptics"
        data={<ToggleSwitch label="SyatemHAptics" />}
      />
    </>,
  ];
  const props = (
    <>
      <TextBwnMainComponant text="HEADPHONE AUDIO" />
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="RINGTONE AND ALERT VALUE" />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="SOUND AND HEPTIC PATTERNS" />
      <MainComponants props1={props1[2]} />
      <MainComponants props1={props1[3]} />
      <TextBwnMainComponant text="RING / SILENT MODE SWITCH" />
      <MainComponants props1={props1[4]} />

      <MainComponants props1={props1[5]} />
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

export default SubSound;
