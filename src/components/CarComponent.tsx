import { View, Text, Image, Button } from "react-native";
import React from "react";

type CardComponentProps = {
  price: number;
  name: string;
  rating: number;
  image: string | undefined;
  desc: string;
};

type styleType = {
  card: object;
  button: object;
  name: object;
  price: object;
  rating: object;
  desc: object;
  image: object;
};

export default function CardComponent({
  price,
  name,
  rating,
  image,
  desc,
}: CardComponentProps) {
  console.log(image);
  return (
    <View style={style.card}>
      <Text>${price}</Text>
      <Image
        source={image ? { uri: image } : require("../assets/image.jpg")}
        style={style.image}
      />
      <View>
        <Text style={style.name}>{name}</Text>
        <Text style={style.rating}>{rating}</Text>
      </View>

      <Text style={style.desc}>{desc}</Text>
      <Button title="Add to Cart" />
    </View>
  );
}

const style: styleType = {
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    color: "#FF4654",
  },
  name: {
    fontSize: 20,
    fontWeight: "semibold",
  },
  price: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
  rating: {
    fontSize: 20,
    fontWeight: "normal",
  },
  desc: {
    fontSize: 20,
    fontWeight: "light",
  },
};
