import { View, Text } from 'react-native';
import React from 'react';
import Category from '../components/Category';
import { ScrollView } from 'react-native-gesture-handler';

export default function Search({ navigation }) {
	const categories = [
		{
			image: 'foodAndDrinks',
			categoryName: 'food and drinks',
		},
		{
			image: 'beautyAndSpa',
			categoryName: 'beauty and spa',
		},
		{
			image: 'sports',
			categoryName: 'sports',
		},
		{
			image: 'electronics',
			categoryName: 'electronics',
		},
		{
			image: 'appliances',
			categoryName: 'appliances',
		},
		{
			image: 'chill',
			categoryName: 'chill',
		},
	];
	return (
		//To add a new category, you have to add its path in the ternary operator in the child component <Category />
		//it's the only possible way I found in the documentation
		<ScrollView>
			<View className="p-4">
				{categories.map((categorie, index) => (
					<Category key={index} {...categorie} />
				))}
			</View>
		</ScrollView>
	);
}
