import { View, Text } from "react-native";
import React from "react";
import Greet from "../components/greet";
import NameComponent from "@/src/components/NameComponent";
import AgeComp from "@/src/components/AgeComp";
import XHandleComp from "@/src/components/XHandleComp";
import ButtonComp from "@/src/components/ButtonComp";
import ImageComp from "@/src/components/ImageComp";
import ProfileCard from "@/src/components/ProfileCard";
import DynamicContent from "../components/DynamicContent";
import CarComponent from "../components/CarComponent";

const index = () => {
  return (
    <View style={{ margin: 20, padding: 20 }}>
      {/* <NameComponent />
      <AgeComp />
      <XHandleComp />
      <ButtonComp />
      <ImageComp /> */}
      {/* <ProfileCard /> */}
      {/* <DynamicContent /> */}
      <CarComponent
        name="bugatti"
        price={100000}
        rating={5}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGShGkQb3Dcbv4GExkA2gOgZzdOdaGekJeNQ&s"
        }
        desc="Fastest car in the world"
      />
    </View>
  );
};

export default index;
