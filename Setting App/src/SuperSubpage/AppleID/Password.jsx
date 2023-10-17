import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Password() {
  const props1 = [
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
        data={<ToggleSwitch label="Verfy" />}
      />
    </>,
  ];
  const props = (
    <>
      <br />
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="Your Apple ID can be used to sign in to apps and websites" />
      <br />
      <MainComponants props1={props1[2]} />

      <TextBwnMainComponant text="Uour trusted devices and phone numbers are used to verify your identity when signing in" />
      <br />
      <TextBwnMainComponant text="TRUSTED PHONE NUMBER" />
      <br />
      <MainComponants props1={props1[3]} />
      <TextBwnMainComponant text="Trusted phone numbers are used to verify your identity when signing in and help recover your account if you have forgotten your password." />
      <br />
      <MainComponants props1={props1[4]} />

      <TextBwnMainComponant text="Physical security keys provide a strong form of two-factor authentication against phishing and unauthorised access to your account.  " />
      <br />
      <MainComponants props1={props1[5]} />

      <TextBwnMainComponant text="Get a verification code to sign in on another devise or at iCloud.com" />
      <br />
      <MainComponants props1={props1[6]} />
      <TextBwnMainComponant text="If you forget your password or device passcode,you have a few options to recover your data." />
      <br />
      <MainComponants props1={props1[7]} />
      <TextBwnMainComponant text="A legacy contact is someone you trust to have accessto thr data in your account after your death." />
      <br />
      <MainComponants props1={props1[8]} />
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

export default Password;
