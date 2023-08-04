
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Nav from "./components/nav";
import Register from './components/Register';

const Stack = createNativeStackNavigator();

export default function Page() {
	const token=true;
	const initialRouteName = token ? "Nav" : "Login";
	return (

		<>
		<Stack.Navigator initialRouteName={initialRouteName}>
			<Stack.Screen name="Nav" component={Nav} options={{headerShown:false}}/>

			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="ProductCard" component={ProductCard} />
		</Stack.Navigator>
	</>
	);
}
