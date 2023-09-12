import React, { useRef } from 'react';
import { View, Text, Linking } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import ProductCard from '../components/productCard';
import ProductStats from '../components/ProductStats';
import ProductDetailSection from '../components/ProductDetailSection';
import Comment from '../components/Comment';
import Location from '../components/Location';
import Feedback from '../components/Reviews';
import CountdownClock from '../components/CounterClock';
import Button from '../components/Button';
import useFetch from '../components/useFetch';
import axios from 'axios';
import { toast_options } from '../index.js';

const showToast = (type, label1, label2) => {
	return Toast.show({
		type: type,
		text1: label1,
		text2: label2 || '',
	});
};

const ProductScreen = ({ route }) => {
	const scrollRef = useRef();

	const toTop = () => {
		console.log('scroll Fired');
		scrollRef.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	const sendWhatsAppMessage = (number, message) => {
		const whatsappUrl = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
			message,
		)}`;

		Linking.openURL(whatsappUrl)
			.then(() => console.log('WhatsApp message sent'))
			.catch((error) =>
				console.error('Error sending WhatsApp message', error),
			);
	};

	const user_id = 1;
	const offer_id = route.params.product;
	uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}`;
	const order_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/createorder/`;
	const feedbacks_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}/provide-feedback`;
	const [feedbacks, feedbackLoading, setFeedbacks] = useFetch(feedbacks_uri);
	const [data, loading] = useFetch(uri);
	const order_data = [
		{
			user_id,
			offer_id,
			coupons_ordered: 1,
			test: 'test',
		},
	];

	const postOffer = () => {
		axios
			.post(order_uri, order_data)
			.then((res) => {
				console.log(res.data[0]);
				const offer = res.data[0];
				showToast(
					'success',
					'Order placed successfully',
					'Redirecting to Whatsapp..',
				);
				var message = `Hi, i'm interested to order the offer with 
Offer id : ${offer.id}
My id : ${offer.user_id}
Activate it for me ASAP, please.
				`;
				setTimeout(() => {
					sendWhatsAppMessage('96176325264', message);
				}, 2000);
			})
			.catch((err) => console.log(err.message));
	};

	const productScreenData = [
		{
			title: 'What you get',
			textualContent: data?.compensations,
			icon: <Ionicons name="bulb" size={14} color="#13d0ca" />,
		},
		{
			title: 'About This Deal',
			textualContent: data?.description,
			icon: <Entypo name="info-with-circle" size={14} color="#13d0ca" />,
		},
		{
			title: 'The Fine Print',
			textualContent: data?.fine_print,
			icon: <Ionicons name="newspaper" size={14} color="#13d0ca" />,
		},
		{
			title: 'Feedbacks',
			extraComponent: (
				<>
					{feedbackLoading ? (
						<Text>Loading</Text>
					) : (
						<Feedback feedbacks={feedbacks} />
					)}
					<Comment
						toTop={toTop}
						offer_id={offer_id}
						setFeedbacks={setFeedbacks}
						feedbacks={feedbacks}
						feedback_loading={feedbackLoading}
					/>
				</>
			),
			icon: <MaterialIcons name="feedback" size={14} color="#13d0ca" />,
		},
		{
			title: 'Location',
			icon: <Ionicons name="ios-location" size={14} color="#13d0ca" />,
			extraComponent: <Location />,
		},
	];

	return (
		<>
			<ScrollView ref={scrollRef}>
				{loading ? (
					<Text>Loading.. </Text>
				) : (
					<View className="flex-1 min-h-screen pb-8 bg-white">
						<ProductCard
							productScreen={true}
							isModuloFive={true}
							item={data}
						/>
						<ProductStats
							fullValue={data.old_price}
							price={data.new_price}
							coupons={data.coupons}
						/>
						<CountdownClock targetDate={'2023-10-31T23:59:59'} />
						<View className="bg-white flex-1 pl-12 pr-2 pt-6 ">
							{productScreenData.map((section, index) => (
								<ProductDetailSection
									key={index}
									{...section}
								/>
							))}
						</View>
						<Toast {...toast_options} />
						<Button
							label={'Buy deal'}
							onPress={() => {
								postOffer();
								toTop();
							}}
						/>
					</View>
				)}
			</ScrollView>
		</>
	);
};

export default ProductScreen;
