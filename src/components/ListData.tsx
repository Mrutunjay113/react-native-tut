import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["apple", "banana", "mango", "orange", "grapes"];
  //create a car  product object with name, price, rating, image, description properties all car should be different in image and other properties

  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      price: 79999,
      rating: 4.8,
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/9f8b8e1b-2b1e-4b1e-8b1e-4b1e8b1e8b1e/bvlatuR/std/2880x1800/MS-Interior-Grid-A-Desktop",
      desc: "Electric car with autopilot feature",
    },
    {
      id: 2,
      name: "BMW 3 Series",
      price: 41250,
      rating: 4.5,
      image:
        "https://www.bmwusa.com/content/dam/bmwusa/3-series/sedan/2021/overview/BMW-MY21-G20-3Series-Sedan-Overview-Stage2-Desktop.jpg",
      desc: "Luxury sedan with sporty performance",
    },
    {
      id: 3,
      name: "Audi A4",
      price: 39900,
      rating: 4.6,
      image:
        "https://www.audiusa.com/content/dam/nemo/us/models/a4/my-2021/1920x1080/1920x1080_AA4_L_181001.jpg",
      desc: "Compact executive car with advanced technology",
    },
    {
      id: 4,
      name: "Mercedes-Benz C-Class",
      price: 41900,
      rating: 4.7,
      image:
        "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my21/c/sedan/class-page/2021-C-SEDAN-CLASS-HERO-1-DR.jpg",
      desc: "Premium sedan with elegant design",
    },
    {
      id: 5,
      name: "Ford Mustang",
      price: 55995,
      rating: 4.4,
      image:
        "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/cars/mustang/2021/collections/dm/21_FRD_MST_wdmp_200505_00329.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
      desc: "Iconic muscle car with powerful engine",
    },
  ];

  return (
    <View>
      {/* <Text style={stye.textStyle}>List of fruits</Text> */}
      {/* <FlatList
        data={fruits}
        renderItem={({ item, index }) => (
          <Text style={stye.Item} key={index}>
            {item}
          </Text>
        )}
      /> */}
      <Text style={stye.textStyle}>List of Cars</Text>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item?.image }}
              style={{ width: 100, height: 100 }}
            />
            <Text style={stye.Item} key={index}>
              {item.name}
            </Text>
            <Text style={stye.price} key={index}>
              {item.price}
            </Text>
            <Text style={stye.Item} key={index}>
              {item.rating}
            </Text>
            <Text style={stye.Item} key={index}>
              {item.desc}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListData;

const stye = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    fontStyle: "normal",
    textDecorationLine: "underline",

    marginTop: 10,
    marginBottom: 10,
  },
  Item: {
    fontSize: 20,
    color: "slate",
  },
  itemWithLocation: {
    fontSize: 20,
    color: "red",
  },
  price: {
    fontSize: 20,
    color: "white",
    width: 100,
    padding: 2,

    fontWeight: "bold",
    backgroundColor: "black",
  },
});
