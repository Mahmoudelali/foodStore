import { useFonts } from 'expo-font';
import { fonts } from './components/css';
import * as Notifications from 'expo-notifications';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.js';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

const screenOptions = {
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
	headerTitleStyle: {
		fontFamily: fonts.regular,
	},
};

export default function Page() {
	const [fontsLoaded] = useFonts({
		'Lato-Regular': require('./assets/Fonts/Lato-Regular.ttf'),
		'Lato-Light': require('./assets/Fonts/Lato-Light.ttf'),
		'Lato-Italic': require('./assets/Fonts/Lato-Italic.ttf'),
		'Lato-Bold': require('./assets/Fonts/Lato-Bold.ttf'),
		'Lato-BoldItalic': require('./assets/Fonts/Lato-BoldItalic.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
