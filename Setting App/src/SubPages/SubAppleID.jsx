import React from "react";
import SettingDefault from "../Pages/SettingDefault";
import DataInMainComponant from "../ReusableComponent/DataInMainComponant";
import MainComponants from "../Components/MainComponants";
import Logoplusname from "../ReusableComponent/logoplusname.jsx";
import iCloud from "../assets/icloud.jpg";
import media from "../assets/media.jpg";
import find from "../assets/find.jpg";
import family from "../assets/family.jpg";
import AppleID from "../Components/AppleId";
import AppleID1 from "../ReusableComponent/AppleIDVerical";
import pawan from "../assets/pawan.jpeg";
import iphoneClone from '../assets/IphoneClone.jpg'
function AppleIDDes() {
  const logout = (
    <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
      SIGN OUT
    </p>
  );

  const props1 = [
    <>
      <AppleID1
        name="Pawan Patidar"
        description="+91 7089719195"
        image={pawan}
      />
    </>,
    <>
      <DataInMainComponant
        title="Name,Phone Numbers,Email"
        data=">"
        link="/Name"
      />
      <DataInMainComponant
        title="Password Security"
        data=">"
        link="/Password"
      />
      <DataInMainComponant
        title="Payment & Shipping"
        data="None  >"
        link="/Payment"
      />
      <DataInMainComponant
        title="Subscriptions"
        data=">"
        link="/Subscription"
      />
    </>,
    <>
      <Logoplusname image={iCloud} label="iCloud" data="5 GB " />
      <Logoplusname image={media} label="Media & Purchases" data=" " />
      <Logoplusname image={find} label="Find My" data=">" link="/Find" />
      <Logoplusname
        image={family}
        label="Family Sharing"
        data="Learn More... >"
        link="/Family"
      />
    </>,
    <>
      <AppleID
        name="Pawan's Iphone 12"
        description="This Iphone 12"
        data=">"
        image={iphoneClone}
        link="/Pawan"
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <MainComponants props1={props1[1]} />
      <MainComponants props1={props1[2]} />
      <MainComponants props1={props1[3]} />
      <MainComponants props1={logout} />
    </>
  );

  return (
    <div>
      <SettingDefault props={props} option="< Setting" SettingName="Apple ID" />
    </div>
  );
}

export default AppleIDDes;
