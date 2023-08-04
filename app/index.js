import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';
import ProductCard from './components/productCard';

const Stack = createNativeStackNavigator();

export default function Page() {
	return (
		<Stack.Navigator initialRouteName="ProductCard">
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="ProductCard" component={ProductCard} />
		</Stack.Navigator>
	);
}
