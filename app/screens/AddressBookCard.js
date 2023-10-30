import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../components/css";

const AddressBookCard = ({
  editable,
  user_name,
  user_address,
  city,
  region,
  number,
}) => {
  return (
    <View
      className={
        editable
          ? "bg-white py-3 flex flex-row p-4"
          : "bg-white py-3 flex flex-row"
      }
    >
      <View className={editable ? "w-[85%] p-2" : "w-[85%]"}>
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
        {editable && (
          <>
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
          </>
        )}
      </View>

      {editable && (
        <View className="basis-[15%] ml-auto pt-4">
          <Pressable onPress={() => navigation.navigate("AddressBookEdit")}>
            <Ionicons style={styles.iconStyles} name="create" />
          </Pressable>
          <Pressable>
            <Ionicons style={styles.iconStyles} name="trash" />
          </Pressable>
        </View>
      )}
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

export default AddressBookCard;
