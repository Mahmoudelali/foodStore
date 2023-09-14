import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NotFound from '../components/NotFound';
import AccessBar from '../components/AccessBar';
import ProductCard from '../components/productCard';

export default function Home({ data, loading }) {
	const renderItems = ({ item, index }) => (
		<ProductCard productScreen={false} item={item} />
	);

	return (
		<View className="flex-1">
			<AccessBar />
			{loading ? (
				<Text>Loading</Text>
			) : (
				<View style={style.container}>
					<FlatList
						data={data}
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
});
