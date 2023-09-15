import React from 'react';
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
import useFetch from '../components/useFetch';
import { uri } from '../index.js';

function FiltratedOffers({ route }) {
	const { queryset } = route.params;
	console.log(queryset);

	const filtration_uri = `${uri}api/searchoffers/?${queryset}`;
	const [filtered_data, loading] = useFetch(filtration_uri);

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
							display: 'flex',
							justifyContent: 'space-between',
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
