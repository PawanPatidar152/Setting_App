import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function WifiFunction() {
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
          title="Wi-Fi"
          data={<ToggleSwitch newData={data.data[0]} label="WIFI" />}
        />
      </>,
      <>
        <DataInMainComponant title="Other..." />
      </>,

      <>
        <DataInMainComponant title="Ask to Join Networks" data="Ask >" />
      </>,
      <>
        <DataInMainComponant title="Auto-join Hotspot" data="Automatic >" />
      </>,
    ];
    const props = (
      <>
        <MainComponants mainData={mainData[0]} />
        <br />
        <TextBwnMainComponant text="NETWORKS" />
        <MainComponants mainData={mainData[1]} />
        <br />
        <MainComponants mainData={mainData[2]} />
        <TextBwnMainComponant text="Known networks will be joined automatically . if noknown network are available , you will be asked before joining a new network " />
        <br />
        <MainComponants mainData={mainData[3]} />
        <TextBwnMainComponant text="Allow this device to automaticlly nearby personal hotspots when no Wi-Fi network is availabel" />
        <br />
      </>
    );
    return (
      <div>
        <SettingDefault props={props} option="< Settings" SettingName="Wi-Fi" />
      </div>
    );
  } else {
    const mainData = [
      <>
        <DataInMainComponant
          title="Wi-Fi"
          data={<ToggleSwitch  label="WIFI" />}
        />
      </>,
      <>
        <DataInMainComponant title="Other..." />
      </>,

      <>
        <DataInMainComponant title="Ask to Join Networks" data="Ask >" />
      </>,
      <>
        <DataInMainComponant title="Auto-join Hotspot" data="Automatic >" />
      </>,
    ];
    const props = (
      <>
       <LoadingSpinner/>
      </>
    );
    return (
      <div>
        <SettingDefault props={props} option="< Settings" SettingName="Wi-Fi" />
      </div>
    );
  }
}

export default WifiFunction;
