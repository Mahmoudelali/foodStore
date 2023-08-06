import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../screens/Notifications.js';
import SearchInput from './searchInput.js';
import WishList from '../screens/WishList.js';
import Profile from '../screens/profile.js';
import Home from '../screens/home';
import Search from '../screens/search.js';

const Tab = createBottomTabNavigator();
export default function Nav() {
	return (
		<>
			<Tab.Navigator
				screenOptions={({ route }, index) => ({
					tabBarIcon: ({ size, color, focused }) => {
						let tabIconName;
						if (route.name == 'Home') {
							tabIconName = focused ? 'home' : 'home-outline';
						} else if (route.name == 'Search') {
							tabIconName = focused ? 'search' : 'search-outline';
						} else if (route.name == 'WishList') {
							tabIconName = focused ? 'heart' : 'heart-outline';
						} else if (route.name == 'Notifications') {
							tabIconName = focused
								? 'notifications'
								: 'notifications-outline';
						} else if (route.name == 'Profile') {
							tabIconName = focused ? 'person' : 'person-outline';
						}
						return (
							<Ionicons
								key={index}
								name={tabIconName}
								size={size}
								color={color}
							/>
						);
					},
					tabBarShowLabel: false,
					headerShown: true,
					headerStyle: {
						backgroundColor: '#13d0ca',
					},
					tabBarActiveTintColor: '#fff',
					tabBarInactiveTintColor: '#fff',
					tabBarStyle: {
						position: 'absolute',
					
						left: 0,
						width: '100%',
						backgroundColor: '#13d0ca',
					},
				})}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen
					options={{
						headerTitle: () => <SearchInput />,
					}}
					name="Search"
					component={Search}
				/>
				<Tab.Screen name="Notifications" component={Notifications} />
				<Tab.Screen name="WishList" component={WishList} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator>
		</>
	);
}
