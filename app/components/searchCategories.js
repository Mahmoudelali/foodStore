// DrawerContent.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { uri } from '../index.js';
import { QueryContext } from '../index.js';
import { useNavigation } from 'expo-router';

const DrawerContent = ({ selectedCategory }) => {
	const navigation = useNavigation();
	const [queryset, setQueryset] = useState('');
	const image_path = `${uri.substring(
		'/',
	)}${selectedCategory?.category_illustration.replace(/\//, '')}`;
	useEffect(() => {
		navigation.navigate('FiltratedOffers', {
			queryset: `queryset=${queryset}`,
		});
	}, [queryset]);
	return (
		<View className="flex-1 ">
			<View className="pt-14">
				<View className="mb-6 ">
					<View className="h-28 mx-auto ">
						<Image
							source={{ uri: image_path }}
							style={styles.imageStyles}
							className="mx-auto"
						/>
					</View>
					<Text className="uppercase font-bold text-center my-4 tracking-widest text-gray-600">
						{selectedCategory?.name}
					</Text>
				</View>
				{selectedCategory?.subcategories.map(({ name, id }) => {
					return (
						<Pressable
							key={id}
							onPress={() => {
								setQueryset(name);
							}}
							style={styles.borderBottom}
							className="w-4/5 "
						>
							<Text
								className="text-gray-400 pl-6"
								style={styles.subCategoriesStyles}
							>
								{name}
							</Text>
						</Pressable>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	subCategoriesStyles: {
		paddingVertical: 5,
		fontSize: 16,
	},
	imageStyles: {
		marginHorizontal: 'auto',
		width: 120,
		height: 120,
		objectFit: 'contain',
	},
	borderBottom: {
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		marginBottom: 10,
		paddingBottom: 5,
	},
});
export default DrawerContent;
