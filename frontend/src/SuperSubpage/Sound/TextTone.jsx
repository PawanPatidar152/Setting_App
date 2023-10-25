import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function TextTone() {
  const props1 = [
    <>
      <DataInMainComponant title="Vibration" data="Default >" />
    </>,
    <>
      <DataInMainComponant title="Tone Store" data="" hr="yes" />
      <DataInMainComponant title="Download All Purchased Tones" data="" />
    </>,
    <>
      <DataInMainComponant title="Reflection" data="" hr="yes" />
      <DataInMainComponant title="Apex" data="" hr="yes" />
      <DataInMainComponant title="Beacon" data="" hr="yes" />
      <DataInMainComponant title="Bulletin" data="" hr="yes" />
      <DataInMainComponant title="Chimes" data="" hr="yes" />
      <DataInMainComponant title="Circuit" data="" hr="yes" />
      <DataInMainComponant title="Constellation" data="" hr="yes" />
      <DataInMainComponant title="Cosmic" data="" hr="yes" />
      <DataInMainComponant title="Crystals" data="" hr="yes" />
      <DataInMainComponant title="Hillside" data="" hr="yes" />
      <DataInMainComponant title="Illumite" data="" hr="yes" />
      <DataInMainComponant title="Nighy Owl" data="" hr="yes" />
      <DataInMainComponant title="Opening" data="" hr="yes" />
      <DataInMainComponant title="Playtime" data="" hr="yes" />
      <DataInMainComponant title="Presto" data="" hr="yes" />
      <DataInMainComponant title="Radar" data="" hr="yes" />
      <DataInMainComponant title="Radiate" data="" hr="yes" />
      <DataInMainComponant title="Ripples" data="" hr="yes" />
      <DataInMainComponant title="Sencha" data="" hr="yes" />
      <DataInMainComponant title="Signal" data="" hr="yes" />
      <DataInMainComponant title="Silk" data="" hr="yes" />
      <DataInMainComponant title="Slow Rise" data="" hr="yes" />
      <DataInMainComponant title="Stargaze" data="" hr="yes" />
      <DataInMainComponant title="Summit" data="" hr="yes" />
      <DataInMainComponant title="Twinkle" data="" hr="yes" />
      <DataInMainComponant title="Uplift" data="" hr="yes" />
      <DataInMainComponant title="Waves" data="" hr="yes" />
      <DataInMainComponant title="Classic" data="e" />
    </>,
    <>
      <DataInMainComponant title="Aurora" data="" hr="yes" />
      <DataInMainComponant title="Bamboo" data="" hr="yes" />
      <DataInMainComponant title="Chord" data="" hr="yes" />
      <DataInMainComponant title="Circles" data="" hr="yes" />
      <DataInMainComponant title="Completes" data="" hr="yes" />
      <DataInMainComponant title="Hello" data="" hr="yes" />
      <DataInMainComponant title="Input" data="" hr="yes" />
      <DataInMainComponant title="Keys" data="" hr="yes" />
      <DataInMainComponant title="Note" data="" hr="yes" />
      <DataInMainComponant title="Popcorn" data="" hr="yes" />
      <DataInMainComponant title="Pulse" data="" hr="yes" />
      <DataInMainComponant title="Synth" data="" hr="yes" />
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
      <SettingDefault props={props} option="< Back" SettingName="Text Tone" />
    </div>
  );
}

export default TextTone;
