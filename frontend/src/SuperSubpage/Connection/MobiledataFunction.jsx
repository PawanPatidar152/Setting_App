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
        hr="yes"
        data={<ToggleSwitch label="Mobile" />}
      />

      <DataInMainComponant
        title="Mobile Data Options"
        data="Roaming On"
        hr="yes"
      />

      <DataInMainComponant title="Personal Hotspot" data="On >" />
    </>,
    <>
      <DataInMainComponant title="Mobile Plans" data="6 Plans >" hr="yes" />
      <DataInMainComponant title="Network Selection" data="JIO 4G" hr="yes" />
      <DataInMainComponant title="Wi-Fi Calling" data="OFF >" hr="yes" />
      <DataInMainComponant title="Usage" data=">" hr="yes" />
      <DataInMainComponant
        title="Network Provider Services"
        data=">"
        hr="yes"
      />
      <DataInMainComponant title="SIM PIN" data=">" />
    </>,
    <>
      <DataInMainComponant title="Add eSIM" />
    </>,
    <>
      <Logoplusname
        image={family}
        hr="yes"
        label="Instagram"
        data={<ToggleSwitch label="Instagram" />}
      />
      <Logoplusname
        image={family}
        hr="yes"
        label="Personal Hotspot"
        data="1.9 GB >"
      />
      <Logoplusname
        image={family}
        label="Chrome"
        hr="yes"
        data={<ToggleSwitch label="Chrome" />}
      />
      <Logoplusname
        image={family}
        hr="yes"
        label="Whatsapp"
        data={<ToggleSwitch label="Whatsapp" />}
      />
      <Logoplusname
        image={family}
        hr="yes"
        label="App Store"
        data={<ToggleSwitch label="AppStore" />}
      />
      <Logoplusname image={family} label="Uninstalled App" data="392 MB" />
    </>,
  ];
  const props = (
    <>
      <MainComponants props1={props1[0]} />
      <TextBwnMainComponant text="Turn off mobile data to restrict all data to Wi-Fi,including email,web browsing,and push notifications.  " />

      <TextBwnMainComponant text="JIO" />
      <MainComponants props1={props1[1]} />
      <br />
      <MainComponants props1={props1[2]} />
      <br />
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
