import { View, Text } from "react-native";
import React from "react";

export default function InLineStyel() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
