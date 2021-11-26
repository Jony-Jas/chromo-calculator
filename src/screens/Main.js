import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Keypad from "../components/Keypad";
import TextArea from "../components/TextArea";
import Line from "../components/Line";
import { StatusBar } from "expo-status-bar";
import ModelScreen from "../components/ModelScreen";

export default function Main({ color }) {
  const [data, setData] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <ModelScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View
        style={{
          backgroundColor: color.bgColor,
          flex: 1,
          alignItems: "center",
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={color.bgColor}
          barStyle="light-content"
        />

        <View
          style={{
            marginTop: 30,
            width: "100%",
            marginLeft: 30,
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View
              style={{
                width: 30,
                height: 30,
                borderWidth: 2,
                borderRadius: 50,
                borderColor: color.topBorder,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: color.topBorder,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {"?"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <TextArea data={data} setData={setData} color={color} />
        </View>
        <Line color={color} />
        <View
          style={{
            width: "100%",
          }}
        >
          <Keypad setData={setData} color={color} />
        </View>
      </View>
    </>
  );
}
