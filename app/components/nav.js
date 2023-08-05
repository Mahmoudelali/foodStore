import {
	AntDesign,
	MaterialIcons,
	Feather,
	Ionicons,
	Fontisto,
	SimpleLineIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import SearchInput from './searchInput.js';
import Notification from '../screens/WishList.js';
import Fav from '../screens/fav.js';
import Profile from '../screens/profile.js';
import { StatusBar } from 'expo-status-bar';
import Home from '../screens/home';
import Search from '../screens/search.js';
const Tab = createBottomTabNavigator();
const screenOptions = {
	tabBarShowLabel: false,
	headerShown: true,
	headerStyle: {
		backgroundColor: '#13d0ca',
	},
	tabBarStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 40,
		backgroundColor: '#13d0ca',
	},
};
export default function Nav() {
	return (
		<>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						headerTitleAlign: 'center',

						tabBarIcon: ({ focused }) => {
							return (
								<View className=" items-center justify-start">
									{focused ? (
										<Fontisto
											name="home"
											size={24}
											color={'#e2fafb'}
										/>
									) : (
										<SimpleLineIcons
											name="home"
											size={24}
											color={'#e2fafb'}
										/>
									)}
								</View>
							);
						},
						headerTitle: () => <SearchInput />,
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View className="items-center justify-center">
									<StatusBar backgroundColor="black" />
									{focused ? (
										<Feather
											name="search"
											size={24}
											color={'#e2fafb'}
										/>
									) : (
										<AntDesign
											name="search1"
											size={24}
											color={'#e2fafb'}
										/>
									)}
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Notification"
					component={Notification}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View className="items-center justify-center">
									{focused ? (
										<Ionicons
											name="ios-notifications-sharp"
											size={24}
											color={'#e2fafb'}
										/>
									) : (
										<Ionicons
											name="ios-notifications-outline"
											size={24}
											color={'#e2fafb'}
										/>
									)}
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Fav"
					component={Fav}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<View className="items-center justify-center">
									{focused ? (
										<MaterialIcons
											name="favorite"
											size={24}
											color={'#e2fafb'}
										/>
									) : (
										<MaterialIcons
											name="favorite-border"
											size={24}
											color={'#e2fafb'}
										/>
									)}
								</View>
							);
						},
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						headerShown: false,
						tabBarIcon: ({ focused }) => {
							return (
								<View className="items-center justify-center">
									{focused ? (
										<Ionicons
											name="person"
											size={24}
											color={'#e2fafb'}
										/>
									) : (
										<Ionicons
											name="person-outline"
											size={24}
											color={'#e2fafb'}
										/>
									)}
								</View>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</>
	);
}
