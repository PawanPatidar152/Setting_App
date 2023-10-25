import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function HeadphoneSafety() {
  const props1 = [
    <>
      <DataInMainComponant
        title="Headphone Notification"
        data={<ToggleSwitch label="Headphone" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Reduce Loud Sounds"
        data={<ToggleSwitch label="ReduceLoud" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="To protect your hearing ,your iphone will increase headphone audio levels. If you exceed the recommended 7-day limit,a notification is sent and the volume is turned down." />

      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="Your iphone can analyse headphone audio and reduce any sound that is over a set decibal level." />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Headphone Safety"
      />
    </div>
  );
}

export default HeadphoneSafety;
