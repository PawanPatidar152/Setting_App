import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import Appearance from "./Appearance";
function DisplayZoom() {
  const props1 = [
    <>
      <Appearance text1="Larger Text" text2="Default" />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
    </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Display Zoom" />
  );
}

export default DisplayZoom;
