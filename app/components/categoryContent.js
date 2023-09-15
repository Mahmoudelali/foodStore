import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Category from './Category.js';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../components/useFetch.js';
import { uri } from '../index.js';

const Content = ({ setSelectedCategory }) => {
	const categories_uri = `${uri}api/getcategories/`;
	const [data, loading, setData, setLoading] = useFetch(categories_uri);
	const navigation = useNavigation();

	return loading ? (
		<Text>loading ..</Text>
	) : (
		<ScrollView>
			<View className="p-4">
				{data.map((category, index) => {
					const image_path = `${uri.substring(
						'/',
					)}${category.category_illustration.replace(/\//, '')}`;

					return (
						<Category
							onPress={() => {
								setSelectedCategory(category);
								navigation.openDrawer();
							}}
							image={image_path}
							categoryName={category.name}
							key={index}
						/>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default Content;

const styles = StyleSheet.create({});
