import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import { useState,useEffect } from "react";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
function Password() {

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
      <DataInMainComponant title="Change Password" />
    </>,
    <>
      <DataInMainComponant title="Sign in with Apple" data=">" />
    </>,
    <>
      <DataInMainComponant title="Two -factor Authenticaaation" data="on" />
    </>,
    <>
      <DataInMainComponant title="+91 70897 19195" />
    </>,
    <>
      <DataInMainComponant title="Security Keys" data="Set up >" />
    </>,
    <>
      <DataInMainComponant title="Get Verification Code" />
    </>,
    <>
      <DataInMainComponant title="Account Recovery" data="set up >" />
    </>,
    <>
      <DataInMainComponant title="Legacy Contact" data="set up >" />
    </>,
    <>
      <DataInMainComponant
        title="Automatic Verification"
        data={<ToggleSwitch newData={data.data[0]} label="Verify" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="Your Apple ID can be used to sign in to apps and websites" />

      <MainComponants mainData={mainData[2]} />

      <TextBwnMainComponant text="Uour trusted devices and phone numbers are used to verify your identity when signing in" />

      <TextBwnMainComponant text="TRUSTED PHONE NUMBER" />

      <MainComponants mainData={mainData[3]} />
      <TextBwnMainComponant text="Trusted phone numbers are used to verify your identity when signing in and help recover your account if you have forgotten your password." />

      <MainComponants mainData={mainData[4]} />

      <TextBwnMainComponant text="Physical security keys provide a strong form of two-factor authentication against phishing and unauthorised access to your account.  " />

      <MainComponants mainData={mainData[5]} />

      <TextBwnMainComponant text="Get a verification code to sign in on another devise or at iCloud.com" />

      <MainComponants mainData={mainData[6]} />
      <TextBwnMainComponant text="If you forget your password or device passcode,you have a few options to recover your data." />

      <MainComponants mainData={mainData[7]} />
      <TextBwnMainComponant text="A legacy contact is someone you trust to have accessto thr data in your account after your death." />

      <MainComponants mainData={mainData[8]} />
      <TextBwnMainComponant text="Bypass CAPTCHAs in apps,and on the web by allowing iCloud to automatically and privately verify your device and account." />
      <br />
      <br />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< AppleID"
        SettingName="Password & Security"
      />
    </div>
  );
  }
  else{
    const mainData = [
      <>
        <DataInMainComponant title="Change Password" />
      </>,
      <>
        <DataInMainComponant title="Sign in with Apple" data=">" />
      </>,
      <>
        <DataInMainComponant title="Two -factor Authenticaaation" data="on" />
      </>,
      <>
        <DataInMainComponant title="+91 70897 19195" />
      </>,
      <>
        <DataInMainComponant title="Security Keys" data="Set up >" />
      </>,
      <>
        <DataInMainComponant title="Get Verification Code" />
      </>,
      <>
        <DataInMainComponant title="Account Recovery" data="set up >" />
      </>,
      <>
        <DataInMainComponant title="Legacy Contact" data="set up >" />
      </>,
      <>
        <DataInMainComponant
          title="Automatic Verification"
          data={<ToggleSwitch label="Verify" />}
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
          option="< AppleID"
          SettingName="Password & Security"
        />
      </div>
    );
  }
}

export default Password;
