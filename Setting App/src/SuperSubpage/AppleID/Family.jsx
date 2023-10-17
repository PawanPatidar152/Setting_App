import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
function Family() {
  const props = (
    <>
      <br />
      <br />
      <h3>Not shared......</h3>
    </>
  );
  return (
    <div>
      <SettingDefault
        props={props}
        option="< Back"
        SettingName="Family Sharing"
      />
    </div>
  );
}

export default Family;
