import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const optionIconStyles = {
  size: 30,
  color: "#13d0ca",
 
};
const Option = ({ optionName, icon,navigation,navigateName }) => (
  <Pressable onPress={() =>  navigation.navigate(navigateName)}>
    <View className="flex flex-row py-3 pl-10">
      <View className="basis-[15%] ">{icon}</View>

      <View className="flex flex-row items-center">
        <Text className="basis-[70%] pl-10 pb-1 tracking-[1] font-semibold">
          {optionName}
        </Text>
        <AntDesign name="right" size={16} color="black"/>
      </View>
      <View className="absolute bottom-0 right-0 h-[1] w-[80%] bg-gray-300 ml-5" />
    </View>
  </Pressable>
);
export default function Profile({navigation}) {

  const token = true;
  const Name = "Malak";

  
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
           <Option
          optionName={'My Coupons'}
          navigateName={'MyCoupon'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
            <Option
          optionName={'My Details'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
            <Option
          optionName={'Change Password'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
          </>
        ) : null}
       <Option
          optionName={'Contact Us'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
        <Option
          optionName={'Payment Method'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
        <Option
          optionName={'Social Account'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
              <Option
          optionName={'About Us'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
      </View>
      <View className="bg-white mt-5">
      <Option
          optionName={'My Settings'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
        <Option
          optionName={'Sign Out'}
          icon={
            <MaterialIcons
              name="contact-phone"
              {...optionIconStyles}
              style={{textAlign:"right"}}
            />
          }
        />
      </View>
    </View>
  );
}
