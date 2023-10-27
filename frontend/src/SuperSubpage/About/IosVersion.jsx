import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";

function IosVersion() {
  const mainData = [<DataInMainComponant title="IOS 16.6 (20G75) " />];

  const props = (
    <>
      <TextBwnMainComponant text="IOS VERSION" />
      <MainComponants mainData={mainData[0]} />
    </>
  );

  return (
    <SettingDefault props={props} option="< About " SettingName="IOS Version" />
  );
}

export default IosVersion;
