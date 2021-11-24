import React from "react";
import { View, Text } from "react-native";

export default function Line({color}) {
  return (
    <View
      style={{
        width: "100%",
        padding: 20,
      }}
    >
      <View
        style={{
          height: 3,
          backgroundColor: color.topBorder,
          borderRadius: 30,
        }}
      ></View>
    </View>
  );
}
