import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import { useEffect,useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function KeyboardFeedback() {
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
        title="Sound"
        data={<ToggleSwitch newData={data.data[0]} label="Sound" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Haptic"
        data={<ToggleSwitch newData={data.data[0]} label="Haptic" />}
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
    </>
  );

  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Keyboard Feedback"
      />
    </div>
  );
  }
  else{
    const mainData = [
      <>
        <DataInMainComponant
          title="Sound"
          data={<ToggleSwitch label="Sound" />}
        />
      </>,
      <>
        <DataInMainComponant
          title="Haptic"
          data={<ToggleSwitch label="Haptic" />}
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
          SettingName="Keyboard Feedback"
        />
      </div>
    );
  }
}

export default KeyboardFeedback;
