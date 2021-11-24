import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import FunctionPad from "./FunctionPad";

export default function Keypad({ setData, color }) {
  const styles = StyleSheet.create({
    keyPad: {
      color: color.mainText,
      fontSize: 35,
      textAlign: "center",
      marginBottom: 20,
    },
    groupcontainer: {
      width: 70,
    },
  });
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={styles.groupcontainer}>
        <TouchableOpacity onPress={() => setData("C")}>
          <Text style={styles.keyPad}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("7")}>
          <Text style={styles.keyPad}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("4")}>
          <Text style={styles.keyPad}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("1")}>
          <Text style={styles.keyPad}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData(".")}>
          <Text style={styles.keyPad}>.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groupcontainer}>
        <TouchableOpacity onPress={() => setData("+/-")}>
          <Text style={styles.keyPad}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("8")}>
          <Text style={styles.keyPad}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("5")}>
          <Text style={styles.keyPad}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("2")}>
          <Text style={styles.keyPad}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("0")}>
          <Text style={styles.keyPad}>0</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groupcontainer}>
        <TouchableOpacity onPress={() => setData("%")}>
          <Text style={styles.keyPad}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("9")}>
          <Text style={styles.keyPad}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("6")}>
          <Text style={styles.keyPad}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("3")}>
          <Text style={styles.keyPad}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setData("00")}>
          <Text style={styles.keyPad}>00</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FunctionPad setData={setData} color={color}/>
      </View>
    </View>
  );
}


