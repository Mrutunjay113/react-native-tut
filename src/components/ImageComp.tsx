import { View, Text, Image } from "react-native";
import React from "react";

const ImageComp = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text style={{}}>Image</Text>

      {/* Image */}

      <Image
        source={require("../assets/image.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          margin: 20,
        }}
      />
    </View>
  );
};

export default ImageComp;
