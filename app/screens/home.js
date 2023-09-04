import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { View, Text, FlatList } from 'react-native';
import NotFound from '../components/NotFound';
import useFetch from '../components/useFetch';
import HeroCard from '../components/HeroCard';
import AccessBar from '../components/AccessBar';
import ProductCard from '../components/productCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
	const uri = process.env.EXPO_PUBLIC_SERVER_URL + 'api/getalloffers/';
	const [data, loading] = useFetch(uri);

	const renderItems = ({ item, index }) => {
		return (
			index > 0 && (
				// <View className="w-full bg-red-200">
				<ProductCard productScreen={false} item={item} />
				// {/* </View> */}
			)
		);
	};
	return (
		<View className="flex-1">
			<AccessBar />
			{loading ? (
				<Text>Loading</Text>
			) : (
				<ScrollView>
					<HeroCard productScreen={false} item={data[0]} />
					<FlatList
						data={data}
						ListEmptyComponent={<NotFound />}
						contentContainerStyle={style}
						keyExtractor={(item) => item.id}
						renderItem={renderItems}
						// horizontal={true}
						numColumns={3}
						columnWrapperStyle={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					/>
				</ScrollView>
			)}
		</View>
	);
}
const style = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	paddingHorizontal: 5,
};

const styles = StyleSheet.create({
	isModuloFive: {
		width: '100%',
	},
	productListScreen: {
		padding: 6,
	},
	imageStyles: {
		maxWidth: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	crownStyles: {
		maxWidth: '100%',
		height: '100%',
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});
