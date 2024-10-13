import Basket from '../../screens/Basket';
import Search from '../../screens/search';
import Home from '../../screens/Home/Home';
import Notifications from '../../screens/Notifications';
import AppSetting from '../../screens/appSetting';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { bottomTabScreens } from '../../common/screens';

function BottomTab() {
	const Tab = createBottomTabNavigator();

	const renderTabScreenOptions = ({ route }) => ({
		tabBarIcon: ({ focused, color, size }) => {
			let iconName;
			switch (route.name) {
				case bottomTabScreens.HOME:
					iconName = focused ? 'home' : 'home-outline';
					break;
				case bottomTabScreens.SEARCH:
					iconName = focused ? 'search' : 'search';
					break;
				case bottomTabScreens.NOTIFICATIONS:
					iconName = focused
						? 'notifications'
						: 'notifications-outline';
					break;
				case bottomTabScreens.BASKET:
					iconName = focused ? 'basket' : 'basket-outline';
					break;
				case bottomTabScreens.PROFILE:
					iconName = focused ? 'person' : 'person-outline';
					break;
			}
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		headerShown: false,
	});

	return (
		<Tab.Navigator screenOptions={renderTabScreenOptions}>
			<Tab.Screen name={bottomTabScreens.HOME} component={Home} />
			<Tab.Screen name={bottomTabScreens.SEARCH} component={Search} />
			<Tab.Screen
				name={bottomTabScreens.NOTIFICATIONS}
				component={Notifications}
			/>
			<Tab.Screen name={bottomTabScreens.BASKET} component={Basket} />
			<Tab.Screen
				name={bottomTabScreens.PROFILE}
				component={AppSetting}
			/>
		</Tab.Navigator>
	);
}

export default BottomTab;
