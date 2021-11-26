import React from "react";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import Main from "./src/screens/Main";
import { SafeAreaView } from "react-native";
import useShake from "./src/hooks/useShake";

export default function App() {
  const [color] = useShake();
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Main color={color} />
    </SafeAreaView>
  );
}
