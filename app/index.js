import { View } from "react-native";
import Home from "./screens/home";
import Search from "./screens/search.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialIcons,
  Feather,
  Ionicons,
  Fontisto,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Notification from "./screens/notification.js";
import Fav from "./screens/fav.js";
import Profile from "./screens/profile.js";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 40,
    backgroundColor: "#13d0ca",
  },
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createNativeStackNavigator();

function Nav(){
	return (
	
		  <Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
			  name="Home"
			  component={Home}
			  options={{
				tabBarIcon: ({ focused }) => {
				  return (
					<View
					  style={{ alignItems: "center", justifyContent: "center" }}
					>
					  {focused ? (
						<Fontisto name="home" size={24} color={"#e2fafb"} />
					  ) : (
						<SimpleLineIcons name="home" size={24} color={"#e2fafb"} />
					  )}
					</View>
				  );
				},
			  }}
			/>
			<Tab.Screen
			  name="Search"
			  component={Search}
			  options={{
				tabBarIcon: ({ focused }) => {
				  return (
					<View
					  style={{ alignItems: "center", justifyContent: "center" }}
					>
					  {focused ? (
						<Feather name="search" size={24} color={"#e2fafb"} />
					  ) : (
						<AntDesign name="search1" size={24} color={"#e2fafb"} />
					  )}
					</View>
				  );
				},
			  }}
			/>
			<Tab.Screen
			  name="Notification"
			  component={Notification}
			  options={{
				tabBarIcon: ({ focused }) => {
				  return (
					<View
					  style={{ alignItems: "center", justifyContent: "center" }}
					>
					  {focused ? (
						<Ionicons
						  name="ios-notifications-sharp"
						  size={24}
						  color={"#e2fafb"}
						/>
					  ) : (
						<Ionicons
						  name="ios-notifications-outline"
						  size={24}
						  color={"#e2fafb"}
						/>
					  )}
					</View>
				  );
				},
			  }}
			/>
			<Tab.Screen
			  name="Fav"
			  component={Fav}
			  options={{
				tabBarIcon: ({ focused }) => {
				  return (
					<View
					  style={{ alignItems: "center", justifyContent: "center" }}
					>
					  {focused ? (
						<MaterialIcons
						  name="favorite"
						  size={24}
						  color={"#e2fafb"}
						/>
					  ) : (
						<MaterialIcons
						  name="favorite-border"
						  size={24}
						  color={"#e2fafb"}
						/>
					  )}
					</View>
				  );
				},
			  }}
			/>
			<Tab.Screen
			  name="Profile"
			  component={Profile}
			  options={{
				tabBarIcon: ({ focused }) => {
				  return (
					<View
					  style={{ alignItems: "center", justifyContent: "center" }}
					>
					  {focused ? (
						<Ionicons name="person" size={24} color={"#e2fafb"} />
					  ) : (
						<Ionicons
						  name="person-outline"
						  size={24}
						  color={"#e2fafb"}
						/>
					  )}
					</View>
				  );
				},
			  }}
			/>
		  </Tab.Navigator>

	  );
}
export default function Page() {
	const token=true;
	const initialRouteName = token ? "Nav" : "Login";
	return (
		<>
		
		<Stack.Navigator initialRouteName={initialRouteName}>
			<Stack.Screen name="Nav" component={Nav} options={{headerShown:false}}/>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
		</>
	);
}
