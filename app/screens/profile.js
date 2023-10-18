import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../index.js";
import { useNavigation } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Option from "../components/settingsOption.js";
import { LoggedInContext } from "../index.js";

const optionIconStyles = {
  size: 30,
  color: "#13d0ca",
};

export default function Profile() {
  const navigation = useNavigation();
  const [userData, setUserData] = useContext(UserContext);
  const [loggedIn] = useContext(LoggedInContext);
  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem("user_data");
      setUserData(null);
    } catch (e) {
      console.log(e);
    }
  };

  const authenticatedUserOptions = [
    {
      optionName: "My Coupons",
      navigation: () => navigation.navigate("MyCoupon"),
      navigateName: "MyCoupon",
      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="shopping-bag"
          style={{ textAlign: "right" }}
        />
      ),
    },
    {
      optionName: "My Details",
      navigation: () => navigation.navigate("MyDetails"),

      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="sticky-note-2"
          style={{ textAlign: "right" }}
        />
      ),
    },
    {
      optionName: "Change Password",
      navigateName: "ChangePassword",
      navigation: () => navigation.navigate("ChangePassword"),
      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="lock"
          style={{ textAlign: "right" }}
        />
      ),
    },
  ];
  const staticOptions = [
    {
      optionName: "Contact Us",
      navigation: () => navigation.navigate("ContactUs"),
      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="settings-phone"
          style={{ textAlign: "right" }}
        />
      ),
    },

    {
      optionName: "About Us",
      navigation: () => navigation.navigate("AboutUs"),

      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="info"
          style={{ textAlign: "right" }}
        />
      ),
    },
  ];
  const LastOptions = [
    {
      optionName: "My Settings",
      navigation: () => navigation.navigate("AppSetting"),

      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="settings"
          style={{ textAlign: "right" }}
        />
      ),
    },
    {
      optionName: loggedIn ? "Sign Out " : "Back To Login",
      navigation: () => logoutUser(),
      icon: (
        <MaterialIcons
          {...optionIconStyles}
          name="logout"
          style={{ textAlign: "right" }}
        />
      ),
    },
  ];
  return (
    <View className="h-full bg-[#ebe6e6] ">
      <View className="flex-row items-center bg-[#13d0ca] h-[20%] ">
        <View className="ml-[10%]">
          <Ionicons
            name="person-circle-outline"
            size={70}
            color="white"
            className="ml-[5%]"
          />
        </View>
        {loggedIn ? (
          <Text className="text-white text-[20px] font-bold ml-[5%]">
            Hello {userData?.username}
          </Text>
        ) : (
          <Text className="text-white text-[20px] font-bold ml-[5%]">
            Hello COUPWAY
          </Text>
        )}
      </View>
      <View className="absolute top-[15%] bottom-0 right-0 left-0 w-[150%] h-[10%] bg-[#ebe6e6] -rotate-6 "></View>
      <View className="bg-white mt-[5%]">
        {loggedIn &&
          authenticatedUserOptions.map((option, index) => (
            <Option key={index} {...option} />
          ))}
        {staticOptions.map((option, index) => (
          <Option key={index} {...option} />
        ))}
      </View>
      <View className="bg-white mt-3">
        {LastOptions.map((option, index) => (
          <Option key={index} {...option} />
        ))}
      </View>
    </View>
  );
}
