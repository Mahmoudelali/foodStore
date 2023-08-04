import React from "react";
import { View, StyleSheet } from "react-native";
import Category from "../components/searchByCategory";

export default function Search() {
  return (
    <View style={styles.container}>
      {Categories.map((category) => (
        <Category category={category.category} icon={category.icon} />
      ))}
    </View>
  );
}

const Categories = [
  {
    category: "FOOD AND DRINKS",
    icon: "food",
  },
  {
    category: "HEALTH AND FITNESS",
    icon: "weight-lifter",
  },

  {
    category: "BEAUTY AND SPA",
    icon: "spa",
  },
  {
    category: "FASHION",
    icon: "lipstick",
  },
  {
    category: "ACTIVITIES",
    icon: "bicycle",
  },
  {
    category: "GETAWAYS",
    icon: "airplane",
  },
  {
    category: "ELECTRONICS",
    icon: "laptop",
  },
  {
    category: "HOME",
    icon: "home",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
