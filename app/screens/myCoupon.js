import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import useFetch from "../components/useFetch.js";
import { UserContext } from "../index.js";
import { fonts } from "../components/css.js";
import { showToast } from "../components/data.js";
import Toast from "react-native-toast-message";

export default function MyCoupon({ navigation }) {
  const [user] = useContext(UserContext);
  const user_id = user?.user?.id;
  const userOrderURI =
    user_id &&
    `${process.env.EXPO_PUBLIC_SERVER_URL}api/getuserorders/${user_id}`;
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
      text: "RESERVED DEALS",
      onPress: () => {
        if (!user_id) {
          showToast("error", "You must login first");
          return;
        }
        navigation.navigate("ReservedDeals", { data: reserved_deals });
      },
    },
    {
      text: "ACTIVATED DEALS",
      onPress: () => {
        if (!user_id) {
          showToast("error", "You must login first");
          return;
        }

        navigation.navigate("PurchasedDeals", {
          data: purchased_deals,
        });
      },
    },

    {
      text: "REDEEMED DEALS",
      onPress: () => {
        if (!user_id) {
          showToast("error", "You must login first");
          return;
        }
        navigation.navigate("UsedDeals", { data: used_deals });
      },
    },
  ];

  return (
    <>
      <View className="relative z-10">
        <Toast visibilityTime={2000} position="top" topOffset={10} />
      </View>
      <View className="bg-white mt-5 flex-col items-start">
        {items.map(({ text, onPress }, index) => (
          <Pressable key={index} className="p-7 ml-[10%]" onPress={onPress}>
            <Text
              style={{ fontFamily: fonts.regular }}
              className="text-gray-500"
            >
              {text}
            </Text>
            {index !== items.length - 1 && (
              <View className="absolute bottom-0 h-[5%] w-[100%] bg-gray-300 ml-5" />
            )}
          </Pressable>
        ))}
      </View>
    </>
  );
}
