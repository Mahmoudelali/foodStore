import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import axios from 'axios';
import { uri } from '../index.js';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({ setData, setLoading }) => {
	const [queryset, setQueryset] = useState(null);
	const [location, setLocation] = useState(null);
	const handleQuery = () => {
		if (!queryset && !location) {
			return '';
		} else if (queryset && !location) {
			return `?queryset=${queryset}`;
		} else if (location && !queryset) {
			return `?location=${location}`;
		} else {
			return `?location=${location}&queryset=${queryset}`;
		}
	};
	const allOffersURL =
		process.env.EXPO_PUBLIC_SERVER_URL + 'api/getalloffers/';
	var filteringURI = `${uri}api/searchoffers/${handleQuery()}`;
	let timeoutId = null;

	const getfilteredOffers = (url) => {
		setLoading(true);
		axios
			.get(`${url}`)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err.message));
	};

	useEffect(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		if (!queryset && !location) getfilteredOffers(allOffersURL);
		else {
			timeoutId = setTimeout(() => {
				getfilteredOffers(filteringURI);
			}, 600);
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [queryset, location]);
	const inputFields = [
		{
			icon: 'search',
			placeholder: 'Search Coupway..',
			onChangeText: setQueryset,
		},
		{
			icon: 'location-outline',
			placeholder: 'Location',
			onChangeText: setLocation,
		},
	];
	return (
		<View className="overflow-hidden">
			<View className="flex-row bg-white mb-2  mx-auto">
				{inputFields.map((field, index) => (
					<View className="basis-3/5" key={index}>
						<Ionicons
							name={field.icon}
							size={20}
							color={'#13d0ca'}
							style={style.searchIcons}
						/>
						<TextInput
							onChangeText={field.onChangeText}
							placeholder={field.placeholder}
							placeholderTextColor={'gray'}
							className="text-gray-600 leading-4 p-2 relative pl-7"
						/>
					</View>
				))}

				{/* <View className="h-[100%] w-[1] bg-gray-300" /> */}
				{/* <View className="basis-2/5">
					<EvilIcons
						name="location"
						size={24}
						color="#13d0ca"
						style={style.searchIcons}
					/>
					<TextInput
						clearTextOnFocus={true}
						onChangeText={setLocation}
						style={style.searchIcons}
						placeholder="Location"
						placeholderTextColor={'gray'}
						className="text-gray-600 relative pl-7"
					/>
				</View> */}
			</View>
		</View>
	);
};
export default SearchInput;
const style = StyleSheet.create({
	searchIcons: {
		position: 'absolute',
		top: 7,
		left: 5,
	},
});
