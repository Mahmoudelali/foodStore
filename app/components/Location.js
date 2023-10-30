import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { fonts } from "./css";

const Location = () => {
  return (
    <View className="flex flex-row  gap-x-5  pl-4 pt-3">
      <View>
        <Text style={{ fontFamily: fonts.regular }} className="mb-2">
          Phone Numbers
        </Text>
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-xs text-gray-400"
        >
          +961 76 000000
        </Text>
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-xs text-gray-400"
        >
          +961 76 000000
        </Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.regular }} className="mb-2">
          Phone Numbers
        </Text>
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-xs text-gray-400"
        >
          +961 76 000000
        </Text>
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-xs text-gray-400"
        >
          +961 76 000000
        </Text>
      </View>
    </View>
  );
};

export default Location;
