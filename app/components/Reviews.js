import React from "react";
import { Image } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { fonts } from "./css";

const Feedback = ({ feedbacks }) => {
  const user_icon = require("../assets/default_61f3429ad1ced-removebg-preview.png");
  return (
    <View className="py-2 px-5">
      {!feedbacks ? (
        <Text style={{ fontFamily: fonts.regular }} className="text-gray-500">
          No Available feedbacks for this Product
        </Text>
      ) : (
        feedbacks &&
        feedbacks.map(({ user, feedback_content, id }) => (
          <View className="flex flex-row  mb-5" key={id}>
            <View className="h-12 w-8 mt-1" style={{ borderRadius: 50 }}>
              <Image
                source={user_icon}
                resizeMode="contain"
                style={styles.userImageIcon}
              />
            </View>
            <View className="ml-2 overflow-hidden ">
              <Text
                style={{ fontFamily: fonts.boldItalic }}
                className="text-[13px] text-gray-600 text-ellipsis uppercase"
              >
                {user.username}
              </Text>
              <Text
                style={{ fontFamily: fonts.regular }}
                className="text-gray-500 text-xs text-ellipsis"
              >
                {feedback_content}
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userImageIcon: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
    marginTop: -6,
  },
});

export default Feedback;
