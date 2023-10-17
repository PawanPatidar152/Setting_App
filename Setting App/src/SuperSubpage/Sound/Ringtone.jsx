import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Ringtone() {
  const props1 = [
    <>
      <DataInMainComponant title="Vibration" data="Default >" />
    </>,
    <>
      <DataInMainComponant title="Tone Store" data="" />
      <DataInMainComponant title="Download All Purchased Tones" data="" />
    </>,
    <>
      <DataInMainComponant title="Reflection" data="" />
      <DataInMainComponant title="Apex" data="" />
      <DataInMainComponant title="Beacon" data="" />
      <DataInMainComponant title="Bulletin" data="" />
      <DataInMainComponant title="Chimes" data="" />
      <DataInMainComponant title="Circuit" data="" />
      <DataInMainComponant title="Constellation" data="" />
      <DataInMainComponant title="Cosmic" data="" />
      <DataInMainComponant title="Crystals" data="" />
      <DataInMainComponant title="Hillside" data="" />
      <DataInMainComponant title="Illumite" data="" />
      <DataInMainComponant title="Nighy Owl" data="" />
      <DataInMainComponant title="Opening" data="" />
      <DataInMainComponant title="Playtime" data="" />
      <DataInMainComponant title="Presto" data="" />
      <DataInMainComponant title="Radar" data="" />
      <DataInMainComponant title="Radiate" data="" />
      <DataInMainComponant title="Ripples" data="" />
      <DataInMainComponant title="Sencha" data="" />
      <DataInMainComponant title="Signal" data="" />
      <DataInMainComponant title="Silk" data="" />
      <DataInMainComponant title="Slow Rise" data="" />
      <DataInMainComponant title="Stargaze" data="" />
      <DataInMainComponant title="Summit" data="" />
      <DataInMainComponant title="Twinkle" data="" />
      <DataInMainComponant title="Uplift" data="" />
      <DataInMainComponant title="Waves" data="" />
      <DataInMainComponant title="Classic" data="e" />
    </>,
    <>
      <DataInMainComponant title="Aurora" data="" />
      <DataInMainComponant title="Bamboo" data="" />
      <DataInMainComponant title="Chord" data="" />
      <DataInMainComponant title="Circles" data="" />
      <DataInMainComponant title="Completes" data="" />
      <DataInMainComponant title="Hello" data="" />
      <DataInMainComponant title="Input" data="" />
      <DataInMainComponant title="Keys" data="" />
      <DataInMainComponant title="Note" data="" />
      <DataInMainComponant title="Popcorn" data="" />
      <DataInMainComponant title="Pulse" data="" />
      <DataInMainComponant title="Synth" data="" />
      <DataInMainComponant title="Classic" data=">" />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />

      <TextBwnMainComponant text="Store" />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="This will download all ringtones and alerts purchased using the 7089719195 account" />
      <MainComponants props1={props1[2]} />
      <TextBwnMainComponant text="ALERT TONES" />
      <MainComponants props1={props1[3]} />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="< Back" SettingName="Ringtone" />
    </div>
  );
}

export default Ringtone;
