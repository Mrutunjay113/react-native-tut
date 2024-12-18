import { View, Text, Pressable } from "react-native";
import React from "react";

const ButtonComp = () => {
  return (
    <View>
      <Pressable onPress={() => console.log("Button pressed")}>
        <Text
          style={{
            backgroundColor: "#f0f0f0",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          Press me
        </Text>
      </Pressable>
      //on press in
      <Pressable
        onPressIn={() => console.log("Button pressed in")}
        onPressOut={() => console.log("Button pressed out")}
      >
        <Text
          style={{
            backgroundColor: "#f0f0f0",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          Press in and out
        </Text>
      </Pressable>
      //on long press
      <Pressable onLongPress={() => console.log("Button long pressed")}>
        <Text
          style={{
            backgroundColor: "#f0f0f0",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          Long Press me
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonComp;
