import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
export default function Contact({ navigation }) {
  return (
    <View className="bg-white mt-5">
      <StatusBar backgroundColor="#13d0ca" />
      <View className="flex-col items-center p-6">
        <MaterialIcons name="email" size={60} color="#13d0ca" />
        <Text className="text-lg p-4 font-normal">Hello@coupway.com</Text>
        <View className="absolute bottom-0  h-[1] w-[90%] bg-gray-400 ml-5" />
      </View>
      <View className="flex-col items-center p-6">
        <Entypo name="old-phone" size={60} color="#13d0ca" />
        <Text className="text-lg  font-normal mt-[5%]">+961 1 689 448</Text>
        <Text className="text-lg  font-normal">+961 1 689 448</Text>
      </View>
    </View>
  );
}
