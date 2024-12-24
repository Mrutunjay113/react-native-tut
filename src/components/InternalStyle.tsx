import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>InternalStyle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "red",
    backgroundColor: "yellow",
    fontStyle: "italic",
    margin: 20,
    padding: 20,
  },
});

export default InternalStyle;
