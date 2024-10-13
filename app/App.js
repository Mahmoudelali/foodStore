import React from 'react';
import Toast from 'react-native-toast-message';
import BottomTab from './components/TabBar/BottomTab';
import Login from './screens/Login';

import { fonts } from './components/css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import { screens } from './common/screens';

const screenOptions = {
	headerShown: false,
	headerTintColor: 'white',
	headerStyle: {
		backgroundColor: '#13d0ca',
	},
	tabBarStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 10,
		height: 40,
	},
	headerTitleStyle: {
		fontFamily: fonts.regular,
	},
};

const App = () => {
	const Stack = createNativeStackNavigator();
	const state = useSelector((state) => state.common);

	return (
		<>
			<Toast
				visibilityTime={state.toastVisibilityTime}
				position="top"
				topOffset={50}
			/>
			<Stack.Navigator
				initialRouteName={screens.BOTTOMTAB}
				screenOptions={screenOptions}
			>
				<Stack.Screen name={screens.BOTTOMTAB} component={BottomTab} />
				<Stack.Screen name={screens.LOGIN} component={Login} />
			</Stack.Navigator>
		</>
	);
};

export default App;
