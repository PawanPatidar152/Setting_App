import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function HotspotFunction() {
  const props1 = [
    <>
      <DataInMainComponant
        title="Allow Others to Join"
        hr="yes"
        data={<ToggleSwitch label="AllowToJoin" />}
      />
      <DataInMainComponant title="Wi-Fi Password" data="876543218" />
    </>,
    <>
      <DataInMainComponant
        title="Maximise Comatibility"
        data={<ToggleSwitch label="Compatiable" />}
      />
    </>,
  ];
  const props = (
    <>
      <TextBwnMainComponant text="Personal Hotspost on your iPhone can provide internet access to  other devices signed in to your iCloud account without requiring uou to enter the password. " />

      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Allow other users or devices not signed in to iCloud to look for your shared network Pawan iPhone when you are in Personal Hotspot settings or when you turn it on in Control Center. " />

      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="Internet performance may be reduced for devices connected to your hotspot when turned on" />
      <br />
      <br />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Personal Hotspot"
      />
    </div>
  );
}

export default HotspotFunction;
