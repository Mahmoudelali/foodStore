// DrawerContent.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

const DrawerContent = ({ selectedCategory }) => {
  const navigation = useNavigation();
  const [queryset, setQueryset] = useState(null);
  const image_path = `${process.env.EXPO_PUBLIC_SERVER_URL.substring(
    "/"
  )}${selectedCategory?.category_illustration.replace(/\//, "")}`;
  useEffect(() => {
      if(queryset === null) return
      
      navigation.navigate("FiltratedOffers", {
        queryset: `queryset=${queryset}`,
      })
    
    
   }, [queryset]);

  return (
    <View className="flex-1 ">
      <View className="pt-14">
        <View className="mb-6 ">
          <View className="h-28 mx-auto ">
            <Image
              source={{ uri: image_path }}
              style={styles.imageStyles}
              className="mx-auto"
            />
          </View>
          <Text className="uppercase font-bold text-center my-4 tracking-widest text-gray-600">
            {selectedCategory?.name}
          </Text>
        </View>
        {selectedCategory?.subcategories.map(({ name, id }) => {
          return (
            <Pressable
              key={id}
              onPress={() => {
                setQueryset(name);
              }}
              style={styles.borderBottom}
              className="w-4/5 "
            >
              <Text
                className="text-gray-400 pl-6"
                style={styles.subCategoriesStyles}
              >
                {name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subCategoriesStyles: {
    paddingVertical: 5,
    fontSize: 16,
  },
  imageStyles: {
    marginHorizontal: "auto",
    width: 120,
    height: 120,
    objectFit: "contain",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 10,
    paddingBottom: 5,
  },
});
export default DrawerContent;
