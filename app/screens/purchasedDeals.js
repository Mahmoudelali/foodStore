import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import OrderBox from '../components/UsedBox';
import NotFound from '../components/NotFound';

export default function PurchasedDeals({ route }) {
  const { data } = route.params;
  
	console.log('data', JSON.stringify(data, null, 2));
	return (
		<ScrollView className="pt-3">
			{data.length === 0 ? (
				<NotFound label="No purchased deals found" />
			) : (
				data.map((offer) => {
					return (
						<OrderBox key={offer.id} {...offer} status="active" />
					);
				})
			)}
		</ScrollView>
	);
}
