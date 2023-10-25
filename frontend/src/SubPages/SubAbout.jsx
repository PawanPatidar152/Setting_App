import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";

import "../Pages/SettingDefault.css";
function SubAbout() {
  const props1 = [
    <>
      <DataInMainComponant title="Name" data="Pawan' iphone 12" hr="yes" />
      <DataInMainComponant
        title="IOS Version"
        data="16.6 >"
        link="/Setting/About/IosVersion"
        hr="yes"
      />
      <DataInMainComponant title="Model Name" data="iphone 12" hr="yes" />
      <DataInMainComponant title="Model Number" data="MGJE3HN/A" hr="yes" />
      <DataInMainComponant title="Serial Number" data="GV4FT1710F11" hr="yes" />
    </>,
    <>
      <DataInMainComponant
        title="Coverage"
        data=">"
        link="/Setting/About/Coverage"
      />
    </>,
    <>
      <DataInMainComponant title="Songs" data="0" hr="yes" />
      <DataInMainComponant title="Videos" data="712" hr="yes" />
      <DataInMainComponant title="Photos" data="6275" hr="yes" />
      <DataInMainComponant title="Applications" data="22" hr="yes" />
      <DataInMainComponant title="Capacity" data="128 GB" hr="yes" />
      <DataInMainComponant title="Available" data="16.01 GB" />
    </>,

    <>
      <DataInMainComponant
        title="Wi-Fi Address"
        data="84:8c:8D:C8:2A:6F"
        hr="yes"
      />
      <DataInMainComponant
        title="Bluetooth"
        data="84:8C:8D:BA:76:DD"
        hr="yes"
      />
      <DataInMainComponant title="Modem Firmware" data="3.80.01" hr="yes" />
      <DataInMainComponant
        title="SEID"
        data=">"
        link="/Setting/About/SEID"
        hr="yes"
      />
      <DataInMainComponant title="EID" data="890490320060088826000" hr="yes" />
      <DataInMainComponant
        title="Network Provider Lock"
        data="No Sim Restrictions"
      />
    </>,
    <>
      <DataInMainComponant title="Network" data="JIO 4G" hr="yes" />
      <DataInMainComponant
        title="Network Provider"
        data="Jio 54.0.1"
        hr="yes"
      />
      <DataInMainComponant title="IMEI" data="35 261927 662370 0" hr="yes" />
      <DataInMainComponant title="ICCID" data="8991863040084" hr="yes" />
      <DataInMainComponant title="MEID" data="352691638293" />
    </>,
    <>
      <DataInMainComponant title="IMEI 2" data="35 3646948964912" />
    </>,
    <>
      <DataInMainComponant
        title="Certificate Trust Settings"
        data=">"
        link="/Setting/About/CertificateTrust"
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      <MainComponants props1={props1[2]} />
      <MainComponants props1={props1[3]} />
      <MainComponants props1={props1[4]} />
      <MainComponants props1={props1[5]} />
      <MainComponants props1={props1[6]} />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="< Setting" SettingName="About" />
    </div>
  );
}

export default SubAbout;
