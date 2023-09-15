import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export const DealPrices = ({ is_hero, old_price, new_price, card_style }) => (
	<View className="self-end">
		<Text
			className={
				!is_hero && 'text-[10px] uppercase text-right font-bold mb-0'
			}
		>
			Deal Price
		</Text>
		<Text
			className={!is_hero ? ' text-[9px] font-bold' : 'text-sm font-bold'}
		>
			<Text className="text-accent-100">{old_price}$</Text>
			{' - '}
			<Text>{new_price}$</Text>
		</Text>
	</View>
);

const styles = StyleSheet.create({});

export default DealPrices;
