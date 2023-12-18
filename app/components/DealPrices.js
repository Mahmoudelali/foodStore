import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { fonts } from './css';

export const DealPrices = ({ is_hero, old_price, new_price, card_style }) => (
	<View className="self-end translate-y-[75px] pr-2">
		<Text
			style={{ fontFamily: fonts.regular, color: '#13d0cb' }}
			className={
				!is_hero &&
				'text-[10px] uppercase text-right mb-0 tracking-wide text-accent-100'
			}
		>
			Deal Price
		</Text>
		<Text
			style={{
				fontFamily: !is_hero ? fonts.light : fonts.regular,
				fontWeight: 300,
				color: 'gray',
			}}
			className={!is_hero ? ' text-[9px] ' : 'text-sm font-bold'}
		>
			<Text
				style={{
					fontFamily: fonts.regular,
					textDecorationLine: 'line-through',
				}}
				className="font-thin"
			>
				{old_price}$
			</Text>
			{' - '}
			<Text
				className="text-accent-100"
				style={{ color: '#13d0cb', fontWeight: 800 }}
			>
				{new_price}$
			</Text>
		</Text>
	</View>
);

const styles = StyleSheet.create({});

export default DealPrices;
