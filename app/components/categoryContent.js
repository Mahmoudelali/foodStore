import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import Category from './Category.js';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../components/useFetch.js';

const Content = ({ setSelectedCategory }) => {
	const categories_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getcategories/`;
	const [data, loading] = useFetch(categories_uri);
	const navigation = useNavigation();

	return loading ? (
		<View style={styles.activityIndicator}>
			<ActivityIndicator />
		</View>
	) : (
		<ScrollView>
			<View className="p-4 ">
				{loading ? (
					<View className="flex-1 justify-center bg-red-300">
						<ActivityIndicator />
					</View>
				) : (
					data?.map((category, index) => {
						const image_path = `${process.env.EXPO_PUBLIC_SERVER_URL.substring(
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
					})
				)}
			</View>
		</ScrollView>
	);
};

export default Content;

const styles = StyleSheet.create({
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
	},
});
