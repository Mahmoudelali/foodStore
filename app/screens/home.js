import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import ProductCard from '../components/productCard';
import { View, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NotFound from '../components/NotFound';
import axios from 'axios';

export default function Home() {
	const [menuItems, setMenuItems] = useState([]);
	useEffect(() => {
		axios.get('http://192.168.0.105:8000/api/getalloffers/').then((res) => {
			console.log(res.data);
			setMenuItems(res.data);
		});
	}, []);

	return (
		<View>
			<View className="bg-white p-1 mb-3 flex-row justify-center border-b-2 border-gray-300 ">
				<StatusBar backgroundColor="#13d0ca" />
				<Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 text-sm m-2">
					Deals
				</Text>

				<Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">
					Sort By
				</Text>
				<Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">
					Price
				</Text>
				<Text className="text-gray-400 border-dashed border-2 border-gray-400 px-2 py-0.5 m-2">
					Distance
				</Text>
			</View>

			<FlatList
				data={menuItems}
				ListEmptyComponent={<NotFound />}
				renderItem={({ item, index }) => (
					<ProductCard
						isModuloFive={index % 5 == 0 ? true : false}
						priceBeforeDiscount={item.old_price}
						priceAfterDiscount={item.new_price}
						location={item.location}
						highlight={item.highlights}
						companyName={item.company}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}
