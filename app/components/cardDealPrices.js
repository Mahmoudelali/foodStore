import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { fonts } from "./css";

const CardDealPrices = ({ old_price, new_price }) => {
  return (
    <View className="flex-row items-center">
      <Text
        style={{ fontFamily: fonts.regular }}
        className="text-sm leading-8 text-gray-400"
      >
        Deal Price {"    "}
      </Text>
      <Text>
        <Text
          style={{ fontFamily: fonts.light }}
          className="line-through decoration-black text-gray-400 leading-8 text-sm"
        >
          ${old_price}
        </Text>
        {"  "}
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-accent-100 text-sm"
        >
          ${new_price}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardDealPrices;
