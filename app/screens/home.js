import React from 'react';
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

	const renderItems = ({ item, index }) =>
		index > 0 && <ProductCard productScreen={false} item={item} />;

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
