import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function WelcomePage({ navigation }) {
	return (
		<View className="flex-1 relative">
			<View className="absolute inset-0 w-full h-full bg-[#00000070] z-10" />
			<View>
				<Image
					style={styles.imageStyle}
					source={{
						uri: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1600',
					}}
					alt="hero shopping image"
				/>
			</View>
			<Image
				style={styles.logoStyles}
				className="absolute w-full bottom-10 z-20"
				source={require('../assets/Coupway_-_1-removebg-preview.png')}
			/>

			<View className="absolute -bottom-14 -left-[15%] w-[130%] -rotate-6  max-h-48  z-50  overflow-hidden">
				<View className="rotate-6 flex flex-row w-screen mx-auto h-full bggre bottom-6">
					<View className="w-1/2 h-40  px-[15%] bg-[#15b5ac] flex justify-center">
						<Pressable onPress={() => navigation.navigate('Login')}>
							<Ionicons
								name="mail-outline"
								size="40"
								style={styles.iconStyles}
							/>
						</Pressable>
					</View>
					<View className="w-1/2 h-40  px-[15%] flex justify-center bg-accent-100 ">
						<Pressable onPress={() => navigation.navigate('Nav')}>
							<Ionicons
								name="chevron-forward-outline"
								size="40"
								style={styles.iconStyles}
							/>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	imageStyle: {
		maxWidth: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	logoStyles: {
		maxWidth: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	iconStyles: {
		textAlign: 'center',
		color: 'white',
	},
});

export default WelcomePage;
