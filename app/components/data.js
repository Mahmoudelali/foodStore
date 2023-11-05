import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);
};
export const getYearsRange = () => {
	let years = [];
	for (let i = new Date().getFullYear(); i >= 1950; i--) {
		years.push(i);
	}
	return years;
};
export const getDaysRange = () => {
	let days = [];
	for (i = 1; i <= 31; i++) {
		days.push(i);
	}
	return days;
};
export const getMonthsRange = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const priceRanges = [
	{
		from: 0,
		to: 10,
	},
	{
		from: 10,
		to: 25,
	},
	{
		from: 25,
		to: 65,
	},
	{
		from: 65,
		to: 100,
	},
	{
		from: 100,
		to: 150,
	},
	{
		from: 150,
		to: 10000,
	},
];
export const showToast = (type, label1, label2) => {
	return Toast.show({
		type: type,
		text1: label1,
		text2: label2 || '',
	});
};
export const signIn = async (
	data,
	loading_handler,
	user_data_handler,
	loggedInHandler,
) => {
	loading_handler(true);
	const save_user = async (userdata) => {
		try {
			await AsyncStorage.setItem('user_data', JSON.stringify(userdata));
		} catch (error) {
			console.log('error saving user ');
		}
	};

	try {
		const response = await axios.post(
			`${process.env.EXPO_PUBLIC_SERVER_URL}login`,
			data,
		);
		const user_data = response.data;
		await save_user(user_data);
		user_data_handler(user_data);
		loggedInHandler(true);
		loading_handler(false);
	} catch (error) {
		loading_handler(false);
		console.log('err logging in user', error.response.status);
		error.response.status == 400 &&
			showToast(
				'error',
				'wrong username or password',
				'please try again',
			);
	}
};
export const GenderLabels = [
	{
		id: '1',
		label: 'Girl',
		value: 'female',
	},
	{
		id: '2',
		label: 'Guy',
		value: 'male',
	},
];
export const checkBoxLabels = [
	{
		label: 'Sign me up for exclusively COUPWAY discounts by email and text',
		id: 1,
	},
	{ label: 'Yes, Send me updates on selective COUPWAY deals', id: 2 },
	{ label: 'Yes, I agree COUPWAY Terms and Conditions', id: 3 },
];
export const timing = ['days', 'months', 'years'];

export const emailRegex =
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const calculateRemainingTime = (targetDate) => {
	// Convert the target date to a Unix timestamp (in milliseconds)
	const targetTimestamp = new Date(targetDate).getTime();

	// Get the current timestamp (in milliseconds)
	const currentTimestamp = Date.now();

	// Calculate the remaining time in milliseconds
	const remainingTime = targetTimestamp - currentTimestamp;

	// Handle cases where the target date is in the past
	if (remainingTime <= 0) {
		return 'The target date has already passed!';
	}

	// Convert remaining time to days, hours, minutes, and seconds
	const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor(
		(remainingTime % (1000 * 60 * 60)) / (1000 * 60),
	);
	const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	return [
		{
			label: 'D',
			value: days,
		},
		{
			label: 'H',
			value: hours,
		},
		{
			value: minutes,
			label: 'M',
		},

		{
			value: seconds,
			label: 'S',
		},
	];
};

// Example usage:
const targetDate = new Date('2023-12-31T23:59:59');
const remainingTime = calculateRemainingTime(targetDate);
console.log(remainingTime);
