import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Keypad from "../components/Keypad";
import TextArea from "../components/TextArea";
import Line from "../components/Line";

export default function Main({ color }) {
  const [data, setData] = React.useState("");
  return (
    <View
      style={{
        backgroundColor: color.bgColor,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: color.topBorder,
          marginTop: 30,
          fontWeight: "bold",
        }}
      >
        CALCULATOR
      </Text>
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <TextArea data={data} setData={setData} />
      </View>
      <Line color={color}/>
      <View
        style={{
          width: "100%",
        }}
      >
        <Keypad setData={setData} color={color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
});
