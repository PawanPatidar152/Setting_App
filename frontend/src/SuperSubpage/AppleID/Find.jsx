import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function Find() {
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
        <DataInMainComponant title="Find MY iPhone" data="On >" />
      </>,
      <>
        <DataInMainComponant title="My Location" data="This device" hr="yes" />
        <DataInMainComponant
          title="Share My Location"
          data={<ToggleSwitch newData={data.data[0]} label="Location" />}
        />
      </>,
    ];
    const props = (
      <>
        <MainComponants mainData={mainData[0]} />
        <TextBwnMainComponant text="Enabels your iPhone and other supported accessories to be shown on the map." />
        <MainComponants mainData={mainData[1]} />
        <TextBwnMainComponant text="Share your locatiowith family and friends in Messages and Find My, make prsonal requests using Siri on Homepod,and useautomations in the Home app" />
        <br />
        <TextBwnMainComponant text="people who can see your location will appear here." />
      </>
    );
    return (
      <div>
        <SettingDefault
          props={props}
          option="< AppleId"
          SettingName="Find My"
        />
      </div>
    );
  } else {
    const props = (
      <>
        <LoadingSpinner />{" "}
      </>
    );
    return (
      <div>
        <SettingDefault
          props={props}
          option="< AppleId"
          SettingName="Find My"
        />
      </div>
    );
  }
}

export default Find;
