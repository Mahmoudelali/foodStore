import React from 'react';
import { View, StyleSheet } from 'react-native';
import BasketItem from '../components/BasketItem';

const Basket = ({ basketItems }) => {
	return (
		<View>
			{basketItems &&
				basketItems.map((item, index) => <BasketItem key={index} />)}
			<BasketItem />
			<BasketItem />
			<BasketItem />
			<BasketItem />
		</View>
	);
};

const styles = StyleSheet.create({});

export default Basket;
