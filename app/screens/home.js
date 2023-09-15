import React, { useContext } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import NotFound from '../components/NotFound';
import AccessBar from '../components/AccessBar';
import ProductCard from '../components/productCard';
import { QueryContext } from '../index.js';
import useFetch from '../components/useFetch';
import { uri } from '../index.js';

export default function Home({ data, loading }) {
	const [queryset] = useContext(QueryContext);
	const filtration_uri = `${uri}api/searchoffers/?${queryset}`;
	const [filtered_data] = useFetch(filtration_uri);

	const renderItems = ({ item, index }) => (
		<ProductCard productScreen={false} item={item} />
	);

	return (
		<View className="flex-1">
			<AccessBar />
			{loading ? (
				<View style={style.activityIndicator}>
					<ActivityIndicator />
				</View>
			) : (
				<View style={style.container}>
					<FlatList
						data={filtered_data ? filtered_data : data}
						ListEmptyComponent={<NotFound />}
						contentContainerStyle={style}
						keyExtractor={(item) => item.id}
						renderItem={renderItems}
						numColumns={2}
						columnWrapperStyle={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					/>
				</View>
			)}
		</View>
	);
}
const style = StyleSheet.create({
	container: {
		flex: 0.9,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
	},
});
