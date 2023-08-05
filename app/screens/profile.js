import { View,Text } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
export default function Profile(){
    return(
        <View className="h-full bg-[#ebe6e6]">
            <StatusBar backgroundColor="#13d0ca"/>
        <View className="flex-row items-center bg-[#13d0ca] h-[20%] ">
            <Ionicons name="person-circle-outline" size={70} color="white" className="ml-[5%]"/>
         <Text className="text-white text-[14px] font-bold ml-[5%]">Hi there!</Text>
        </View>
       
        <View className="bg-white grid grid-cols-1 divide-y divide-gray-200">
           <View className="flex-row justify-around">
                <Text>Contact Us</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                <View ></View>
            </View> 
            <View className="flex-row justify-around">
                <Text>Contact Us</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                <View ></View>
            </View> 

            <View className="flex-row justify-around">
           
                <Text>Contact Us</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                <View ></View>
            </View> 
        </View>
        </View>
    )
}