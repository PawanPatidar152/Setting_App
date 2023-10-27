import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import { useState,useEffect } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function HeadphoneSafety() {

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
  if (data && data.data[0]){
  const mainData = [
    <>
      <DataInMainComponant
        title="Headphone Notification"
        data={<ToggleSwitch newData={data.data[0]} label="Headphone" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Reduce Loud Sounds"
        data={<ToggleSwitch newData={data.data[0]} label="ReduceLoud" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <TextBwnMainComponant text="To protect your hearing ,your iphone will increase headphone audio levels. If you exceed the recommended 7-day limit,a notification is sent and the volume is turned down." />

      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="Your iphone can analyse headphone audio and reduce any sound that is over a set decibal level." />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Headphone Safety"
      />
    </div>
  );
}
else{
  const mainData = [
    <>
      <DataInMainComponant
        title="Headphone Notification"
        data={<ToggleSwitch label="Headphone" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Reduce Loud Sounds"
        data={<ToggleSwitch label="ReduceLoud" />}
      />
    </>,
  ];
  const props = (
    <>
      <LoadingSpinner/>
        </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Headphone Safety"
      />
    </div>
  );
}
}
export default HeadphoneSafety;
