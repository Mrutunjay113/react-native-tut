import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/greet";
import NameComponent from "@/app/components/NameComponent";
import AgeComp from "@/app/components/AgeComp";
import XHandleComp from "@/app/components/XHandleComp";

const index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComp />
      <XHandleComp />
    </View>
  );
};

export default index;
