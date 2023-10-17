import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import DataInMainComponant from "../../ReusableComponent/DataInMainComponant";
import MainComponants from "../../Components/MainComponants";
import ToggleSwitch from "../../ReusableComponent/Toggle";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import Logoplusname from "../../ReusableComponent/logoplusname";
import family from "../../assets/family.jpg";

function MobiledataFunction() {
  const props1 = [
    <>
      <DataInMainComponant
        title="Mobile Data"
        data={<ToggleSwitch label="MObile" />}
      />

      <DataInMainComponant title="Mobile Data Options" data="Roaming On" />

      <DataInMainComponant title="Personal Hotspot" data="On >" />
    </>,
    <>
      <DataInMainComponant title="Mobile Plans" data="6 Plans >" />
      <DataInMainComponant title="Network Selection" data="JIO 4G" />
      <DataInMainComponant title="Wi-Fi Calling" data="OFF >" />
      <DataInMainComponant title="Usage" data=">" />
      <DataInMainComponant title="Network Provider Services" data=">" />
      <DataInMainComponant title="SIM PIN" data=">" />
    </>,
    <>
      <DataInMainComponant title="Add eSIM" />
    </>,
    <>
      <Logoplusname
        image={family}
        label="Instagram"
        data={<ToggleSwitch label="Insta" />}
      />
      <Logoplusname image={family} label="Personal Hotspot" data="1.9 GB >" />
      <Logoplusname
        image={family}
        label="Chrome"
        data={<ToggleSwitch label="Chrome" />}
      />
      <Logoplusname
        image={family}
        label="Whatsapp"
        data={<ToggleSwitch label="Whatsapp" />}
      />
      <Logoplusname
        image={family}
        label="App Store"
        data={<ToggleSwitch label="AppStore" />}
      />
      <Logoplusname image={family} label="Uninstalled App" data="392 MB" />
    </>,
  ];
  const props = (
    <>
      <br />
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Turn off mobile data to restrict all data to Wi-Fi,including email,web browsing,and push notifications.  " />
      <br />
      <TextBwnMainComponant text="JIO" />
      <MainComponants props1={props1[1]} />
      <br />
      <MainComponants props1={props1[2]} />
      <TextBwnMainComponant text="MOBILE DATA" />
      <MainComponants props1={props1[3]} />
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Settings"
        SettingName="Mobile Data"
      />
    </div>
  );
}

export default MobiledataFunction;
