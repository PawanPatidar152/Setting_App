import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import { useState,useEffect  } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function Night() {
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
        title="Sheduled"
        data={<ToggleSwitch newData={data.data[0]} label="Scheduled" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Manually Enable Until Tommorow"
        data={<ToggleSwitch newData={data.data[0]} label="Manually" />}
      />
    </>,
  ];

  const props = (
    <>
      <TextBwnMainComponant text="Night shift automatically shifts the colours of your display to the warmer end of the colour spectrum after dark. This may help you get a better night's sleep." />
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
    </>
  );

  return (
    <SettingDefault props={props} option="< Back " SettingName="Night shift" />
  );}
  else{

    const mainData = [
      <>
        <DataInMainComponant
          title="Sheduled"
          data={<ToggleSwitch label="Scheduled" />}
        />
      </>,
      <>
        <DataInMainComponant
          title="Manually Enable Until Tommorow"
          data={<ToggleSwitch label="Manually" />}
        />
      </>,
    ];
  
    const props = (
      <>
       <LoadingSpinner/>
      </>
    );
  
    return (
      <SettingDefault props={props} option="< Back " SettingName="Night shift" />
    );
  }
}

export default Night;
