import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function WifiFunction() {
  const props1 = [
    <>
      <DataInMainComponant title="Wi-Fi" data={<ToggleSwitch label="WIFI" />} />
    </>,
    <>
      <DataInMainComponant title="Other..." />
    </>,

    <>
      <DataInMainComponant title="Ask to Join Networks" data="Ask >" />
    </>,
    <>
      <DataInMainComponant title="Auto-join Hotspot" data="Automatic >" />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <br />
      <TextBwnMainComponant text="NETWORKS" />
      <MainComponants props1={props1[1]} />
      <br />
      <MainComponants props1={props1[2]} />
      <TextBwnMainComponant text="Known networks will be joined automatically . if noknown network are available , you will be asked before joining a new network " />
      <br />
      <MainComponants props1={props1[3]} />
      <TextBwnMainComponant text="Allow this device to automaticlly nearby personal hotspots when no Wi-Fi network is availabel" />
      <br />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="< Settings" SettingName="Wi-Fi" />
    </div>
  );
}

export default WifiFunction;
