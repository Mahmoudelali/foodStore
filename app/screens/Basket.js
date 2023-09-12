import React, { createContext, useContext, useState } from 'react';
import BasketItem from '../components/BasketItem';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BasketContext } from '../index.js';
import { useNavigation } from '@react-navigation/native';
import NotFound from '../components/NotFound';
import Button from '../components/Button';
import axios, { Axios } from 'axios';
import Toast from 'react-native-toast-message';

const Basket = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false);
	const [basket, setBasket] = useContext(BasketContext);
	const user_id = 1; // to be changed
	const order_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/createorder/`;

	const showToast = (type, label1, label2) => {
		return Toast.show({
			type: type,
			text1: label1,
			text2: label2 || '',
		});
	};
	const postOffer = () => {
		setLoading(true);
		const req_body = [];
		let offer_data = {
			user_id,
			coupons_ordered: 1,
		};
		for (let i in basket) {
			offer_data.offer_id = basket[i].id;
			req_body.push(offer_data);
			offer_data = { user_id, coupons_ordered: 1 };
		}
		axios
			.post(order_uri, req_body)
			.then((res) => {
				showToast(
					'success',
					'Order placed successfully',
					'Redirecting to Whatsapp',
				);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
				showToast('error', 'sorry, something went wrong');
			});
	};

	return (
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<View className="relative z-10">
				<Toast visibilityTime={2000} position="top" topOffset={10} />
			</View>
			{loading ? (
				<Text>Loading ..</Text>
			) : basket.length == 0 ? (
				<NotFound label={'Which List is empty!'} />
			) : (
				<View className="pb-20 ">
					<Pressable>
						{basket.map((off, index) => {
							return (
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
									image={off.main_picture}
								/>
							);
						})}
					</Pressable>
					<Button
						label={'Proceed to Checkout'}
						buttonStyle={{
							marginTop: 10,
						}}
						onPress={() => postOffer()}
					/>
				</View>
			)}
		</ScrollView>
	);
};

export default Basket;
