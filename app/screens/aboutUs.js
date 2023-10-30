import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { fonts } from "../components/css";

const Option = ({ optionName, icon, navigation, navigateName }) => (
  <Pressable onPress={navigation}>
    <View className="flex flex-row py-6 pl-10">
      <View className="basis-[8%] ">{icon}</View>
      <View className="flex flex-row items-center">
        <Text
          style={{ fontFamily: fonts.regular }}
          className="basis-[70%] pl-10 pb-1 tracking-[1]"
        >
          {optionName}
        </Text>
      </View>
      <View className="absolute bottom-0 right-0 h-[1] w-[80%] bg-gray-300 ml-5" />
    </View>
  </Pressable>
);

export default function About({ navigation }) {
  const staticOptions = [
    {
      optionName: "About COUPWAY",
      navigation: () => navigation.navigate("AboutCoupway"),
      icon: <Entypo name="info-with-circle" size={24} color="#13d0ca" />,
    },

    {
      optionName: "Terms & Conditions",
      navigation: () => navigation.navigate("TermsCondition"),

      icon: <FontAwesome name="pencil-square-o" size={24} color="#13d0ca" />,
    },
  ];
  return (
    <View className="bg-white mt-[5%]">
      {staticOptions.map((option, index) => (
        <Option key={index} {...option} />
      ))}
    </View>
  );
}
