import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import AppleID from "../../Components/AppleId";
function Payment() {
  const mainData = [
    <>
      <AppleID name="UPI" description="For Purchases and Adding Funds" />
      <AppleID name="Net Banking" description="For Adding Funds" />
    </>,
    <>
      <AppleID name="UPI ID" />
    </>,
    <>
      <AppleID name="Pawan Patidar" description="Kheda Sitmau MP IND" />
    </>,
  ];
  const props = (
    <>
      <TextBwnMainComponant text="PAYMENT METHOD" />
      <TextBwnMainComponant text="You will not be charged until you make a purchase" />

      <MainComponants mainData={mainData[0]} />
      <MainComponants mainData={mainData[1]} />
      <TextBwnMainComponant text="BILLING ADDRESS" />
      <MainComponants mainData={mainData[2]} />
      <TextBwnMainComponant text="You can use multiple payment methods with your Apple ID. " />

      <TextBwnMainComponant text="You authorise Apple to charge this default payment method for paid transactions,and if there is a problem, your next eligible payment methods." />

      <TextBwnMainComponant text="If you are a Family Oraganiser with Purchases Sharing enables, your eligible payment methods may be shared for family member purchases." />
    </>
  );
  return (
    <div>
      <SettingDefault props={props} option="Back" SettingName="Add Payment" />
    </div>
  );
}

export default Payment;
