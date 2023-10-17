import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";

function SubAbout() {
  const props1 = [
    <>
      <DataInMainComponant title="Name" data="Pawan' iphone 12" />
      <DataInMainComponant title="IOS Version" data="16.6 >" link="/IosVersion" />
      <DataInMainComponant title="Model Name" data="iphone 12" />
      <DataInMainComponant title="Model Number" data="MGJE3HN/A" />
      <DataInMainComponant title="Serial Number" data="GV4FT1710F11" />
    </>,
    <>
      <DataInMainComponant title="Coverage" data=">" link="/Coverage" />
    </>,
    <>
      <DataInMainComponant title="Songs" data="0" />
      <DataInMainComponant title="Videos" data="712" />
      <DataInMainComponant title="Photos" data="6275" />
      <DataInMainComponant title="Applications" data="22" />
      <DataInMainComponant title="Capacity" data="128 GB" />
      <DataInMainComponant title="Available" data="16.01 GB" />
    </>,
  
     <>
      <DataInMainComponant title="Wi-Fi Address" data="84:8c:8D:C8:2A:6F" />
      <DataInMainComponant title="Bluetooth" data="84:8C:8D:BA:76:DD" />
      <DataInMainComponant title="Modem Firmware" data="3.80.01" />
      <DataInMainComponant title="SEID" data=">" link="/SEID" />
      <DataInMainComponant title="EID" data="890490320060088826000" />
      <DataInMainComponant title="Network Provider Lock" data="No Sim Restrictions" />
    </>,
     <>
     <DataInMainComponant title="Network" data="JIO 4G" />
     <DataInMainComponant title="Network Provider" data="Jio 54.0.1" />
     <DataInMainComponant title="IMEI" data="35 261927 662370 0" />
     <DataInMainComponant title="ICCID" data="8991863040084" />
     <DataInMainComponant title="MEID" data="352691638293" />
   </>,
   <>
   <DataInMainComponant title="IMEI 2" data="35 3646948964912" />
 </>,
 <>
 <DataInMainComponant title="Certificate Trust Settings" data=">" link="/CertificateTrust" />
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
      <SettingDefault props={props} option="< Setting" SettingName="About"  />
    </div>
  );
}

export default SubAbout;
