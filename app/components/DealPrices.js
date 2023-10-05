import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export const DealPrices = ({ is_hero, old_price, new_price, card_style }) => (
	<View className="self-end translate-y-4">
		<Text
			className={
				!is_hero &&
				'text-[10px] uppercase text-right mb-0 tracking-wide font-mono'
			}
		>
			Deal Price
		</Text>
		<Text
			className={
				!is_hero ? ' text-[9px] font-light' : 'text-sm font-bold'
			}
		>
			<Text className="text-accent-100">{old_price}$</Text>
			{' - '}
			<Text className="font-light">{new_price}$</Text>
		</Text>
	</View>
);

const styles = StyleSheet.create({});

export default DealPrices;
