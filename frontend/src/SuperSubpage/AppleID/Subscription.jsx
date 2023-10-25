import React from "react";
import SettingDefault from "../../Pages/SettingDefault";

function Subscription() {
  const props = (
    <>
      <br />
      <br />
      <h3>You do not have any subscriptions</h3>
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="Apple ID"
        SettingName="Subscriptions"
      />
    </div>
  );
}

export default Subscription;
