import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";

function KeyboardFeedback() {
  const props1 = [
    <>
      <DataInMainComponant
        title="Sound"
        data={<ToggleSwitch label="Sound" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Haptic"
        data={<ToggleSwitch label="Haptic" />}
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
    </>
  );

  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Keyboard Feedback"
      />
    </div>
  );
}

export default KeyboardFeedback;
