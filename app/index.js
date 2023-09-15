import React, { useState, createContext, useEffect } from 'react';

import WelcomePage from './screens/Welcome';
import ProductCard from './components/productCard';
import Home from './screens/home';
import Basket from './screens/Basket';
import Search from './screens/search.js';
import Login from './screens/Login';
import Nav from './components/nav';
import Register from './components/Register';
import ProductScreen from './screens/ProductScreen';
import Notifications from './screens/WishList';
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
export const toast_options = {
	visibilityTime: 2000,
	position: 'top',
	topOffset: 10,
};
export const uri = process.env.EXPO_PUBLIC_SERVER_URL;
const Stack = createNativeStackNavigator();
export const BasketContext = createContext();
export const QueryContext = createContext();
export default function Page() {
	const token = false;
	const initialRouteName = token ? 'Nav' : 'Login';


	return (
			<Stack.Navigator
				initialRouteName={'Nav'}
				screenOptions={screenOptions}
			>
				<Stack.Screen name="Welcome" component={WelcomePage} />
				<Stack.Screen name="ProductCard" component={ProductCard} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Basket" component={Basket} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Checkout" component={Checkout} />
				<Stack.Screen
					options={{ headerShown: true, title: 'MY DETAILS' }}
					name="MyDetails"
					component={MyDetails}
				/>
				<Stack.Screen name="AddressBook" component={AddressBook} />
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
				<Stack.Screen name="WishList" component={Notifications} />
				<Stack.Screen
					name="ChangePassword"
					component={ChangePassword}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'edit address' }}
					name="AddressBookEdit"
					component={AddressBookEdit}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'MY COUPON' }}
					name="MyCoupon"
					component={MyCoupon}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'ABOUT COUPWAY' }}
					name="AboutCoupway"
					component={AboutCoupway}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'TERMS & CONDITION' }}
					name="TermsCondition"
					component={TermsCondition}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'PURCHASED DEALS' }}
					name="PurchasedDeals"
					component={PurchasedDeals}
				/>

				<Stack.Screen
					options={{ headerShown: true, title: 'APP SETTING' }}
					name="AppSetting"
					component={AppSetting}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'ABOUT US' }}
					name="AboutUs"
					component={About}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'USED DEALS' }}
					name="UsedDeals"
					component={UsedDeals}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'RESERVED DEALS' }}
					name="ReservedDeals"
					component={ReservedDeals}
				/>
				<Stack.Screen
					options={{ headerShown: true, title: 'CONTACT US' }}
					name="ContactUs"
					component={Contact}
				/>
				<Stack.Screen
					name="Nav"
					component={Nav}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>

	);
}
