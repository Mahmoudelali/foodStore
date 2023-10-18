import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import useFetch from "../components/useFetch.js";
import { UserContext } from "../index.js";

export default function MyCoupon({ navigation }) {
  const [user] = useContext(UserContext);
  const user_id = user.user_id; //to be changed later
  const userOrderURI = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getuserorders/${user_id}`;
  const [orders] = useFetch(userOrderURI);
  const purchased_deals =
    orders &&
    orders.filter(
      (order) => order.is_active == true && order.redeemed == false
    );
  const reserved_deals =
    orders && orders.filter((order) => order.is_active == false);
  const used_deals = orders && orders.filter((order) => order.redeemed);

  const items = [
    {
      text: "PURCHASED DEALS",
      onPress: () =>
        navigation.navigate("PurchasedDeals", {
          data: purchased_deals,
        }),
    },
    {
      text: "RESERVED DEALS",
      onPress: () =>
        navigation.navigate("ReservedDeals", { data: reserved_deals }),
    },
    {
      text: "USED DEALS",
      onPress: () => navigation.navigate("UsedDeals", { data: used_deals }),
    },
  ];

  return (
    <View className="bg-white mt-5 flex-col items-start">
      {items.map((item, index) => (
        <Pressable key={index} className="p-7 ml-[10%]" onPress={item.onPress}>
          <Text className="text-gray-500">{item.text}</Text>
          {index !== items.length - 1 && (
            <View className="absolute bottom-0 h-[5%] w-[100%] bg-gray-300 ml-5" />
          )}
        </Pressable>
      ))}
    </View>
  );
}
