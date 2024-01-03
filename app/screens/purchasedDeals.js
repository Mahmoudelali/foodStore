import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderBox from "../components/UsedBox";
import NotFound from "../components/NotFound";
import { Text, View } from "react-native";

export default function PurchasedDeals({ route }) {
  const { data } = route.params;

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="font-regular">
          You must login first to see the purchased deals.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="pt-3">
      {data.length === 0 ? (
        <NotFound label="No purchased deals found" />
      ) : (
        data.map((offer) => {
          return <OrderBox key={offer.id} {...offer} status="active" />;
        })
      )}
    </ScrollView>
  );
}
