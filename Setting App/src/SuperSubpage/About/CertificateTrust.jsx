import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import ToogleSwitch from "../../ReusableComponent/Toggle";
function CertificateTrust() {
  const props1 = [
    <>
      <DataInMainComponant title="Trust Store Version " data="2023032800" />
      <DataInMainComponant title="Trust Asset Version" data="1002" />
    </>,
    <>
      <DataInMainComponant
        title="Apple Root Certificate Authority"
        data={<ToogleSwitch label="AppleRoot" />}
      />
      <DataInMainComponant
        title="Apple Root CA - G3"
        data={<ToogleSwitch label="G3" />}
      />
      <DataInMainComponant
        title="Apple Root CA - G2"
        data={<ToogleSwitch label="G2" />}
      />
      <DataInMainComponant
        title="AAA Certificate Services"
        data={<ToogleSwitch label="AAA" />}
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Some certificate settings are enforced by RummyWealth" />
      <TextBwnMainComponant text="ENABLE FULL TRUST FOR ROOT CERTIFICATES" />
      <MainComponants props1={props1[1]} />
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
}

export default CertificateTrust;
