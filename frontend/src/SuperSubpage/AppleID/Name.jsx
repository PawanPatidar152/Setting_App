import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import { useEffect,useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function Name() {
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
      <DataInMainComponant title="Name" data="Pawan Patidar" />
    </>,
    <>
      <DataInMainComponant title="+917089719195" />
    </>,
    <>
      <DataInMainComponant title="Date of birth" data="04/08/00" />
    </>,
    <>
      <DataInMainComponant
        title="Announcements"
        data={<ToggleSwitch newData={data.data[0]}  label="Announcement" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Apps,music,TV and more"
        data={<ToggleSwitch newData={data.data[0]} label="Music" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <TextBwnMainComponant text="EMAIL & PHONE NUMBERS " />

      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="These email addressess and phone numbers can be used to sign in . They can also be used to reach you with  imassage ,FaceTime,Game Center and more." />

      <MainComponants mainData={mainData[2]} />
      <TextBwnMainComponant text="SUBSCRIPTIONS" />

      <MainComponants mainData={mainData[3]} />
      <TextBwnMainComponant text="Receive apple emails and communications including announcements,marketing,recommendations and updates about Apple products,services,and software. " />

      <MainComponants mainData={mainData[4]} />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Name,Phone,Numbers,Email"
      />
    </div>
  );
  }else{
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
          SettingName="Name,Phone,Numbers,Email"
        />
      </div>
    );
  }
}

export default Name;
