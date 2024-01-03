import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { fonts } from "./css";

const Option = ({ optionName, icon, navigation }) => (
  <Pressable onPress={navigation}>
    <View className="flex flex-row py-3 pl-10">
      <View className="basis-[15%] ">{icon}</View>
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

const styles = StyleSheet.create({});

export default Option;
