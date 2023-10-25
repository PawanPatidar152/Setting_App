import React from "react";
import AppleID from "../Components/AppleId.jsx";
import Settingtext from "../Components/SettingText";
import SettingDefault from "./SettingDefault";
import "./SettingDefault.css";
import MainComponants from "../Components/MainComponants.jsx";
import AirplaneMode from "../Components/AirplaneMode.jsx";
import SubSetting from "../Components/SubSetting.jsx";
import displayicon from "../assets/displayicon.jpg";
import about from "../assets/about.png";
import sound from "../assets/soundicon.jpg";
import connection from "../assets/connection.png";
import pawan from "../assets/pawan.jpeg";

function SettingMainPage(data) {
  const props1 = (
    <>
      <AirplaneMode data={data.data} />

      <SubSetting
        label="Display and Brightness"
        image={displayicon}
        link="/Setting/Display"
        data=">"
        hr="yes"
      />
      <SubSetting
        label="About Phone"
        hr="yes"
        image={about}
        link="/Setting/About"
        data=">"
      />
      <SubSetting
        label="Sound & Haptics"
        image={sound}
        link="/Setting/Sound"
        data=">"
        hr="yes"
      />
      <SubSetting
        label="Connections"
        image={connection}
        link="/Setting/Connection"
        data=">"
        hr=""
      />
    </>
  );
  const props = (
    <>
      <Settingtext />
      <AppleID
        name="Pawan Patidar"
        description="Apple ID,icloud,Media & Purchases"
        data=">"
        image={pawan}
        link="/Setting/AppleID"
      />
      <MainComponants props1={props1} />
    </>
  );
  return (
    <>
      <SettingDefault props={props} />
    </>
  );
}

export default SettingMainPage;
