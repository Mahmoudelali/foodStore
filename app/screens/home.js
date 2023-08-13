import React from "react";
import { StatusBar } from "expo-status-bar";

import ProductCard from "../components/productCard";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <>
      
      <View className="bg-white p-1 mb-3 flex-row justify-center border-b-2 border-gray-300 ">
	<StatusBar backgroundColor="#13d0ca"/>

        <Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 text-sm m-2">Deals</Text>
        <Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">Sort By</Text>
        <Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">Price</Text>
        <Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">Distance</Text>
      </View>
      <ProductCard />
    </>
  );
}
