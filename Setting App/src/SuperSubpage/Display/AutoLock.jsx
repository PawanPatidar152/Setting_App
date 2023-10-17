import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
function AutoLock() {
  const props1 = [
    <>
      <DataInMainComponant title="30 seconds" />
      <DataInMainComponant title="1 minutes" />
      <DataInMainComponant title="2 minutes" />
      <DataInMainComponant title="3 minutes" />
      <DataInMainComponant title="4 minutes" />
      <DataInMainComponant title="5 minutes" />
      <DataInMainComponant title="Never" />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Attention is detected when you are looking at the screen . When attention is detected,iphone does not dim the display." />
    </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Auto-Lock" />
  );
}

export default AutoLock;
