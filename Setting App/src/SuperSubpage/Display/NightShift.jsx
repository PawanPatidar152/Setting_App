import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import Slider from "../../ReusableComponent/Slider";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import ToggleSwitch from "../../ReusableComponent/Toggle";
function Night() {
  const props1 = [
    <>
      <DataInMainComponant
        title="Sheduled"
        data={<ToggleSwitch label="scheduled" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Manually Enable Until Tommorow"
        data={<ToggleSwitch label="Manually" />}
      />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="Night shift automatically shifts the colours of your display to the warmer end of the colour spectrum after dark. This may help you get a better night's sleep." />
      <br></br>
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
     </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Night shift" />
  );
}

export default Night;
