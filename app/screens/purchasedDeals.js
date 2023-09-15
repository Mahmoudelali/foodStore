import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import OrderBox from '../components/UsedBox';

export default function PurchasedDeals({ route }) {
	const { data } = route.params;
	return (
		<ScrollView className="pt-3">
			{data.map((off) => (
				<OrderBox key={off.id} {...off} />
			))}
		</ScrollView>
	);
}
