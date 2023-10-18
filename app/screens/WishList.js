import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WishBox from "../components/WishBox";

export default function Notifications({ notificationsList }) {
  return (
    <ScrollView className="p-2 bg-gray-200">
      {!notificationsList ? (
        <Text>No notifications to display</Text>
      ) : (
        notificationsList.map((productData, index) => {
          return <WishBox key={index} {...productData} />;
        })
      )}

      {/* ### test Display ### */}
      <WishBox />
      <WishBox />
      <WishBox />
    </ScrollView>
  );
}
