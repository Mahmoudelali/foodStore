import registerNNPushToken, { registerIndieID } from 'native-notify';
import React, { useState, createContext, useEffect, useRef } from 'react';
import WelcomePage from './screens/Welcome';
import ProductCard from './components/productCard';
import Home from './screens/home';
import Basket from './screens/Basket';
import Search from './screens/search.js';
import Login from './screens/Login';
import Nav from './components/nav';
import Register from './components/Register';
import ProductScreen from './screens/ProductScreen';
import AddressBook from './components/AddressBook';
import AddressBookEdit from './components/AddressBook_edit';
import ChangePassword from './screens/ChangePassword';
import MyCoupon from './screens/myCoupon';
import PurchasedDeals from './screens/purchasedDeals';
import UsedDeals from './screens/usedDeals';
import ReservedDeals from './screens/reservedDeals';
import Contact from './screens/contactus';
import MyDetails from './screens/MyDetails';
import About from './screens/aboutUs';
import AboutCoupway from './screens/aboutCoupWay';
import TermsCondition from './screens/termsCondition';
import AppSetting from './screens/appSetting';
import Checkout from './screens/Checkout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FiltratedOffers from './screens/customFiltrationScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './screens/profile.js';

const Stack = createNativeStackNavigator();
const screenOptions = {
	tabBarShowLabel: false,
	headerShown: true,
	headerTintColor: 'white',
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
export const BasketContext = createContext();
export const QueryContext = createContext();
export const LoggedInContext = createContext();
export const UserContext = createContext();

export default function Page() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [basket, setBasket] = useState([]);
	const [queryset, setQueryset] = useState(null);
	const [user, setUser] = useState(null);
	// registerNNPushToken(12331, 'L4XCS1Ezhz6YHOS7hIr6hR');
	registerIndieID(user?.user_id, 12331, 'L4XCS1Ezhz6YHOS7hIr6hR');

	useEffect(() => {
		const bootstrapAsync = async () => {
			let data;
			try {
				data = await AsyncStorage.getItem('user_data');
				const parsedData = JSON.parse(data);
				setUser(parsedData);
			} catch (e) {
				console.log(e);
			}
		};
		bootstrapAsync();
	}, []);

	return (
		<UserContext.Provider value={[user, setUser]}>
			<LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
				<QueryContext.Provider value={[queryset, setQueryset]}>
					<BasketContext.Provider value={[basket, setBasket]}>
						<Stack.Navigator
							initialRouteName={'Nav'}
							screenOptions={screenOptions}
						>
							{user === null ? (
								<>
									<Stack.Screen name="Welcome">
										{() => (
											<WelcomePage
												setUser={setUser}
												setIsLoggedIn={setIsLoggedIn}
											/>
										)}
									</Stack.Screen>
									<Stack.Screen name="Register">
										{() => (
											<Register
												setUser={setUser}
												setIsLoggedIn={setIsLoggedIn}
											/>
										)}
									</Stack.Screen>
									<Stack.Screen name="Login">
										{() => (
											<Login
												setUser={setUser}
												setIsLoggedIn={setIsLoggedIn}
											/>
										)}
									</Stack.Screen>
								</>
							) : (
								<>
									<Stack.Screen
										name="ProductCard"
										component={ProductCard}
									/>
									<Stack.Screen name="Profile">
										{() => (
											<Profile
												userData={user}
												setUser={setUser}
											/>
										)}
									</Stack.Screen>

									<Stack.Screen
										name="Basket"
										component={Basket}
									/>
									<Stack.Screen
										name="Home"
										component={Home}
									/>
									<Stack.Screen
										name="Search"
										component={Search}
									/>
									<Stack.Screen
										name="Checkout"
										component={Checkout}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'MY DETAILS',
										}}
										name="MyDetails"
										component={MyDetails}
									/>
									<Stack.Screen
										name="AddressBook"
										component={AddressBook}
									/>
									<Stack.Screen
										name="FiltratedOffers"
										component={FiltratedOffers}
									/>
									<Stack.Screen
										name="ProductScreen"
										component={ProductScreen}
									/>
									<Stack.Screen
										name="ChangePassword"
										component={ChangePassword}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'edit address',
										}}
										name="AddressBookEdit"
										component={AddressBookEdit}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'MY COUPON',
										}}
										name="MyCoupon"
										component={MyCoupon}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'ABOUT COUPWAY',
										}}
										name="AboutCoupway"
										component={AboutCoupway}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'TERMS & CONDITION',
										}}
										name="TermsCondition"
										component={TermsCondition}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'PURCHASED DEALS',
										}}
										name="PurchasedDeals"
										component={PurchasedDeals}
									/>

									<Stack.Screen
										options={{
											headerShown: true,
											title: 'APP SETTING',
										}}
										name="AppSetting"
										component={AppSetting}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'ABOUT US',
										}}
										name="AboutUs"
										component={About}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'USED DEALS',
										}}
										name="UsedDeals"
										component={UsedDeals}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'RESERVED DEALS',
										}}
										name="ReservedDeals"
										component={ReservedDeals}
									/>
									<Stack.Screen
										options={{
											headerShown: true,
											title: 'CONTACT US',
										}}
										name="ContactUs"
										component={Contact}
									/>
									<Stack.Screen
										name="Nav"
										component={Nav}
										options={{ headerShown: false }}
									/>
								</>
							)}
						</Stack.Navigator>
					</BasketContext.Provider>
				</QueryContext.Provider>
			</LoggedInContext.Provider>
		</UserContext.Provider>
	);
}
