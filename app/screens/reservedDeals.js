import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import OrderBox from "../components/UsedBox";
import NotFound from "../components/NotFound";
import { Text, View } from "react-native";

export default function ReservedDeals({ route }) {
  let { data } = route?.params;

  if(!data){
    return <View className="flex-1 justify-center items-center"> 
      <Text className="font-regular">You must login first to see the reserved deals.</Text>
    </View>
  }

  return (
    <ScrollView className="pt-3">
      {data?.length === 0 ? (
        <NotFound label={`you haven't reserved any deals`} />
      ) : (
        data.map((off) => <OrderBox key={off.id} {...off} status="pending" />)
      )}
    </ScrollView>
  );
}
