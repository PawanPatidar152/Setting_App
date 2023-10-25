import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
function Name() {
  const props1 = [
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
        data={<ToggleSwitch label="Announcement" />}
      />
    </>,
    <>
      <DataInMainComponant
        title="Apps,music,TV and more"
        data={<ToggleSwitch label="Music" />}
      />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="EMAIL & PHONE NUMBERS " />

      <MainComponants props1={props1[1]} />
      <TextBwnMainComponant text="These email addressess and phone numbers can be used to sign in . They can also be used to reach you with  imassage ,FaceTime,Game Center and more." />

      <MainComponants props1={props1[2]} />
      <TextBwnMainComponant text="SUBSCRIPTIONS" />

      <MainComponants props1={props1[3]} />
      <TextBwnMainComponant text="Receive apple emails and communications including announcements,marketing,recommendations and updates about Apple products,services,and software. " />

      <MainComponants props1={props1[4]} />
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

export default Name;
