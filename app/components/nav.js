import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "../screens/Notifications.js";
import SearchInput from "./searchInput.js";
import Profile from "../screens/profile.js";
import Home from "../screens/home";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Search from "../screens/search.js";
import useFetch from "./useFetch.js";
import Basket from "../screens/Basket.js";

const Tab = createBottomTabNavigator();

export default function Nav({ user, setUser }) {
  const uri = process.env.EXPO_PUBLIC_SERVER_URL + "api/getalloffers/";
  const [data, loading, setData, setLoading] = useFetch(uri);
  return (
    <>
      <StatusBar backgroundColor="#13d0ca" style="dark" />
      <Tab.Navigator
        screenOptions={({ route }, index) => ({
          tabBarIcon: ({ size, color, focused }) => {
            let tabIconName;
            if (route.name == "Home") {
              tabIconName = focused ? "home" : "home-outline";
            } else if (route.name == "Search") {
              tabIconName = focused ? "search" : "search-outline";
            } else if (route.name == "Basket") {
              tabIconName = focused ? "cart" : "cart-outline";
            } else if (route.name == "Notifications") {
              tabIconName = focused ? "notifications" : "notifications-outline";
            } else if (route.name == "Profile") {
              tabIconName = focused ? "person" : "person-outline";
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
          headerTitleStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#13d0ca",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            position: "absolute",
            bottom: Platform.OS === "ios" ? -25 : 0,
            left: 0,
            width: "100%",
            backgroundColor: "#13d0ca",
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <SearchInput setData={setData} setLoading={setLoading} />
            ),
          }}
        >
          {() => <Home data={data} loading={loading} />}
        </Tab.Screen>
        <Tab.Screen
          options={{
            headerTitle: <SearchInput />,
          }}
          name="Search"
          component={Search}
        />

        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Basket" component={Basket} />
        <Tab.Screen name="Profile" options={{ headerShown: false }}>
          {() => <Profile user={user} setUser={setUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
}
