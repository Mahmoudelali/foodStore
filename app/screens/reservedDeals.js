import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import OrderBox from '../components/UsedBox';
import NotFound from '../components/NotFound';

export default function ReservedDeals({ route }) {
	let { data } = route.params;

	return (
		<ScrollView className="pt-3">
			{data.length === 0 ? (
				<NotFound label={`you haven't reserved any deals`} />
			) : (
				data.map((off) => (
					<OrderBox key={off.id} {...off} status="pending" />
				))
			)}
		</ScrollView>
	);
}
