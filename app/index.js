import { View, TextInput, Text } from 'react-native';
import Home from './screens/home';
import Search from './screens/search.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	AntDesign,
	MaterialIcons,
	Feather,
	Ionicons,
	Fontisto,
	SimpleLineIcons,
} from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Nav from './components/nav';
import Register from './components/Register';
import ProductCard from './components/productCard';

import SearchInput from './components/searchInput';
import Notification from './screens/notification.js';
import Fav from './screens/fav.js';
import Profile from './screens/profile.js';
import { StatusBar } from 'expo-status-bar';
import ProductScreen from './screens/ProductScreen';
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

const Stack = createNativeStackNavigator();

export default function Page() {
	const token = true;
	const initialRouteName = token ? 'Nav' : 'Login';
	return (
		<>
			<Stack.Navigator initialRouteName={'ProductScreen'}>
				<Stack.Screen
					name="Nav"
					component={Nav}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
			</Stack.Navigator>
		</>
	);
}
