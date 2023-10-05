import React, { useContext } from 'react';
import {
	View,
	FlatList,
	StyleSheet,
	ActivityIndicator,
	Text,
} from 'react-native';
import { priceRanges } from '../components/data.js';
import NotFound from '../components/NotFound.js';
import AccessBar from '../components/AccessBar.js';
import ProductCard from '../components/productCard.js';
import useFetch from '../components/useFetch.js';
import { QueryContext } from '../index.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const HomeContent = ({ loading, data }) => {
	const [queryset, setQueryset] = useContext(QueryContext);
	const filtration_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/searchoffers/?${queryset}`;
	const renderItems = ({ item }) => {
		const image = process.env.EXPO_PUBLIC_SERVER_URL + item.main_picture;
		return <ProductCard productScreen={false} item={item} image={image} />;
	};
	const [filtered_data] = useFetch(queryset === null ? null : filtration_uri);
	return (
		<View className="flex-1">
			{loading ? (
				<View style={style.activityIndicator}>
					<ActivityIndicator />
				</View>
			) : (
				<View style={style.container}>
					<Text className="text-gray-500 font-semibold ml-2 mb-1">
						{filtered_data ? filtered_data.length : data.length}{' '}
						offers
					</Text>
					<FlatList
						data={filtered_data ? filtered_data : data}
						ListEmptyComponent={<NotFound />}
						contentContainerStyle={style}
						keyExtractor={(item) => item.id}
						renderItem={renderItems}
					/>
				</View>
			)}
		</View>
	);
};

const PricesHomeContent = () => {
	return (
		<View className="pt-8 ">
			<Text className="text-lg font-bold text-center mb-8">Price</Text>
			{priceRanges.map((prc, index) => (
				<View
					key={index}
					style={style.bottomBorder}
					className="w-[80%]"
				>
					<Text className="ml-4 mb-1 text-gray-400 text-md">
						$<Text className=" text-gray-400">{prc.from}</Text> - $
						<Text className=" text-gray-400">{prc.to}</Text>
					</Text>
				</View>
			))}
		</View>
	);
};
export default function Home({ data, loading }) {
	const [queryset, setQueryset] = useContext(QueryContext);
	return (
		<Drawer.Navigator drawerContent={() => <PricesHomeContent />}>
			<Drawer.Screen
				name="HomeContent"
				options={{
					drawerPosition: 'right',
					headerTitle: () => <AccessBar setQueryset={setQueryset} />,
					headerStyle: style.headerStyle,
					headerShown: true,
					drawerIcon: () => <View className="invisible" />,
					headerTransparent: false,
				}}
			>
				{() => <HomeContent loading={loading} data={data} />}
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
		justifyContent: 'center',
	},
	headerStyle: {
		height: 60,
	},
	bottomBorder: {
		borderBottomWidth: 1,
		borderColor: 'lightgrey',
		marginBottom: 10,
	},
});
