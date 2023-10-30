import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import NotFound from "../components/NotFound";
import AccessBar from "../components/AccessBar";
import ProductCard from "../components/productCard";
function FiltratedOffers({ route }) {
  const { queryset } = route.params;
  const filtration_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/searchoffers/?${queryset}`;
  const [filtered_data, setFiltratedData] = useState(null);
  const [loading, setLoadin] = useState(false);
  useEffect(() => {
    if (queryset == null) return;
    else {
      setLoadin(true);
      axios
        .get(filtration_uri)
        .then((response) => {
          setFiltratedData(response.data);
          setLoadin(false);
        })
        .catch((err) => {
          console.error(err, url);
        });
    }
  }, [queryset]);

  const renderItems = ({ item }) => (
    <ProductCard productScreen={false} item={item} />
  );

  return (
    <View className="flex-1">
      <AccessBar />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={style.container}>
          <FlatList
            data={filtered_data}
            ListEmptyComponent={<NotFound />}
            contentContainerStyle={style}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            numColumns={2}
            columnWrapperStyle={{
              display: "flex",
              justifyContent: "space-between",
            }}
          />
        </View>
      )}
    </View>
  );
}
export default FiltratedOffers;
const style = StyleSheet.create({
  container: {
    flex: 0.9,
  },
});
