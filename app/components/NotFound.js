import React from "react";
import { View, Text } from "react-native";
import { fonts } from "./css";

const NotFound = ({ label }) => {
  return label ? (
    <View className="h-72 flex items-center justify-end mx-auto">
      <Text className="text-sm">{label}</Text>
    </View>
  ) : (
    <View className="h-72 flex items-center justify-end mx-auto">
      <Text style={{ fontFamily: fonts.regular }}>
        {"Sorry, No Offers Found!"}
      </Text>
      <Text style={{ fontFamily: fonts.regular }}>Double Check Soon! </Text>
      <Text
        style={{ fontFamily: fonts.bold }}
        className="tracking-widest text-2xl mt-3"
      >
        404!{" "}
      </Text>
    </View>
  );
};

export default NotFound;
