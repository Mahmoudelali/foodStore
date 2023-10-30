import { View, Text, Pressable } from "react-native";
import React from "react";
import { fonts } from "../components/css";

const Option = ({ optionName, option, navigation }) => (
  <Pressable onPress={navigation}>
    <View className="flex flex-row py-3 pl-10">
      <View>
        <Text className=" tracking-[1] font-normal">{optionName}</Text>
        <Text className="  tracking-[1] text-gray-400">{option}</Text>
      </View>
    </View>
    <View className="absolute bottom-0  h-[1] w-[100%] bg-gray-300" />
  </Pressable>
);
export default function AppSetting({ navigation }) {
  const optionsStore = [
    {
      optionName: "Country",
      option: "Lebanon",
    },
    {
      optionName: "Change Currency",
      option: "USD",
    },
    {
      optionName: "Change Sizes",
      option: "UK",
    },
  ];
  const optionsOther = [
    {
      optionName: "Clear search history",
    },
    {
      optionName: "Rate this app",
    },
  ];
  const optionsAbout = [
    {
      optionName: "Build version",
      option: "4.0.3 (224)",
    },
    {
      optionName: "Build Time",
      option: "2017-10-20 02:20:15 ",
    },
  ];
  return (
    <View>
      <View className="mt-[5%] bg-white">
        <Text
          style={{ fontFamily: fonts.regular }}
          className="py-3 pl-10 font-semibold"
        >
          Store Setup
        </Text>
        {optionsStore.map((options, index) => (
          <Option index={index} {...options} key={index} />
        ))}
      </View>
      <View className="mt-[5%] bg-white">
        <Text
          style={{ fontFamily: fonts.regular }}
          className="py-3 pl-10 font-semibold"
        >
          Other
        </Text>
        {optionsOther.map((options, index) => (
          <Option index={index} {...options} key={index} />
        ))}
      </View>
      <View className="mt-[5%] bg-white">
        <Text
          style={{ fontFamily: fonts.regular }}
          className="py-3 pl-10 font-semibold"
        >
          About
        </Text>
        {optionsAbout.map((options, index) => (
          <Option
            key={index}
            index={index}
            {...options}
            navigate={() => navigation.openDrawer()}
          />
        ))}
      </View>
    </View>
  );
}
