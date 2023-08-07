import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Profile({navigation}) {
  const token = true;
  const Name = "Malak";

  const optionIconStyles = {
    size: 30,
    color: "#13d0ca",
  };
  return (
    <View className="h-full bg-[#ebe6e6] ">
      <StatusBar backgroundColor="#13d0ca" />
      <View className="flex-row items-center bg-[#13d0ca] h-[20%] ">
        <View className="ml-[10%]">
          <Ionicons
            name="person-circle-outline"
            size={70}
            color="white"
            className="ml-[5%]"
          />
        </View>
        <Text className="text-white text-[20px] font-bold ml-[5%]">
          {Name ? "Hi " + Name : "Hi there !"}
        </Text>
      </View>
      <View className="absolute top-[15%] bottom-0 right-0 left-0 w-[150%] h-[10%] bg-[#ebe6e6] -rotate-6 "></View>
      <View className="bg-white mt-[5%]">
        {token ? (
          <>
            <Pressable className="flex-row justify-around p-4" 	onPress={() => navigation.navigate('MyCoupon')}>
            <MaterialCommunityIcons name="shopping-outline" size={24} color="#13d0ca" />
              <Text className="font-semibold text">My Coupons</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
            </Pressable>
            <View className="flex-row justify-around p-4">
              <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />

              <Text>My Details</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
            </View>
            <View className="flex-row justify-around p-4">
            <AntDesign name="lock" size={24} color="#13d0ca" />

              <Text className="font-semibold">Change Password</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
            </View>
          </>
        ) : null}
        <View className="flex-row justify-around p-4">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />

          <Text>Contact Us</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
        </View>
        <View className="flex-row justify-around p-4">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />

          <Text>Payment Method</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
        </View>
        <View className="flex-row justify-around p-4">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />

          <Text>Social Account</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>
      <View className="bg-white mt-5">
      <View className="flex-row justify-around p-4">
      <Ionicons name="settings-sharp" size={24} color="#13d0ca" />

              <Text>About Us</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              <View className="absolute bottom-0 right-0 h-[5%] w-[80%] bg-gray-300 ml-5" />
            </View>
        <View className="flex-row justify-around p-4">
              <MaterialIcons
                name="contact-phone"
                size={24}
                color="#13d0ca"
              />

              <Text>Sign Out</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            
            </View>
      </View>
    </View>
  );
}
