import { ScrollView } from "react-native";
import React from "react";
import NotFound from "../components/NotFound";
import OrderBox from "../components/UsedBox";

export default function UsedDeals({ route }) {
  const { data } = route.params;

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
  