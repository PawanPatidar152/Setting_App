import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
function AutoLock() {
  const mainData = [
    <>
      <DataInMainComponant title="30 seconds" hr="yes" />
      <DataInMainComponant title="1 minutes" hr="yes" />
      <DataInMainComponant title="2 minutes" hr="yes" />
      <DataInMainComponant title="3 minutes" hr="yes" />
      <DataInMainComponant title="4 minutes" hr="yes" />
      <DataInMainComponant title="5 minutes" hr="yes" />
      <DataInMainComponant title="Never" />
    </>,
  ];

  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <TextBwnMainComponant text="Attention is detected when you are looking at the screen . When attention is detected,iphone does not dim the display." />
    </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Auto-Lock" />
  );
}

export default AutoLock;
