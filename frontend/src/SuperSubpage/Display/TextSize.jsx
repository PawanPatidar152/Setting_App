import React from "react";
import SettingDefault from "../../Pages/SettingDefault";
import MainComponants from "../../Components/MainComponants";
import TextBwnMainComponant from "../../ReusableComponent/TextBwnMainComponant";
import Slider from "../../ReusableComponent/Slider";
import image1 from "../../assets/SmallA.png";
import image2 from "../../assets/BIgA.png";
import LoadingSpinner from "../../ReusableComponent/LoadingSpinner";
import { useEffect, useState } from "react";
function Text() {
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
        <Slider
          newData={data.data[0]}
          label="TextSlider"
          image1={image1}
          image2={image2}
        />
      </>,
    ];

    const props = (
      <>
        <TextBwnMainComponant text="Apps that support Dynamic Type will adjust to your peferred reading size below." />
        <br></br>
        <MainComponants mainData={mainData[0]} />
      </>
    );

    return (
      <SettingDefault props={props} option="< Back " SettingName="Text Size" />
    );
  } else {
    const props = (
      <>
        <LoadingSpinner />
      </>
    );

    return (
      <SettingDefault props={props} option="< Back " SettingName="Text Size" />
    );
  }
}

export default Text;
