import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ProductDetailSection = ({
	title,
	textualContent,
	icon,
	extraComponent,
}) => {
	const [viewExpanded, setViewExpanded] = useState(false);
	const iconStyles = {
		size: 16,
		color: '#32CD32',
	};
	return (
		<Pressable
			onPress={() => {
				setViewExpanded(!viewExpanded);
			}}
			className="relative  min-h-[50] border-l-2 border-gray-200"
		>
			<View className="w-6 h-6 rounded-[50%] absolute -top-[2] -left-[12] border-2 border-gray-100 bg-white flex justify-center items-center">
				{icon}
			</View>
			<View className="pl-5">
				<View className="flex flex-row justify-between pr-3 items-center">
					<Text className="font-semibold tracking-wide text-accent mb-4 text-md">
						{title ? title : 'title ? '}
					</Text>
					{viewExpanded ? (
						<FontAwesome5 {...iconStyles} name="caret-up" />
					) : (
						<FontAwesome5 {...iconStyles} name="caret-down" />
					)}
				</View>

				{textualContent && (
					<Text
						className="pb-5 text-gray-500 text-xs tracking-wide"
						style={
							viewExpanded
								? styles.viewExpanded
								: styles.viewCollapsed
						}
					>
						{textualContent}
					</Text>
				)}
			</View>
			<View
				style={
					viewExpanded ? styles.viewExpanded : styles.viewCollapsed
				}
			>
				{extraComponent && extraComponent}
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	viewExpanded: {
		height: 'auto',
	},
	viewCollapsed: {
		display: 'none',
	},
});

export default ProductDetailSection;
