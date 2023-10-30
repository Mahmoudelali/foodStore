import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";
import { fonts } from "./css";

const InvoiceValue = ({ label, value, isBold }) => (
  <View className="flex flex-row justify-between mb-3 ">
    <Text
      style={
        isBold && [
          styles.isBold,
          styles.letterSpaced,
          { fontFamily: fonts.regular },
        ]
      }
    >
      {label}
    </Text>
    <Text style={[isBold && styles.isBold, { fontFamily: fonts.regular }]}>
      {typeof value == "string" ? value.toUpperCase() : `$ ${value}`}
    </Text>
  </View>
);
const Invoice = ({ deliveryMethod, itemsArr }) => {
  const termsCondition =
    "By placing the order you agree to our terms and conditions, privacy and returns policy, and consent to some of your data being stored by COUPWAY may be used to make future shopping experiences better for you";

  return (
    <View className="bg-[#ededed] px-3 py-6">
      <InvoiceValue label="Sub-total" value={160} />
      <InvoiceValue label="Delivery" value={"Free"} />
      <InvoiceValue label="TOTAL TO PAY" value={160} isBold={true} />
      <Button label={"place order"} />
      <Text
        style={{ fontFamily: fonts.regular }}
        className="text-gray-400 text-xs mt-2"
      >
        {termsCondition}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  isBold: {
    textTransform: "uppercase",
  },
  letterSpaced: {
    letterSpacing: 1,
  },
});

export default Invoice;
