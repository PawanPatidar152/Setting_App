import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function BluetoothFunction() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5555/toggle", {
          method: "GET",
        });

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (data && data.data[0]) {
    const mainData = [
      <>
        <DataInMainComponant
          title="Allow New Connections"
          data={<ToggleSwitch newData={data.data[0]} label="AllowToJoin" />}
        />
      </>,
      <>
        <DataInMainComponant
          title="HALONIX BT "
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant title="HKZ " data="Not Connected" hr="yes" />
        <DataInMainComponant
          title="KUMAWAT RADIO "
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant title="MAX 611 " data="Not Connected" hr="yes" />
        <DataInMainComponant title="MY CAR " data="Not Connected" hr="yes" />
        <DataInMainComponant
          title="OPPO ENCO W11"
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant
          title="Pawan's Airpods"
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant
          title="Raj Radios "
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant
          title="Rajesh Radios "
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant
          title="Rockerz 333"
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant title="Santro" data="Not Connected" hr="yes" />
        <DataInMainComponant title="series 7" data="Not Connected" hr="yes" />
        <DataInMainComponant
          title="  SKODA RAPID "
          data="Not Connected"
          hr="yes"
        />
        <DataInMainComponant title="ZEB - THUNDER " data="Not Connected" />
      </>,
    ];
    const props = (
      <>
        <MainComponants mainData={mainData[0]} />
        <TextBwnMainComponant text="New Blutooth connections have been turned off from Control Center " />
        <br />
        <TextBwnMainComponant text="MY DEVICES" />

        <MainComponants mainData={mainData[1]} />
        <br />
        <TextBwnMainComponant text="OTHER DEVICES" />

        <TextBwnMainComponant text="To pair an apple Watch with uour iPhone , go to the Apple Watch App." />
        <br />
        <br />
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
  } else {
    const props = (
      <>
        <LoadingSpinner />
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
}

export default BluetoothFunction;
