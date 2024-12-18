import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/greet";
import NameComponent from "@/app/components/NameComponent";
import AgeComp from "@/app/components/AgeComp";
import XHandleComp from "@/app/components/XHandleComp";
import ButtonComp from "@/app/components/ButtonComp";
import ImageComp from "@/app/components/ImageComp";
import ProfileCard from "@/app/components/ProfileCard";

const index = () => {
  return (
    <View style={{ margin: 20, padding: 20 }}>
      {/* <NameComponent />
      <AgeComp />
      <XHandleComp />
      <ButtonComp />
      <ImageComp /> */}
      <ProfileCard />
    </View>
  );
};

export default index;
