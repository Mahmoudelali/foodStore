import { View,Text,Image } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Profile(){
    const token=true;
    return(
        <View className="h-full bg-[#ebe6e6] ">
            <StatusBar backgroundColor="#13d0ca"/>
        <View className="flex-row items-center bg-[#13d0ca] h-[20%] ">
            <View className="ml-[10%]">
            <Ionicons name="person-circle-outline" size={70} color="white" className="ml-[5%]"/></View>
         <Text className="text-white text-[15px] font-bold ml-[5%]">Hi there!</Text>
        </View>
     <View className="absolute top-[15%] bottom-0 right-0 left-0 w-[150%] h-[10%] bg-[#ebe6e6] -rotate-6 "></View>
        <View className="bg-white mt-[5%]">
            {token?(<>
                <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Contact Us</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Contact Us</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Contact Us</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            </>):null}
          <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Contact Us</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Social Accounts</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>About Us</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
        </View>
        <View className="bg-white mt-5">
          <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Settings</Text>
            <AntDesign name="right" size={24} color="black" />
            <View className= "absolute bottom-0 right-0 h-[10%] w-[80%] bg-gray-300 ml-5"  />
            </View>  
            <View className="flex-row justify-around p-5">
          <MaterialIcons name="contact-phone" size={24} color="#13d0ca" />
         
            <Text>Sign In</Text>
            <AntDesign name="right" size={24} color="black" />
            </View>  
          
        </View>
        </View>
    )
}