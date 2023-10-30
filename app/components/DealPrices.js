import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { fonts } from "./css";

export const DealPrices = ({ is_hero, old_price, new_price, card_style }) => (
  <View className="self-end translate-y-4">
    <Text
      style={{ fontFamily: fonts.regular }}
      className={
        !is_hero && "text-[10px] uppercase text-right mb-0 tracking-wide"
      }
    >
      Deal Price
    </Text>
    <Text
      style={{ fontFamily: !is_hero ? fonts.light : fonts.regular }}
      className={!is_hero ? " text-[9px] font-light" : "text-sm font-bold"}
    >
      <Text
        style={{
          fontFamily: fonts.regular,
          textDecorationLine: "line-through",
        }}
        className="text-accent-100"
      >
        {old_price}$
      </Text>
      {" - "}
      <Text style={{ fontFamily: fonts.light }}>{new_price}$</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({});

export default DealPrices;
