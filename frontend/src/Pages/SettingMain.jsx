import React, { useState } from "react";
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
import { useEffect } from "react";
import LoadingSpinner from "../ReusableComponent/LoadingSpinner.jsx";
function SettingMainPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5555/toggle", {
          method: "GET",
        });

        const data = await response.json();
        setData(data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data) {
    const mainData = (
      <>
        <AirplaneMode data={data} />
        {/* Subsetting is the data shown in our main componant */}
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
    //The data which is to be send in defaultSetting
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
        {/* box like structure in which subsetting visible line by line  */}
        <MainComponants mainData={mainData} />
      </>
    );
    return (
      <>
        <SettingDefault props={props} />
      </>
    );
  } else {
    //The data which is to be send in defaultSetting
    const props = (
      <>
        <LoadingSpinner />
      </>
    );
    return (
      <>
        <SettingDefault props={props} />
      </>
    );
  }
}

export default SettingMainPage;
