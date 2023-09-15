import { Text, ScrollView } from 'react-native';
import React from 'react';
import PurchasedBox from '../components/PurchasedBox';
import OrderBox from '../components/UsedBox';

export default function UsedDeals({ route }) {
	const { data } = route.params;

	return (
		<ScrollView className="pt-4">
			{data.map((off) => (
				<OrderBox key={off.id} {...off} />
			))}
		</ScrollView>
	);
}
