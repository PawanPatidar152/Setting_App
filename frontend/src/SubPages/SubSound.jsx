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
      <Slider image1={lowhVol} image2={highVol} label="RingtoneSlider" />
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
        data={<ToggleSwitch label="LockSound" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Play Haptics in Ring Mode"
        hr="yes"
        data={<ToggleSwitch label="HapticsInRing" />}
      />
      <DataInMainComponant
        title="Play Haptics in Silent Mode"
        data={<ToggleSwitch label="HapticsInSilent" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="System Haptics"
        data={<ToggleSwitch label="SystemHaptics" />}
      />
    </>,
  ];
  const props = (
    <>
      <TextBwnMainComponant text="HEADPHONE AUDIO" />
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="RINGTONE AND ALERT VALUE" />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="The volume of the ringer and alerts can be adjusted using the volume buttons." />
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
