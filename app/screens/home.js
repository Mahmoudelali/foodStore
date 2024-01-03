import React, { useContext, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  Pressable,
  RefreshControl,
} from "react-native";
import { priceRanges } from "../components/data.js";
import NotFound from "../components/NotFound.js";
import AccessBar from "../components/AccessBar.js";
import ProductCard from "../components/productCard.js";
import useFetch from "../components/useFetch.js";
import { DataContext, QueryContext } from "../index.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors, fonts } from "../components/css.js";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import axios from "axios";
const Drawer = createDrawerNavigator();

const HomeContent = ({ loading, data, reFetch }) => {
  const [queryset, setQueryset] = useContext(QueryContext);
  const [refreshing, setRefreshing] = useState(false);
  const filtration_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/searchoffers/?${queryset}`;

  const renderItems = ({ item }) => {
    return (
      <ProductCard
        productScreen={false}
        item={item}
        image={item.main_picture}
      />
    );
  };

  const [filtered_data] = useFetch(queryset === null ? null : filtration_uri);

  // refresh funtion
  const handleRefresh = () => {
    setRefreshing(true);
    reFetch();
    setRefreshing(false);
  };

  return (
    <View className="flex-1">
      {loading ? (
        <View style={style.activityIndicator}>
          <ActivityIndicator size="large" color={"#13d0ca"} />
        </View>
      ) : (
        <View style={style.container}>
          <Text style={style.font} className="ml-2 mb-1">
            {filtered_data ? filtered_data?.length : data?.length} offers
          </Text>
          <FlatList
            data={filtered_data ? filtered_data : data}
            ListEmptyComponent={<NotFound />}
            contentContainerStyle={style}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        </View>
      )}
    </View>
  );
};

const PricesHomeContent = () => {
  const [, , setData, setDataLoading] = useContext(DataContext);

  const navigation = useNavigation();

  const handleSelectPriced = async (fromPrice, toPrice) => {
    try {
      navigation.dispatch(DrawerActions.closeDrawer());

      const filteringPriceuri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/searchoffers/?from=${fromPrice}&to=${toPrice}`;

      setDataLoading(true);

      const resp = await axios.get(filteringPriceuri);

      console.log("resp", resp);

      setData(resp.data);

      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="pt-8 ">
      <Text
        style={{ fontFamily: fonts.regular }}
        className="uppercase text-lg text-center mb-8"
      >
        Price
      </Text>
      {priceRanges.map((prc, index) => (
        <View key={index} style={style.bottomBorder} className="w-[80%]">
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() => handleSelectPriced(prc.from, prc.to)}
          >
            <Text
              style={{ fontFamily: fonts.regular }}
              className="ml-4 mb-1 text-gray-400 text-md"
            >
              $<Text className=" text-gray-400">{prc.from}</Text> - $
              <Text className=" text-gray-400">{prc.to}</Text>
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default function Home({ data, loading, reFetch }) {
  const [queryset, setQueryset] = useContext(QueryContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerIcon: ({ focused, color, size }) => {
          return null;
        },
        drawerPosition: "right",
        headerTitle: () => <AccessBar setQueryset={setQueryset} />,
        headerStyle: style.headerStyle,
        headerLeft: () => null,
      }}
      drawerContent={() => <PricesHomeContent />}
    >
      <Drawer.Screen name="HomeContent">
        {() => <HomeContent loading={loading} data={data} reFetch={reFetch} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  headerStyle: {
    height: 60,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 10,
  },
  font: {
    fontFamily: fonts.regular,
    color: colors.gray,
  },
});
