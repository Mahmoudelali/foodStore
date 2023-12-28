import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { fonts } from "./css";

const BasketItem = ({
  image,
  highlights,
  placeName,
  price,
  location,
  pressHandler,
}) => {
  const main_picture = image;

  return (
    <Pressable onPress={pressHandler} className="p-2">
      <View className="flex flex-row h-28 bg-white p-2 ">
        <View className=" w-[30%] h-30 ">
          <Image
            source={{
              uri: main_picture,
            }}
            alt="food image"
            resizeMode={"cover"}
            style={styles.imageStyles}
          />
        </View>

        <View className="ml-1 px-1 basis-[65%] flex justify-evenly">
          <Text style={{ fontFamily: fonts.regular }}>$ {price}</Text>
          <View className="self-start">
            <Text
              style={{ fontFamily: fonts.regular }}
              className="text-xs text-gray-500"
            >
              {highlights}
            </Text>
            <Text>
              <Text
                style={{ fontFamily: fonts.regular }}
                className="text-md text-accent-100 uppercase pr-2"
              >
                {placeName} - {" "}
              </Text>
              <Text
                style={{ fontFamily: fonts.regular }}
                className="text-sm text-gray-500"
              >
                {location}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default BasketItem;
