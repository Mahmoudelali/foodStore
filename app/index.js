
import { registerIndieID } from "native-notify";
import React, { useState, createContext, useEffect } from "react";
import WelcomePage from "./screens/Welcome";
import ProductCard from "./components/productCard";
import Login from "./screens/Login";
import Nav from "./components/nav";
import Register from "./components/Register";
import ProductScreen from "./screens/ProductScreen";
import AddressBook from "./components/AddressBook";
import AddressBookEdit from "./components/AddressBook_edit";
import ChangePassword from "./screens/ChangePassword";
import MyCoupon from "./screens/myCoupon";
import PurchasedDeals from "./screens/purchasedDeals";
import UsedDeals from "./screens/usedDeals";
import ReservedDeals from "./screens/reservedDeals";
import Contact from "./screens/contactus";
import MyDetails from "./screens/MyDetails";
import About from "./screens/aboutUs";
import AboutCoupway from "./screens/aboutCoupWay";
import TermsCondition from "./screens/termsCondition";
import AppSetting from "./screens/appSetting";
import Checkout from "./screens/Checkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FiltratedOffers from "./screens/customFiltrationScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";
import { fonts } from "./components/css";

const screenOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#13d0ca",
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 40,
    backgroundColor: "#13d0ca",
  },
  headerTitleStyle: {
    fontFamily: fonts.regular,
  },
};

export const BasketContext = createContext();
export const QueryContext = createContext();
export const LoggedInContext = createContext();
export const UserContext = createContext();
export const DataContext = createContext();

export default function Page() {

	const Stack = createNativeStackNavigator();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [basket, setBasket] = useState([]);
	const [queryset, setQueryset] = useState(null);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true); // New loading state

	async function schedulePushNotification(title, body, data = {}) {
		await Notifications.scheduleNotificationAsync({
			content: {
				title,
				body,
				data,
			},
			trigger: { seconds: 2 },
		});
	}
	useEffect(() => {
		const bootstrapAsync = async () => {
			let data;
			try {
				data = await AsyncStorage.getItem('user_data');
				const parsedData = JSON.parse(data);
				if (parsedData) setUser(parsedData);
				if (parsedData.token) setIsLoggedIn(true);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		bootstrapAsync();
	}, []);

	// Check if data is still loading and render a loading screen if true
	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="#13d0ca" />
				<Text style={styles.loadingText}>Loading...</Text>
			</View>
		);
	}
	return (
		<UserContext.Provider value={[user, setUser]}>
			<LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
				<QueryContext.Provider value={[queryset, setQueryset]}>
					<BasketContext.Provider value={[basket, setBasket]}>
						<Stack.Navigator
							initialRouteName={'Nav'}
							screenOptions={screenOptions}
						>
							{!user || !user.token ? (
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
									<Stack.Screen
										name="Checkout"
										component={Checkout}
									/>
									<Stack.Screen
										options={{
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
									<Stack.Screen name="ProductScreen">
										{({ route }) => (
											<ProductScreen
												route={route}
												onOrder={
													schedulePushNotification
												}
											/>
										)}
									</Stack.Screen>
									<Stack.Screen
										name="ChangePassword"
										component={ChangePassword}
									/>
									<Stack.Screen
										options={{
											title: 'edit address',
										}}
										name="AddressBookEdit"
										component={AddressBookEdit}
									/>
									<Stack.Screen
										options={{
											title: 'MY COUPON',
										}}
										name="MyCoupon"
										component={MyCoupon}
									/>
									<Stack.Screen
										options={{
											title: 'ABOUT COUPWAY',
										}}
										name="AboutCoupway"
										component={AboutCoupway}
									/>
									<Stack.Screen
										options={{
											title: 'TERMS & CONDITION',
										}}
										name="TermsCondition"
										component={TermsCondition}
									/>
									<Stack.Screen
										options={{
											title: 'PURCHASED DEALS',
										}}
										name="PurchasedDeals"
										component={PurchasedDeals}
									/>
									<Stack.Screen
										options={{
											title: 'APP SETTING',
										}}
										name="AppSetting"
										component={AppSetting}
									/>
									<Stack.Screen
										options={{
											title: 'ABOUT US',
										}}
										name="AboutUs"
										component={About}
									/>
									<Stack.Screen
										options={{
											title: 'USED DEALS',
										}}
										name="UsedDeals"
										component={UsedDeals}
									/>
									<Stack.Screen
										options={{
											title: 'RESERVED DEALS',
										}}
										name="ReservedDeals"
										component={ReservedDeals}
									/>
									<Stack.Screen
										name="ContactUs"
										component={Contact}
										options={{
											title: 'CONTACT US',
										}}
									/>
									<Stack.Screen
										name="Nav"
										options={{
											headerShown: true,
											header: () => null,
										}}
									>
										{() => (
											<Nav
												user={user}
												setUser={setUser}
											/>
										)}
									</Stack.Screen>
								</>
							)}
						</Stack.Navigator>
					</BasketContext.Provider>
				</QueryContext.Provider>
			</LoggedInContext.Provider>
		</UserContext.Provider>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	loadingText: {
		marginTop: 16,
		fontSize: 18,
		color: '#13d0ca',
	},
});
