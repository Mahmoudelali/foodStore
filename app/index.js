import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
// import Welcome from './screens/Welcome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Page() {
	const token = true;
	const initialRouteName = token ? 'Nav' : 'Login';
	return (
		<>
			<Stack.Navigator initialRouteName={'ChangePassword'}>
				{/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="AddressBook" component={AddressBookCard} />
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
				<Stack.Screen name="WishList" component={Notifications} />
				<Stack.Screen name="ChangePassword" component={ChangePassword} />
				<Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
				<Stack.Screen
					options={{ headerShown: true, title: 'edit address' }}
					name="AddressBookEdit"
					component={AddressBookEdit}
				/>
			</Stack.Navigator>
		</>
	);
}
