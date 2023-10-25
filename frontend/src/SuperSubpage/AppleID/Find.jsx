import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Find() {
  const props1 = [
    <>
      <DataInMainComponant title="Find MY iPhone" data="On >" />
    </>,
    <>
      <DataInMainComponant title="My Location" data="This device" hr="yes" />
      <DataInMainComponant
        title="Share My Location"
        data={<ToggleSwitch label="Location" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Enabels your iPhone and other supported accessories to be shown on the map." />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="Share your locatiowith family and friends in Messages and Find My, make prsonal requests using Siri on Homepod,and useautomations in the Home app" />
      <br />
      <TextBwnMainComponant text="people who can see your location will appear here." />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="< AppleId" SettingName="Find My" />
    </div>
  );
}

export default Find;
