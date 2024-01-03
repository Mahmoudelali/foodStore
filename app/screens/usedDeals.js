import { ScrollView, View, Text } from "react-native";
import React from "react";
import NotFound from "../components/NotFound";
import OrderBox from "../components/UsedBox";

export default function UsedDeals({ route }) {
  const { data } = route.params;

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="font-regular">
          You must login first to see the redeemed deals.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="pt-4">
      {data.length === 0 ? (
        <NotFound label={`you have not used any deals! `} />
      ) : (
        data.map((off) => <OrderBox key={off.id} {...off} status="redeemed" />)
      )}
    </ScrollView>
  );
}
