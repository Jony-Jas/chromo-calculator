import { DeviceMotion } from "expo-sensors";
import { useState, useEffect } from "react";

export default () => {
  const colors = [
    {
      name: "brown",
      bgColor: "#C25050",
      mainText: "#FFFFFF",
      topBorder: "#FF8989",
      sideText: "#FFA2A2",
      sideBg: "#9E3234",
    },
    {
      name: "black",
      bgColor: "#3D3D3D",
      mainText: "#FFFFFF",
      topBorder: "#707070",
      sideText: "#BFBFBF",
      sideBg: "#282828",
    },
  ];
  const [color, setColor] = useState({
    name: "black",
    bgColor: "#3D3D3D",
    mainText: "#FFFFFF",
    topBorder: "#707070",
    sideText: "#BFBFBF",
    sideBg: "#282828",
  });
  const [count, setCount] = useState(0);
  if (DeviceMotion.isAvailableAsync()) {
    console.log("DeviceMotion is available");
    DeviceMotion.setUpdateInterval(300);
    DeviceMotion.addListener(({ acceleration }) => {
      // console.log(acceleration.x);
      if (acceleration.x > 10) {
        console.log(acceleration.x);
        if (count === 1) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
        setColor(colors[0 + count]);
      }
    });
  }
  // useEffect(() => {
  //   return () => {
  //     console.log("DeviceMotion Ended");
  //   };
  // });

  return [color];
};
