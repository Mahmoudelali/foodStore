import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProductStats = ({ coupons, TimeRemaining, fullValue, price }) => {
  const data = [
    {
      title: "Coupons",
      value: coupons,
    },
    {
      title: "Time left",
      value: TimeRemaining ? TimeRemaining : "15 Days",
    },
    {
      title: "Full Value",
      value: `$${fullValue}`,
    },
    {
      title: "Price",
      value: `$${price}`,
    },
  ];
  return (
    <View className="flex flex-row pt-2.5 pb-3.5" style={styles.statsBorder}>
      {data.map((item, index) => (
        <View key={index} className={`basis-1/4  `} style={styles.separator}>
          <Text className="text-center text-gray-400 text-xs">
            {item.title}
          </Text>
          <Text className="text-center text-black text-sm">{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statsBorder: {
    borderBlockEndColor: "#eee",
    borderWidth: 1,
    borderRadius: 1,
    borderTopColor: "white",
    borderRightColor: "white",
    borderLeftColor: "white",
  },
  separator: {
    borderRightColor: "#eee",
    borderRightWidth: 1,
  },
});

export default ProductStats;
