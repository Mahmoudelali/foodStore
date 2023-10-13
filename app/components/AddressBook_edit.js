import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import LabelInput from "./LabelInput";
import { ScrollView } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { Alert } from "react-native";
const CheckBoxProps = {
  checkedCheckBoxColor: "#13d0ca",
  rightTextStyle: { letterSpacing: 1, fontSize: 14, color: "gray" },
  style: { marginBottom: 30 },
};
const checkBoxLabels = [
  "Set as your default delivery address",
  "Set as your default billing address",
];
const AddressBookEdit = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user_address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [checklist, setChecklist] = useState([]);

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
      state: number,
      inputHandler: setNumber,
      placeholder: "Number",
      labelText: "Number",
    },
    {
      borderStyle: "underline",
      state: country,
      inputHandler: setCountry,
      placeholder: "Country",
      labelText: "Country",
    },
    {
      borderStyle: "underline",
      state: user_address,
      inputHandler: setAddress,
      placeholder: "Address",
      labelText: "Address",
    },
    {
      borderStyle: "underline",
      state: city,
      inputHandler: setCity,
      placeholder: "Town / City",
      labelText: "Town / City",
    },
    {
      borderStyle: "underline",
      state: postCode,
      inputHandler: setPostCode,
      placeholder: "Post code",
      labelText: "Post Code",
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
      <View className="bg-white px-6   mt-4 pb-10">
        <View className="mb-4">
          {labelInputProps.map((props, index) => (
            <LabelInput key={index} {...props} />
          ))}
        </View>

        <View className="py-7">
          {checkBoxLabels.map((label, index) => (
            <CheckBox
              {...CheckBoxProps}
              key={index}
              isChecked={checklist.includes(label)}
              rightText={label}
              onClick={() => {
                !checklist.includes(label)
                  ? setChecklist([...checklist, label])
                  : setChecklist(
                      checklist.filter((term) => {
                        return term !== label;
                      })
                    );
              }}
            />
          ))}
        </View>
        <View className="bg-gray-100 py-4 px-10 ">
          <Pressable className="bg-accent-100" onPress={showAlert}>
            <Text className="uppercase text-center p-2 text-white font-bold text-xl tracking-wider">
              Save address
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default AddressBookEdit;
