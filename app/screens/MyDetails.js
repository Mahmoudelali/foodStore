import React, { useState } from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import LabelInput from "../components/LabelInput";
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { fonts } from "../components/css";
import useFetch from "../components/useFetch";
import axios from "axios";
import { showToast } from "../components/data";

const MyDetails = ({ user, setUser }) => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [data, loading, , , reFetch] = useFetch(
    `${process.env.EXPO_PUBLIC_SERVER_URL}api/getuserprofile/${user.id}`
  );

  const labelInputProps = [
    {
      borderStyle: "underline",
      state: firstName,
      inputHandler: setFirstName,
      placeholder: data?.first_name ? data?.first_name : "First Name",
      labelText: "First Name",
      editable: false,
    },
    {
      borderStyle: "underline",
      state: lastName,
      inputHandler: setLastName,
      placeholder: data?.last_name ? data?.last_name : "Last Name",
      labelText: "Last Name",
      editable: false,
    },
    {
      borderStyle: "underline",
      state: email,
      inputHandler: setEmail,
      placeholder: data?.email ? data?.email : "abcd@jklmnop.xyz",
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

  const handleEdit = async () => {
    try {
      const resp = await axios.put(
        `${process.env.EXPO_PUBLIC_SERVER_URL}api/updateuserprofile/${user?.id}`,
        {
          user: user?.id,
          email: email,
        }
      );

      if (resp.status === 200) {
        showToast("success", "User profile updated successfully");
      }

      reFetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator size="large" color={"#13d0ca"} />
      </View>
    );
  }

  return (
    <ScrollView keyboardDismissMode="on-drag">
      <View className="bg-white px-6   mt-3 pb-5">
        <View>
          {labelInputProps.map((props, index) => (
            <LabelInput key={index} {...props} />
          ))}
        </View>
      </View>
      <View className="bg-white p-5 mt-5">
        <Pressable onPress={() => navigation.navigate("AddressBook")}>
          <Text
            style={{ fontFamily: fonts.regular }}
            className="uppercase   text-gray-400 font-bold text-l"
          >
            Address Book
          </Text>
        </Pressable>
      </View>

      <View className="bg-gray-100 py-4 px-10 ">
        <Button label="Save Changes" onPress={handleEdit} />
      </View>
    </ScrollView>
  );
};

export default MyDetails;
