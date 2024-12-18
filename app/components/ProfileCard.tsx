import { View, Text, Image, Button, Linking } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const ProfileCard = () => {
  return (
    <View style={{ gap: 20 }}>
      <Text
        style={{
          textDecorationLine: "underline",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Profile
      </Text>
      <Image
        source={require("../assets/image.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
        }}
      />
      <Text>I'm Mrutunjay Yadav</Text>
      <Text>Full stack developer</Text>

      <Button
        color={"#FF4654"}
        title="Follow on github "
        onPress={() => {
          Linking.openURL("https://github.com/Mrutunjay113");
        }}
      />
    </View>
  );
};

export default ProfileCard;
