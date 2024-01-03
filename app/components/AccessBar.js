import React from "react";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "expo-router";
import { fonts } from "./css";

const textComponents = [
  {
    text: "Sort By",
    id: 2,
  },
  {
    text: "Deals",
    id: 1,
  },
  {
    text: "Price",
    id: 3,
  },
];

const AccessBar = ({ setQueryset }) => {
  const navigation = useNavigation();
  return (
    <View className=" pl-2 bg-white flex-row justify-center items-center border-gray-300 ">
      {textComponents.map(({ text }, index) => (
        <Pressable
          style={styles.AccessBarBorder}
          key={index}
          onPress={() => {
            setQueryset();
            navigation.openDrawer();
          }}
        >
          <Text style={[styles.textStyles, { fontFamily: fonts.light }]}>
            {text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  AccessBarBorder: {
    paddingVertical: 5,
    marginHorizontal: 5,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    overflow: "hidden",
    justifyContent: "center",
  },
  textStyles: {
    textAlign: "center",
    color: "gray",
    paddingHorizontal: 12,
  },
});

export default AccessBar;
