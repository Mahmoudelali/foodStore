import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import LabelInput from "../components/LabelInput";
import { ScrollView } from "react-native-gesture-handler";

import { Alert } from "react-native";
import { RadioButton } from "react-native-radio-buttons-group";

const MyDetails = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [number, setNumber] = useState("");
  const [checked, setChecked] = useState();

  const labelInputProps = [
    {
      borderStyle: "underline",
      state: firstName,
      inputHandler: setFirstName,
      placeholder: "First Name",
      labelText: "First Name",
    },
    {
      borderStyle: "underline",
      state: lastName,
      inputHandler: setLastName,
      placeholder: "Last Name",
      labelText: "Last Name",
    },
    {
      borderStyle: "underline",
      state: email,
      inputHandler: setEmail,
      placeholder: "abcd@jklmnop.xyz",
      labelText: "Email address",
    },
    {
      borderStyle: "underline",
      state: number,
      inputHandler: setNumber,
      placeholder: "00 961 78 948 228",
      labelText: "phone Number",
    },
  ];
  const handleOKButtonPress = () => {
    navigation.goBack();
  };
  const showAlert = () => {
    Alert.alert(
      "Alert",
      "Changes Saved!",
      [
        {
          text: "OK",
          onPress: handleOKButtonPress,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View className="bg-white px-6   mt-3 pb-5">
        <View className="">
          {labelInputProps.map((props, index) => (
            <LabelInput key={index} {...props} />
          ))}
        </View>
      </View>
      <View className="bg-white p-5   mt-5 ">
        <Pressable onPress={() => navigation.navigate("AddressBook")}>
          <Text className="uppercase   text-gray-400 font-bold text-l">
            Address Book
          </Text>
        </Pressable>
      </View>
      <View className="bg-white p-5   mt-5 ">
        <LabelInput
          borderStyle="underline"
          state={dateOfBirth}
          inputHandler={setDateOfBirth}
          placeholder="00 961 78 948 228"
          labelText="phone Number"
        />

        <View className="flex-row ">
          <RadioButton
            label="Girl"
            value="girl"
            status={checked === "girl" ? "checked" : "unchecked"}
            onPress={(e) => {
              setChecked("girl");
           
            }}
         
          />
          <RadioButton
            label="guy"
            value="guy"
            status={checked === "guy" ? "checked" : "unchecked"}
            onPress={(e) => {
              setChecked("boy");
            }}
  
          />
        </View>
      </View>
      <View className="bg-gray-100 py-4 px-10 ">
        <Pressable className="bg-accent-100" onPress={showAlert}>
          <Text className="uppercase text-center p-2 text-white font-bold text-xl tracking-wider">
            Save Changes
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
export default MyDetails;
