import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  LayoutAnimation,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductDetailSection = ({
  title,
  textualContent,
  icon,
  extraComponent,
}) => {
  const toggleView = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setViewExpanded(!viewExpanded);
  };

  const [viewExpanded, setViewExpanded] = useState(true);
  return (
    <Pressable
      onPress={() => {
        toggleView();
        setViewExpanded(!viewExpanded);
      }}
      className="relative  min-h-[50] border-l-2 border-gray-200"
    >
      <View className="w-6 h-6 rounded-[50%] absolute -top-[2] -left-[12] border-2 border-gray-100 bg-white flex justify-center items-center">
        {icon}
      </View>
      <View className="pl-5">
        <View className="flex flex-row justify-between pr-3 items-center">
          <Text className="font-semibold tracking-wide text-accent-100 mb-4 text-md">
            {title ? title : "title ? "}
          </Text>
          <FontAwesome5
            style={styles.iconStyles}
            name={viewExpanded ? "caret-up" : "caret-down"}
          />
        </View>

        {textualContent && (
          <Text
            className="pb-5 text-gray-500 text-xs tracking-wide"
            style={viewExpanded ? styles.viewExpanded : styles.viewCollapsed}
          >
            {textualContent}
          </Text>
        )}
      </View>
      <View style={viewExpanded ? styles.viewExpanded : styles.viewCollapsed}>
        {extraComponent && extraComponent}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viewExpanded: {
    height: "auto",
  },
  viewCollapsed: {
    display: "none",
  },
  iconStyles: {
    fontSize: 16,
    color: "#13d0ca",
  },
});

export default ProductDetailSection;
