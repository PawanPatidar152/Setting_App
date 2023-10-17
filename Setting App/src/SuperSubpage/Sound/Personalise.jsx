import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Personalise() {
  const props1 = [
    <>
      <DataInMainComponant title="Personalise Spatial Audio" />
    </>,
  ];
  const props = (
    <>
      <TextBwnMainComponant text="You can use your iphone camera to personalise Spatial Audio to the shape of your ears. About Personalised Spatial Audio & Privacy" />
      <MainComponants props1={props1[0]} />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="<Sound&Haptics" />
    </div>
  );
}

export default Personalise;
