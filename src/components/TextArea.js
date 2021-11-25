import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";

export default function TextArea({ data, setData, color }) {
  const [topText, setTopText] = React.useState("");
  const [text, setText] = React.useState("");
  const [animate, setAnimation] = React.useState(false);
  useEffect(() => {
    switch (data) {
      case "C":
        setText("");
        setAnimation(false);
        setTopText("");
        break;
      case "<<":
        const deletedText = text.slice(0, text.length - 1);
        setText(deletedText);
        break;
      case "+/-":
        if (text.charAt(0) === "+") {
          setText(text.replace("+", "-"));
        } else if (text.charAt(0) === "-") {
          setText(text.replace("-", "+"));
        } else {
          setText("-" + text);
        }
        break;
      case "=":
        setTopText(text);
        setAnimation(true);
        setText(eval(text));
        break;
      default:
        setText(text + data);
        break;
    }
    return setData("");
  }, [data]);
  return (
    <View>
      {animate ? (
        <Animatable.Text
          animation="slideInRight"
          style={{ fontSize: 30, textAlign: "right", color: color.sideText }}
        >
          {topText}
        </Animatable.Text>
      ) : null}
      <Text style={{ fontSize: 52, textAlign: "right", color: "white" }}>
        {text}
      </Text>
    </View>
  );
}
