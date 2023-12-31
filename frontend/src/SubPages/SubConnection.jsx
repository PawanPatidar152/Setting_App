import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import MainComponants from "../Components/MainComponants";
import SubSetting from "../Components/SubSetting";
import WIFI from "../assets/Wifi.jpg";
import HOTSPOT from "../assets/Hotspot.jpg";
import DATA from "../assets/Data.jpg";
import BLUTOOTH from "../assets/Bluetooth.jpg";
import { useEffect,useState } from "react";
function SubConnection() {


  const mainData = [
    <>
      <SubSetting
        label="Wi-fi"
        link="/Setting/Connection/Wifi"
        image={WIFI}
        data=" >"
      />
    </>,
    <>
      <SubSetting
        label="Bluetooth"
        image={BLUTOOTH}
        link="/Setting/Connection/Bluetooth"
        data="Not connected >"
      />
    </>,
    <>
      <SubSetting
        label="Mobile Data"
        image={DATA}
        link="/Setting/Connection/Mobiledata"
        data=">"
      />
    </>,
    <>
      <SubSetting
        label="Personal Hotspot"
        image={HOTSPOT}
        link="/Setting/Connection/Hotspot"
        data=">"
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <MainComponants mainData={mainData[2]} />
      <MainComponants mainData={mainData[3]} />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Connections"
      />
    </div>
  );
}

export default SubConnection;
