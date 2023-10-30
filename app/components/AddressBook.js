import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Navigator } from "expo-router";
import { fonts } from "./css";
const iconStyles = {
  size: 30,
  color: "#000",
};

const AddressBook = ({
  user_name,
  user_address,
  city,
  region,
  number,
  navigation,
}) => {
  return (
    <View className="p-4 flex-1 relative">
      <View className="bg-white py-3 flex flex-row p-4">
        <View className=" w-[85%] p-2">
          <Text style={{ fontFamily: fonts.regular }} className="mb-2">
            {user_name || "FirstName LastName"}
          </Text>
          <Text style={{ fontFamily: fonts.regular }} className="mb-2">
            {user_address ||
              "Tripoli, Near azmi street, Azmi square, Azmi Building"}
          </Text>
          <Text style={{ fontFamily: fonts.regular }} className="mb-2">
            {city || "Tripoli"}
          </Text>
          <Text style={{ fontFamily: fonts.regular }} className="mb-2">
            {region || "Lebanon"}
          </Text>
          <Text style={{ fontFamily: fonts.regular }} className="mb-5">
            {number || "+961 76 000 000"}
          </Text>
          <Text
            style={{ fontFamily: fonts.regular }}
            className="text-gray-400 text-xs mb-1"
          >
            This is your delivery address
          </Text>
          <Text
            style={{ fontFamily: fonts.regular }}
            className="text-gray-400 text-xs mb-1"
          >
            This is your default billing address
          </Text>
        </View>
        <View className="basis-[15%] ml-auto pt-4">
          <Pressable onPress={() => navigation.navigate("AddressBookEdit")}>
            <Ionicons style={styles.iconStyles} name="create" {...iconStyles} />
          </Pressable>
          <Pressable>
            <Ionicons style={styles.iconStyles} name="trash" {...iconStyles} />
          </Pressable>
        </View>
      </View>
      <Pressable className="absolute bottom-0 left-0 right-0 w-screen bg-accent-100">
        <Text
          style={{ fontFamily: fonts.regular }}
          className="uppercase text-center p-5 text-white text-xl tracking-wider"
        >
          add new address
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyles: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    color: "#000",
  },
});

export default AddressBook;
