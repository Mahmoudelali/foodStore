import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductStats = ({
	availableQuantity,
	TimeRemaining,
	fullValue,
	price,
}) => {
	return (
		<View className="flex flex-row py-3">
			<View className="basis-1/4  border-r-2 border-gray-200">
				<Text className="text-center text-gray-400 text-xs  ">
					Available
				</Text>
				<Text className="text-center text-black text-sm ">
					{availableQuantity ? availableQuantity : '10/29'}
				</Text>
			</View>
			<View className="basis-1/4  border-r-2 border-gray-200">
				<Text className="text-center text-gray-400 text-xs  ">
					Time Remaining
				</Text>
				<Text className="text-center text-black text-sm ">
					{TimeRemaining ? TimeRemaining : '15 Days'}
				</Text>
			</View>
			<View className="basis-1/4  border-r-2 border-gray-200">
				<Text className="text-center text-gray-400 text-xs  ">
					Full Value
				</Text>
				<Text className="text-center text-black text-sm ">
					{fullValue ? fullValue : '$100'}
				</Text>
			</View>
			<View className="basis-1/4  border-r-2 border-gray-200">
				<Text className="text-center text-gray-400 text-xs  ">
					Price
				</Text>
				<Text className="text-center text-sm text-accent-100">
					{price ? price : '$80'}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ProductStats;