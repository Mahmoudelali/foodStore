import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const Content = ({ setSelectedCategory }) => {
  const navigation = useNavigation();
  const categories = [
    {
      categoryName: "Deals",
      subCategories: ["Premium Deals", "All Deals "],
    },
    {
      categoryName: "Sort By",
      subCategories: [
        "Nails Spa",
        "Salon For Ladies",
        "Salon For Gents",
        "Salon For Kids",
        "Massage Parlor",
      ],
    },
    {
      categoryName: "Price",
      subCategories: ["Outdoor", "Indoor", "Classes"],
    },
    {
      categoryName: "Distance",
      subCategories: [
        "Phones",
        "Laptops",
        "Accessories",
        "Tablets",
        "Cameras",
        "Video Games",
        "Home Appliances",
      ],
    },
  ];
  return (
   
      <View className="p-4">
        {categories.map((category, index) => (
          <Category
            onPress={() => {
              setSelectedCategory(category);
              navigation.openDrawer();
            }}
            key={index}
            {...category}
          />
        ))}
      </View>
   
  );
};
const DrawerContent = ({ selectedCategory }) => {
  return (
    <View className="flex-1 h-fit">
      <View className="pt-14">
        <View className="mb-6 ">
          <Text className="uppercase font-bold text-center my-4 tracking-widest">
            {selectedCategory?.categoryName}
          </Text>
        </View>
        <View>
          {selectedCategory?.subCategories.map((cat, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => Alert.alert("pressed")}
                style={styles.borderBottom}
                className="w-4/5 "
              >
                <Text
                  className="text-gray-400 pl-6"
                  key={index}
                  style={styles.subCategoriesStyles}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};
function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContent selectedCategory={selectedCategory} />
      )}
    >
      <Drawer.Screen
        name="Home"
        options={{ headerShown: false ,drawerPosition:"right"}}
      >
        {(props) => <Content setSelectedCategory={setSelectedCategory} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  subCategoriesStyles: {
    paddingVertical: 5,
    fontSize: 16,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 10,
    paddingBottom: 5,
  },

});
export default Filter;
