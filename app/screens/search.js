import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import Category from '../components/Category';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const Content = ({ setSelectedCategory }) => {
	const navigation = useNavigation();
	const categories = [
		{
			image: 'foodAndDrinks',
			categoryName: 'food and drinks',
			subCategories: [
				'Fine Dining',
				'Pizza ',
				'Pasta',
				'Fast Food',
				'Sushi',
				'Alcohol',
				'Tobacco',
			],
		},
		{
			image: 'beautyAndSpa',
			categoryName: 'beauty and spa',
			subCategories: [
				'Nails Spa',
				'Salon For Ladies',
				'Salon For Gents',
				'Salon For Kids',
				'Massage Parlor',
			],
		},
		{
			image: 'sports',
			categoryName: 'Activities',
			subCategories: ['Outdoor', 'Indoor', 'Classes'],
		},
		{
			image: 'electronics',
			categoryName: 'electronics',
			subCategories: [
				'Phones',
				'Laptops',
				'Accessories',
				'Tablets',
				'Cameras',
				'Video Games',
				'Home Appliances',
			],
		},
		{
			image: 'appliances',
			categoryName: 'Home',
			subCategories: [
				'Kitchen',
				'Bathroom products',
				'Bedroom products',
				'Dinning &  bar',
				'Home Storage',
				'Garden Suplies',
				'Home Decor',
			],
		},
		{
			image: 'chill',
			categoryName: 'Getaways',
			subCategories: ['Cruises', 'Hotels and Escapes', 'Resorts'],
		},
	];
	return (
		<ScrollView>
			<View className="p-4">
				{categories.map((category, index) => (
					<Category
						onPress={() => {
							setSelectedCategory(category);
							navigation.openDrawer();
						}}
						key={index}
						{...category}
					/>
				))}
			</View>
		</ScrollView>
	);
};
const DrawerContent = ({ selectedCategory }) => {
	const icon =
		selectedCategory?.image === 'beautyAndSpa'
			? require('../assets/beautyAndSpa.jpg')
			: selectedCategory?.image === 'sports'
			? require('../assets/bicycle.jpg')
			: selectedCategory?.image === 'electronics'
			? require('../assets/electricals.jpg')
			: selectedCategory?.image === 'appliances'
			? require('../assets/electronics.jpg')
			: selectedCategory?.image === 'chill'
			? require('../assets/umbrella.jpg')
			: require('../assets/foodDrinks.jpg');

	return (
		<View className="flex-1 ">
			<View className="pt-14">
				<View className="mb-6 ">
					<View className="w-full h-28 mx-auto ">
						<Image
							source={icon}
							style={styles.imageStyles}
							className="mx-auto"
						/>
					</View>
					<Text className="uppercase font-bold text-center my-4 tracking-widest">
						{selectedCategory.categoryName}
					</Text>
				</View>
				<View>
					{selectedCategory?.subCategories.map((cat, index) => {
						return (
							<Pressable
								onPress={() => Alert.alert('pressed')}
								style={styles.borderBottom}
								className="w-4/5 "
							>
								<Text
									className="text-gray-400 pl-6"
									key={index}
									style={styles.subCategoriesStyles}
								>
									{cat}
								</Text>
							</Pressable>
						);
					})}
				</View>
			</View>
		</View>
	);
};
function Search() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	return (
		<Drawer.Navigator
			drawerContent={() => (
				<DrawerContent selectedCategory={selectedCategory} />
			)}
		>
			<Drawer.Screen
				name="Home"
				options={{ headerShown: false, drawerPosition: 'right' }}
			>
				{(props) => (
					<Content setSelectedCategory={setSelectedCategory} />
				)}
			</Drawer.Screen>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	subCategoriesStyles: {
		paddingVertical: 5,
		fontSize: 16,
	},
	imageStyles: {
		marginHorizontal: 'auto',
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'contain',
	},
	borderBottom: {
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		marginBottom: 10,
		paddingBottom: 5,
	},
});
export default Search;
