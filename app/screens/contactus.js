import { View,Text, Pressable } from "react-native";
import React from "react";


export default function Contact({navigation}){
    return(
        <View>
            <View className="bg-white mt-[10%] flex-col items-start  ">
      <Pressable className="p-7 ml-[10%]" 	onPress={() => navigation.navigate('PurchasedDeals')}>
        <Text className="text-gray-500"> PURCHASED DEALS</Text>
        <View className="absolute bottom-0  h-[5%] w-[100%] bg-gray-300 ml-5" />
      </Pressable>

      <Pressable className="p-7 ml-[10%]" onPress={() => navigation.navigate('ReservedDeals')}>
        <Text className="text-gray-500"> RESERVED DEALS</Text>
        <View className="absolute bottom-0  h-[5%] w-[100%] bg-gray-300 ml-5" />
      </Pressable>
     
    </View>
        </View>
    )
}