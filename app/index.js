import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './screens/Welcome';
import Home from './screens/home';
import Search from './screens/search.js';
import Login from './screens/Login';
import Nav from './components/nav';
import Register from './components/Register';
import ProductScreen from './screens/ProductScreen';
import Notifications from './screens/WishList';
import AddressBookCard from './components/AddressBookCard';
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

const Stack = createNativeStackNavigator();
export default function Page() {
	const token = false;
	const initialRouteName = token ? 'Nav' : 'Login';
	return (
		<>
			<Stack.Navigator
				initialRouteName={'Nav'}
				screenOptions={screenOptions}
			>
				<Stack.Screen name="Welcome" component={WelcomePage} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen 
					options={{ headerShown: true, title: 'MY DETAILS' }}
				
				name="MyDetails" component={MyDetails} />

				<Stack.Screen name="AddressBook" component={AddressBookCard} />
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
		</>
	);
}
