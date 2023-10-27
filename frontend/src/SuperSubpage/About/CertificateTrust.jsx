import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import ToogleSwitch from "../../ReusableComponent/Toggle";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function CertificateTrust() {
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
          title="Trust Store Version "
          data="2023032800"
          hr="yes"
        />
        <DataInMainComponant title="Trust Asset Version" data="1002" />
      </>,
      <>
        <DataInMainComponant
          title="Apple Root Certificate Authority"
          hr="yes"
          data={<ToogleSwitch newData={data.data[0]} label="AppleRoot" />}
        />
        <DataInMainComponant
          title="Apple Root CA - G3"
          hr="yes"
          data={<ToogleSwitch newData={data.data[0]} label="G3" />}
        />
        <DataInMainComponant
          title="Apple Root CA - G2"
          hr="yes"
          data={<ToogleSwitch newData={data.data[0]} label="G2" />}
        />
        <DataInMainComponant
          title="AAA Certificate Services"
          data={<ToogleSwitch newData={data.data[0]} label="AAA" />}
        />
      </>,
    ];

    const props = (
      <>
        <MainComponants mainData={mainData[0]} />
        <TextBwnMainComponant text="Some certificate settings are enforced by RummyWealth" />
        <TextBwnMainComponant text="ENABLE FULL TRUST FOR ROOT CERTIFICATES" />
        <MainComponants mainData={mainData[1]} />
        <TextBwnMainComponant text="Learn more about trusted certificates." />
      </>
    );

    return (
      <SettingDefault
        props={props}
        option="< About "
        SettingName="Certificate Trust Settings"
      />
    );
  } else {
    const props = (
      <>
        <LoadingSpinner />
      </>
    );

    return (
      <SettingDefault
        props={props}
        option="< About "
        SettingName="Certificate Trust Settings"
      />
    );
  }
}

export default CertificateTrust;
