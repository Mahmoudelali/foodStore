import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { calculateRemainingTime } from './data';
const time = ['D', 'H', 'M', 'S'];
const CountdownClock = ({ targetDate }) => {
	const [remainingTime, setRemainingTime] = useState(
		calculateRemainingTime(targetDate),
	);

	useEffect(() => {
		const interval = setInterval(() => {
			const newRemainingTime = calculateRemainingTime(targetDate);
			setRemainingTime(newRemainingTime);
		}, 1000);

		// Clear the interval on unmount to avoid memory leaks
		return () => clearInterval(interval);
	}, [targetDate]);

	return (
		<View className="flex flex-row gap-x-1 mx-auto absolute px-2">
			{remainingTime.map(({ value, label }, index) => (
				<View key={index}>
					<Text className="text-center text-lg font-bold ">
						{' '}
						{value}
					</Text>
					<Text className="text-center text-xs text-accent-100">
						{label}
					</Text>
				</View>
			))}
		</View>
	);
};

export default CountdownClock;
