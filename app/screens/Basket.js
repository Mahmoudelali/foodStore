import React, { createContext, useContext, useState } from 'react';
import BasketItem from '../components/BasketItem';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BasketContext } from '../index.js';
import { useNavigation } from '@react-navigation/native';
import NotFound from '../components/NotFound';

const Basket = () => {
	const navigation = useNavigation();
	const [basket, setBasket] = useContext(BasketContext);

	return (
		<ScrollView>
			{basket.length == 0 ? (
				<NotFound label={'Which List is empty!'} />
			) : (
				<Pressable>
					{basket.map((off, index) => (
						<BasketItem
							pressHandler={() =>
								navigation.push('ProductScreen', {
									product: off.id,
									productScreen: true,
								})
							}
							key={index}
							highlights={off.highlights}
							location={off.company.city}
							placeName={off.company.name}
							price={off.new_price}
						/>
					))}
				</Pressable>
			)}
		</ScrollView>
	);
};

export default Basket;
