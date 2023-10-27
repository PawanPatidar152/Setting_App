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
import AppleIDVertical from "../ReusableComponent/AppleIDVerical";
import pawan from "../assets/pawan.jpeg";
import iphoneClone from "../assets/IphoneClone.jpg";
import { useEffect,useState } from "react";
function AppleIDDes() {

  const logout = (
    <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
      SIGN OUT
    </p>
  );

  const mainData = [
    <>
      <AppleIDVertical
        name="Pawan Patidar"
        description="+91 7089719195"
        image={pawan}
      />
    </>,
    <>
      <DataInMainComponant
        title="Name,Phone Numbers,Email"
        data=">"
        link="/Setting/AppleID/Name"
        hr="yes"
      />
      <DataInMainComponant
        title="Password Security"
        data=">"
        link="/Setting/AppleID/Password"
        hr="yes"
      />
      <DataInMainComponant
        title="Payment & Shipping"
        data="None  >"
        link="/Setting/AppleID/Payment"
        hr="yes"
      />
      <DataInMainComponant
        title="Subscriptions"
        data=">"
        link="/Setting/AppleID/Subscription"
      />
    </>,
    <>
      <Logoplusname image={iCloud} label="iCloud" data="5 GB " hr="yes" />
      <Logoplusname image={media} label="Media & Purchases" data=" " hr="yes" />
      <Logoplusname
        image={find}
        label="Find My"
        data=">"
        link="/Setting/AppleID/Find"
        hr="yes"
      />
      <Logoplusname
        image={family}
        label="Family Sharing"
        data="Learn More... >"
        link="/Setting/AppleID/Family"
      />
    </>,
    <>
      <AppleID
        name="Pawan's Iphone 12"
        description="This Iphone 12"
        data=">"
        image={iphoneClone}
        link="/Setting/AppleID/Device"
      />
    </>,
  ];

  const props = (
    <>
      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <MainComponants mainData={mainData[2]} />
      <MainComponants mainData={mainData[3]} />
      <MainComponants mainData={logout} />
    </>
  );

  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Apple ID"
      />
    </div>
  );
}

export default AppleIDDes;
