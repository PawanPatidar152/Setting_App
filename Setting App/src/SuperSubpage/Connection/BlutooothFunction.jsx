import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";

function BluetoothFunction() {
  const props1 = [
    <>
      <DataInMainComponant title="Allow New Connections"  />
    </>,
    <>
      <DataInMainComponant title="HALONIX BT " data="Not Connected" />
      <DataInMainComponant title="HKZ " data="Not Connected" />
      <DataInMainComponant title="KUMAWAT RADIO " data="Not Connected" />
      <DataInMainComponant title="MAX 611 " data="Not Connected" />
      <DataInMainComponant title="MY CAR " data="Not Connected" />
      <DataInMainComponant title="OPPO ENCO W11" data="Not Connected" />
      <DataInMainComponant title="Pawan's Airpods" data="Not Connected" />
      <DataInMainComponant title="Raj Radios " data="Not Connected" />
      <DataInMainComponant title="Rajesh Radios " data="Not Connected" />
      <DataInMainComponant title="Rockerz 333" data="Not Connected" />
      <DataInMainComponant title="Santro" data="Not Connected" />
      <DataInMainComponant title="series 7" data="Not Connected" />
      <DataInMainComponant title="  SKODA RAPID " data="Not Connected" />
      <DataInMainComponant title="ZEB - THUNDER " data="Not Connected" />
    </>,
  ];
  const props = (
    <>
      <br />
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="New Blutooth connections have been turned off from Control Center " />
      <br />
      <TextBwnMainComponant text="MY DEVICES" />
      <br />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="OTHER DEVICES" />
      <br />
      <TextBwnMainComponant text="To pair an apple Watch with uour iPhone , go to the Apple Watch App." />
      <br/>
      <br/>
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Bluetooth"
      />
    </div>
  );
}

export default BluetoothFunction;
