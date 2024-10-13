import { View, Text, RefreshControl, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import NotificationInstance from '../components/NotificationInstance';
import axios from 'axios';

export default function Notifications({ user }) {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState([]);

	const [refreshing, setRefreshing] = useState(false);

	const fetchData = async () => {};

	useEffect(() => {
		fetchData();
	}, []);

	if (false) {
		return (
			<View className="flex-1 items-center justify-center">
				<Text className="text-base font-regular">
					Login first to see notifications
				</Text>
			</View>
		);
	}

	// refresh funtion
	const handleRefresh = () => {
		setRefreshing(true);
		fetchData();
		setRefreshing(false);
	};

	const renderItem = ({ item }) => {
		return <NotificationInstance {...item} />;
	};

	return (
		// <View className="p-4 pb-16">
		// 	<FlatList
		// 		data={data}
		// 		keyExtractor={(item) => item.id}
		// 		renderItem={renderItem}
		// 		refreshControl={
		// 			<RefreshControl
		// 				refreshing={refreshing}
		// 				onRefresh={handleRefresh}
		// 			/>
		// 		}
		// 	/>
		// </View>
		<Text>This is notifications</Text>
	);
}
