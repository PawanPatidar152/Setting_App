import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
function SEID() {
  const mainData = [
    <DataInMainComponant title="04382A63CA6280012541307941DA74ADAED0070AD6" />,
  ];

  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
    </>
  );

  return <SettingDefault props={props} option="< About " SettingName="SEID" />;
}

export default SEID;
