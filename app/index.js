import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

export default function Page() {
	return (
		<Stack.Navigator initialRouteName="Register">
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
}
