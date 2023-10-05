import React from 'react';
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';

const DeliveryOption = ({
	label,
	type,
	description,
	deliveryMethod,
	setDeliveryMethod,
}) => {
	return (
		<Pressable
			className="flex flex-row items-center justify-between py-3 mb-5"
			style={styles.deliveryOptionStyles}
			onPress={() => Alert.alert('pressed')}
		>
			<View>
				<View className="flex flex-row ">
					<Text className="uppercase mr-3 font-bold mb-2">
						{label}
					</Text>
					<Text>{type}</Text>
				</View>
				<Text className="text-gray-500">{description}</Text>
			</View>

			<RadioButton
				selected={deliveryMethod == 'free' && true}
				value={deliveryMethod}
				borderColor={deliveryMethod == 'free' ? '#13d0ca' : 'gray'}
				id={deliveryMethod}
			/>
		</Pressable>
	);
};
const DeliveryOptions = () => {
	const options = [
		{
			label: 'free',
			type: 'Standard Delivery',
			description: 'Delivered within 2 weeks from payment day',
		},
		{
			label: '$ 6.00',
			type: 'Express Delivery',
			description: 'Delivered within 3 days from your payment',
		},
	];
	return (
		<View className="bg-white  my-5 py-4 px-5 ">
			<Text className="uppercase text-lg font-bold mb-5 ">
				Delivery Options
			</Text>
			{options.map((opt, index) => {
				return <DeliveryOption key={index} {...opt} />;
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	deliveryOptionStyles: {
		borderTopWidth: 1,
		borderColor: 'lightgray',
	},
	radioStyles: {
		color: '#13d0ca',
		size: 20,
		labelStyle: { color: 'gray' },
	},
});

export default DeliveryOptions;
