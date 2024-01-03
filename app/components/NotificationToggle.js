import React from "react";
import { View, Text } from "react-native";
import Switcher from "./Switcher";
import { fonts } from "./css";

const NotificationToggle = () => {
  return (
    <View className="flex flex-row items-center py-1">
      <Switcher />
      <Text
        style={{ fontFamily: fonts.regular }}
        className="ml-2 text-xs text-gray-400"
      >
        Notify me on similar offers
      </Text>
    </View>
  );
};

export default NotificationToggle;
