import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import ProductCard from '../components/productCard';
import ProductStats from '../components/ProductStats';
import ProductDetailSection from '../components/ProductDetailSection';
import Comment from '../components/Comment';
import Location from '../components/Location';
import Feedback from '../components/Reviews';
import CountdownClock from '../components/CounterClock';
import Button from '../components/Button';
import useFetch from '../components/useFetch';

const iconStyles = { size: 14, color: '#13d0ca' };

const ProductScreen = ({ route }) => {
	const id = route.params.product;

	uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${id}`;
	const feedbacks_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${id}/provide-feedback`;
	const [data, loading] = useFetch(uri);
	const [feedbacks, feedbackLoading] = useFetch(feedbacks_uri);

	const productScreenData = [
		{
			title: 'What you get',
			textualContent: data?.compensations,
			icon: <Ionicons name="bulb" {...iconStyles} />,
		},
		{
			title: 'About This Deal',
			textualContent: data?.description,
			icon: <Entypo name="info-with-circle" {...iconStyles} />,
		},
		{
			title: 'The Fine Print',
			textualContent: data?.fine_print,
			icon: <Ionicons name="newspaper" {...iconStyles} />,
		},
		{
			title: 'Feedbacks',
			extraComponent: (
				<>
					<Feedback feedbacks={feedbacks} />
					<Comment offer_id={id} />
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
		<ScrollView>
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
					/>
					<CountdownClock targetDate={'2023-10-31T23:59:59'} />
					<View className="bg-white flex-1 pl-12 pr-2 pt-6 ">
						{productScreenData.map((section, index) => (
							<ProductDetailSection key={index} {...section} />
						))}
					</View>
					<Button
						label={'Buy deal'}
						onPress={() => Alert.alert('clicked')}
					/>
				</View>
			)}
		</ScrollView>
	);
};

export default ProductScreen;
