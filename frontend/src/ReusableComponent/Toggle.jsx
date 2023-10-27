import "./Toggle.css";
import React, { useState, useEffect } from "react";

function ToggleSwitch(props) {
// console.log(props)

const [isToggled, setIsToggled] = useState(false);
useEffect(()=>{
  if(props.newData){
    // console.log(props.label)
  setIsToggled(props.newData[props.label])
  }
},[props])




// console.log("data in Airplane Toggle",newData.newData)
// const label1={label}
// console.log(label1,{label})
// if(newData.newData){
//   console.log(newData.newData[label1])
// }



  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    updateDataInAPI("653647b1726802028745bf3b", !isToggled, props.label);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:5555/toggle", {
  //         method: "GET",
  //       });

  //       const data = await response.json();
  //       setIsToggled(data.data[0][label]);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
//   // }, []);
// console.log(newData.newData[label])
//   useEffect(()=>{
//     setIsToggled(newData.newData[label]);
//   },[])

  const updateDataInAPI = async (id, updatedValue, label) => {
    await fetch(`http://localhost:5555/toggle/${id}`, {
      body: JSON.stringify({ [label]: updatedValue }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error("Error updating data: " + error));
  };

  return (
    <>
      <div className="container">
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name={props.label}
            checked={isToggled}
            onChange={handleToggleChange}
            id={props.label}
          />
          <label className="label" htmlFor={props.label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
