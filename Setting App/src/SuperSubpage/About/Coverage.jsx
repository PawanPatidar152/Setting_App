import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import AppleID from "../../Components/AppleId";
import phone from "../../assets/wallpaper.jpg";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Coverage() {
  const props1 = [
    <>
      <AppleID
        name="Pawan's Iphone 12"
        description="Coverage Expired"
        data=">"
        image={phone}
      />
    </>,
    <>
      <AppleID
        name="Pawan's Airpods"
        description="Coverage Expired"
        data=">"
        image={phone}
      />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="THIS DEVICE" />
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="PAIRED DEVICES" />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="Coverage is only shown for this iphone and selected Bluetooth-paired devices . For a full list of your dvices, go to Apple Support." />
    </>
  );

  return (
    <SettingDefault props={props} option="< About " SettingName="Coverage" />
  );
}

export default Coverage;
