import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/productCard';
import ProductStats from '../components/ProductStats';
import { ScrollView } from 'react-native-gesture-handler';
import ProductDetailSection from '../components/ProductDetailSection';
import Comment from '../components/Comment';
import Location from '../components/Location';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Feedback from '../components/Reviews';
import CountdownClock from '../components/CounterClock';
import Button from '../components/Button';
import { Alert } from 'react-native';
const textualContent =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas ea omnis impedit fuga praesentium, laboriosam dignissimos iste. Placeat et ullam doloribus unde eaque accusantium labore laboriosam perferendis, consequatur ipsam.';
const iconStyles = { size: 14, color: '#13d0ca' };

const productScreenData = [
	{
		title: 'What you get',
		textualContent:
			'What you get What you getWhat you getWhat you getWhat you getWhat you getWhat you get',
		icon: <Ionicons name="bulb" {...iconStyles} />,
	},
	{
		title: 'About This Deal',
		textualContent: textualContent,
		icon: <Entypo name="info-with-circle" {...iconStyles} />,
	},
	{
		title: 'The Fine Print',
		textualContent: textualContent,
		icon: <Ionicons name="newspaper" {...iconStyles} />,
	},
	{
		title: 'Feedbacks',
		extraComponent: (
			<>
				<Feedback />
				<Comment />
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

const ProductScreen = ({ feedbacks }) => {
	return (
		<ScrollView className="">
			<View className="flex-1 min-h-screen pb-8 bg-white">
				<ProductCard productScreen={true} />
				<ProductStats />
				<CountdownClock targetDate={'2023-8-31T23:59:59'} />
				<View className="bg-white flex-1 pl-12 pr-2 pt-6 ">
					{productScreenData.map(
						(
							{ textualContent, icon, title, extraComponent },
							index,
						) => (
							<ProductDetailSection
								key={index}
								textualContent={textualContent}
								title={title}
								icon={icon}
								extraComponent={
									extraComponent && extraComponent
								}
							/>
						),
					)}
				</View>
				<Button
					label={'Buy deal'}
					onPress={() => Alert.alert('clicked')}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

export default ProductScreen;
