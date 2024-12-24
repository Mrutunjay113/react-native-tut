import { View, Text } from "react-native";
import React from "react";

export default function DynamicContent() {
  const username = "John Doe";
  const multiply = (a: number, b: number) => a * b;
  return (
    <View>
      <Text>My Name is {username}</Text>
      <Text>2 * 3 = {multiply(2, 3)}</Text>
    </View>
  );
}
