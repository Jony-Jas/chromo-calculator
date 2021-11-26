import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

export default function ModelScreen({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>X</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Chromo Calculator
          </Text>
          <Image
            source={require("../../assets/shake.gif")}
            style={{ width: "90%", flex: 1 }}
          />
          <Text style={styles.modalText}>
            "Shake your phone to change theme"
          </Text>
          <Text style={{ fontSize: 16 }}>{"Created by Jony Jas"}</Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://jonyjas.com/")}
            >
              <Image
                alt="Jony's Website"
                width="40px"
                source={{
                  uri: "https://user-images.githubusercontent.com/74784363/143541601-3ab9695a-100a-4ad7-8d21-43cd1e4af7c7.png",
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <Text>{"    "}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/jonyj.dev/")
              }
            >
              <Image
                alt="Jony's Instagram"
                width="40px"
                source={{
                  uri: "https://camo.githubusercontent.com/e0e2aa67b4c5f3e3abdef38004756b5d17610ca6afc5598bbdf73643d613049a/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d6a75737469636f6e2d6c696e65616c2d636f6c6f722d6a75737469636f6e2f36342f3030303030302f65787465726e616c2d696e7374616772616d2d736f6369616c2d6d656469612d6a75737469636f6e2d6c696e65616c2d636f6c6f722d6a75737469636f6e2e706e67",
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <Text>{"    "}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.linkedin.com/in/jony-jas/")
              }
            >
              <Image
                alt="Jony's Linkedin"
                width="40px"
                source={{
                  uri: "https://camo.githubusercontent.com/a59e1aed12271f5241c9ec92eb781ce33d3d1bbd390e237be1076c46a1d0f67f/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d6a75737469636f6e2d6c696e65616c2d636f6c6f722d6a75737469636f6e2f36342f3030303030302f65787465726e616c2d6c696e6b6564696e2d736f6369616c2d6d656469612d6a75737469636f6e2d6c696e65616c2d636f6c6f722d6a75737469636f6e2e706e67",
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
            <Text>{"    "}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://github.com/Jony-Jas")
              }
            >
              <Image
                alt="Jony's Github"
                width="40px"
                source={{
                  uri: "https://user-images.githubusercontent.com/74784363/143543626-e49db7a9-1f22-45ac-a578-8c00adfe0b20.png",
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 50,
    padding: 5,
    alignSelf: "flex-start",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
