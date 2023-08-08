import { View, Text } from 'react-native';
import React from 'react';
import Category from '../components/Category';
import { ScrollView } from 'react-native-gesture-handler';

export default function Search() {
	return (
		<ScrollView>
			<View className="p-4">
				<Category image={'foodAndDrinks'} categoryName={'food and drinks'} />
				<Category image={'beautyAndSpa'} categoryName={'beauty and spa'} />
				<Category image={'sports'} categoryName={'sports'} />
				<Category image={'electronics'} categoryName={'electronics'} />
				<Category image={'appliances'} categoryName={'appliances'} />
				<Category image={'chill'} categoryName={'chill'} />
			</View>
		</ScrollView>
	);
}
