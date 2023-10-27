import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import AppleID from "../../Components/AppleId";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import iphoneCoverage from "../../assets/iphoneCoverage.jpeg";
import airpods from "../../assets/airpods.jpeg";
function Coverage() {
  const mainData = [
    <>
      <AppleID
        name="Pawan's Iphone 12"
        description="Coverage Expired"
        data=">"
        image={iphoneCoverage}
      />
    </>,
    <>
      <AppleID
        name="Pawan's Airpods"
        description="Coverage Expired"
        data=">"
        image={airpods}
      />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="THIS DEVICE" />
      <MainComponants mainData={mainData[0]} />
      <TextBwnMainComponant text="PAIRED DEVICES" />
      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="Coverage is only shown for this iphone and selected Bluetooth-paired devices . For a full list of your dvices, go to Apple Support." />
    </>
  );

  return (
    <SettingDefault props={props} option="< About " SettingName="Coverage" />
  );
}

export default Coverage;
