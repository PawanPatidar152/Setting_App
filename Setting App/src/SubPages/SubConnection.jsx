import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import MainComponants from "../Components/MainComponants";
import SubSetting from '../Components/SubSetting'
import WIFI from '../assets/Wifi.jpg'
import HOTSPOT from '../assets/Hotspot.jpg'
import DATA from '../assets/Data.jpg'
import BLUTOOTH from '../assets/Bluetooth.jpg' 
function SubConnection() {
  const props1 = [
    <>
    <SubSetting
    label="Wi-fi"
    link="/WifiFunction"
    image={WIFI}
    data=" >"
  />
  </>,
    <>
     <SubSetting label="Bluetooth" image={BLUTOOTH} link="/BluetoothFunction" data="Not connected >" />
    </>,
    <>
    <SubSetting label="Mobile Data" image={ DATA } link="/MobiledataFunction" data=">" />
   </>,
   <>
   <SubSetting label="Personal Hotspot" image={HOTSPOT} link="/HotspotFunction" data=">" />
  </>,
    
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      <MainComponants props1={props1[2]} />
      <MainComponants props1={props1[3]} />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="< Settings" SettingName="Connections"  />
    </div>
  );
}

export default SubConnection;
