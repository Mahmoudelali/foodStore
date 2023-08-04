import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// className=" w-[96%] h-[94%] bg-white relative  border-dark-gray overflow-hidden  before:absolute before:-bottom-1 before:-left-5 before:right-0 before:w-[200%]   before:h-[100px] before:-rotate-6
//         before:bg-gradient-to-br from-light-gray from-5% via-light-gray via-30% to-white to-90%"
const ProductCard = ({
	path,
	imageURI,
	badgeType,
	priceBeforeDiscount,
	priceAfterDiscount,
	RestoLocation,
}) => {
	return (
		<Pressable
			onPress={() => {
				Alert.alert('clicked');
			}}
		>
			<LinearGradient
				colors={['#ccc', '#fff']}
				start={{ x: 0, y: 0.2 }}
				end={{ x: 0.9, y: 0.2 }}
			>
				<View className="w-full  h-64 flex flex-row items-center justify-center p-2">
					<View className="relative w-full h-full overflow-hidden mx-auto">
						<Text className="absolute top-4 right-0 z-10 uppercase bg-gray-300 p-1 text-white">
							Premium
						</Text>
						<Image
							source={{
								uri: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
							}}
							alt="food image"
							resizeMode={'cover'}
							style={styles.imageStyles}
						/>

						<LinearGradient
							colors={['#ccc', '#fff']}
							start={{ x: 0.1, y: 0 }}
							end={{ x: 0.1, y: 0.4 }}
							className="absolute bottom-0 -left-5 right-0 w-[200%]   h-[120] -rotate-6   bg-white"
						></LinearGradient>
						<View className="absolute -bottom-2 left-0 right-0 w-full h-[125] flex justify-center p-2">
							<View className="self-end">
								<Text className="text-xs uppercase mb-1  text-right">
									Deal Price
								</Text>
								<Text>
									<Text className="line-through">100$</Text> -
									<Text className="text-green-400"> 80$</Text>
								</Text>
							</View>
							<View className="self-start">
								<Text className="text-lg">
									20% discount on sea food dishes
								</Text>
								<Text>
									<Text className="text-md  text-green-500 uppercase">
										RestoLocation
									</Text>
									<Text className="text-xs text-gray-500">
										{' '}
										lorem lorem{' '}
									</Text>
								</Text>
							</View>
						</View>
						<Text className="text-white">
							lorem ipsum dolor sit amet, consectetur adip
						</Text>
					</View>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	imageStyles: {
		maxWidth: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});
export default ProductCard;
