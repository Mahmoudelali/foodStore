import { View, Text, RefreshControl, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import NotificationInstance from "../components/NotificationInstance";
import axios from "axios";

export default function Notifications({ user }) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const uri =
        user &&
        process.env.EXPO_PUBLIC_SERVER_URL +
          `api/notifications/${user?.user?.id}`;
      const resp = await axios.get(uri);

      setData(resp.data);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // refresh funtion
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-base">Loading Notifications...</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-base"> No notifications yet</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <NotificationInstance {...item} />;
  };

  return (
    <View className="p-4 pb-16">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}
