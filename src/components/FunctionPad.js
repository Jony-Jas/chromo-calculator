import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import redButtonBlack from "../../assets/button-red-black.png";
import redButtonBrown from "../../assets/button-red-brown.png";
import blackButton from "../../assets/button-black.png";
import brownButton from "../../assets/button-brown.png";

export default function FunctionPad({ setData, color }) {
  const styles = StyleSheet.create({
    mainText: {
      color: color.sideText,
      fontSize: 35,
      textAlign: "center",
      marginBottom: 20,
      position: "relative",
      top: 7,
    },
  });
  const button = () => {
    if (color.name === "black") {
      return "blackButton";
    }
  };
  return (
    <View
      style={{
        backgroundColor: color.sideBg,
        width: 60,
        borderRadius: 30,
        paddingVertical: 0,
        paddingHorizontal: 3,
        position: "relative",
        bottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => setData("/")}>
        <ImageBackground
          source={color.name === "black" ? blackButton : color.name === "black" ? blackButton : brownButton}
          resizeMode="contain"
          style={{}}
        >
          <Text style={styles.mainText}>/</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setData("*")}>
        <ImageBackground source={color.name === "black" ? blackButton : brownButton} resizeMode="contain" style={{}}>
          <Text style={styles.mainText}>x</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setData("-")}>
        <ImageBackground source={color.name === "black" ? blackButton : brownButton} resizeMode="contain" style={{}}>
          <Text style={styles.mainText}>-</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setData("+")}>
        <ImageBackground source={color.name === "black" ? blackButton : brownButton} resizeMode="contain" style={{}}>
          <Text style={styles.mainText}>+</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setData("=")}>
        <ImageBackground source={color.name === "black" ? redButtonBlack : redButtonBrown} resizeMode="contain" style={{}}>
          <Text style={styles.mainText}>=</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
