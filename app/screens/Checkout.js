import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Invoice from "../components/invoice";
import { ScrollView } from "react-native-gesture-handler";
import Basket from "./Basket";
import AddressBookCard from "./AddressBookCard";
import Button from "../components/Button";
import DeliveryOptions from "../components/DeliveryOptions";
import { fonts } from "../components/css";

const DeliveryCountry = ({ countryName }) => (
  <View className="flex flex-row gap-2 py-4 px-5 bg-white">
    <Text style={{ fontFamily: fonts.regular }} className="uppercase text-lg">
      Deliver To :
    </Text>
    <Text style={{ fontFamily: fonts.light }} className="text-lg">
      {countryName}
    </Text>
  </View>
);
const MyBag = () => (
  <View className="py-4 px-5 my-5 bg-white">
    <Text style={{ fontFamily: fonts.regular }} className="uppercase text-lg">
      my bag
    </Text>
    <Basket />
  </View>
);
const DeliveryAddress = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white  my-5 py-4 px-5">
      <Text style={{ fontFamily: fonts.regular }} className="uppercase text-lg">
        delivery address
      </Text>
      <AddressBookCard editable={false} />
      <Button
        label="Change"
        buttonStyle={styles.changeAddressButton}
        textStyle={styles.changeAddressLabelStyle}
        onPress={() => navigation.navigate("AddressBook")}
      />
    </View>
  );
};

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("free");
  return (
    <ScrollView className="flex-1" style={styles.container}>
      <View className=" flex flex-col min-h-screen">
        <DeliveryCountry countryName="Lebanon" />
        <MyBag />
        <DeliveryAddress />
        <DeliveryOptions
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
        />
        <Invoice />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconStyles: {
    size: 24,
    color: "#13d0ca",
  },
  changeAddressButton: {
    backgroundColor: "#eee",
    width: "35%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontFamily: fonts.regular,
  },
  changeAddressLabelStyle: {
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: fonts.regular,
  },
});

export default Checkout;
