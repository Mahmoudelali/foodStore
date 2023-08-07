import React from "react";
import { Alert, Pressable } from "react-native";
import { View, StyleSheet, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import food from "../images/food.webp";
const iconStyles = {
  size: 26,
  color: "#13d0ca",
};

const ReservedBox = ({
  restoName,
  offer,
  initialPrice,
  dealPrice,
  navigation,
}) => {
  return (
    <Pressable
      onPress={() => Alert.alert("hi")}
      className="p-1 flex flex-row w-[95%] min-h-[90] m-auto mt-[7%]  bg-white "
    >
      <View className="basis-[30%] max-h-[100]">
        <Image
          source={food}
          alt="food image"
          resizeMode={"cover"}
          style={styles.imageStyles}
        />
      </View>

      <View className="ml-1 px-1 basis-[65%] mt-2">
        <View className="flex-row ">
          <Text className="text-[14px] leading-8 text-gray-400">
            Deal Price {"    "}
          </Text>
          <Text>
            <Text className="line-through decoration-black text-gray-400 leading-8">
              $ 100
            </Text>
            {"  "}
            {}
            <Text className="text-accent-100">$ 80</Text>
          </Text>
        </View>
        <View className="self-start ">
          <Text className="text-[13px] font-normal">
            20% discount on sea food dishes
          </Text>
          <Text>
            <Text className="text-[12px]  text-accent-100  font-semibold ">
              Society Bistro
            </Text>
            <Text className="text-[10px] text-gray-400 ">
              {" "}
              Saifi Sultes,Achrafieh
            </Text>
          </Text>
        </View>
      </View>
      <View className="flex justify-center items-center basis-[7%]  ml-auto">
        <MaterialIcons name="keyboard-arrow-right" {...iconStyles} />
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

export default ReservedBox;
