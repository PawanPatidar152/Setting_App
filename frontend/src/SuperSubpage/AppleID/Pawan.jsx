import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import AppleIDVerical from "../../ReusableComponent/AppleIDVerical";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import IphoneClone from "../../assets/IphoneClone.jpg";
function Pawan() {
  const mainData = [
    <>
      <AppleIDVerical
        name="Pawan's iPhone"
        description="This iPhone 12"
        image={IphoneClone}
      />
    </>,
    <>
      <DataInMainComponant title="Find My Iphone" data="On >" hr="yes" />
      <DataInMainComponant title="iCloud Backup" data="Off >" />
    </>,
    <>
      <DataInMainComponant title="FModel" data="Iphone 12" hr="yes" />
      <DataInMainComponant title="Version" data="IOS 16.6" hr="yes" />
      <DataInMainComponant
        title="Phone Number"
        data="+91 7089719195"
        hr="yes"
      />
      <DataInMainComponant title="Serial Number" data="GV4FT1710F11" hr="yes" />
      <DataInMainComponant title="IMEI" data="35 261927 662370 0" />
    </>,
  ];
  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="DEVICE INFO" />
      <MainComponants mainData={mainData[2]} />
      <TextBwnMainComponant text="This device is trusted and can receive Apple Id verification codes. " />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< AppleID"
        SettingName="Device Info"
      />
    </div>
  );
}

export default Pawan;
