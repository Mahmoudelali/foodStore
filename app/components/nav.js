import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notificationss from "../screens/Notifications.js";
import SearchInput from "./searchInput.js";
import Profile from "../screens/profile.js";
import Home from "../screens/home";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Search from "../screens/search.js";
import Basket from "../screens/Basket.js";
import { useContext, useEffect } from "react";
import { DataContext } from "../index.js";
import { fonts } from "./css.js";
import * as Notifications from "expo-notifications";

const Tab = createBottomTabNavigator();

export default function Nav({ user, setUser, navigation }) {
  const [data, dataLoading, setData, setDataLoading, fetchData] =
    useContext(DataContext);

  useEffect(() => {
    const handleNotification = async (notification) => {
      const notificationContent = notification.data;
      console.log("Clicked Notification Content:", notificationContent);

      if (notificationContent && notificationContent.screen) {
        // Navigate to the specified screen
        navigation.navigate(notificationContent.screen);
      }
    };

    const subscription =
      Notifications.addNotificationResponseReceivedListener(handleNotification);

    return () => {
      subscription.remove();
    };
  }, [navigation]);

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
            fontFamily: fonts.regular,
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
              <SearchInput setData={setData} setLoading={setDataLoading} />
            ),
          }}
        >
          {() => (
            <Home
              data={data}
              loading={dataLoading}
              reFetch={fetchData}
              setDataLoading={setDataLoading}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          options={{
            headerTitle: <SearchInput />,
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen name="Notifications">
          {() => <Notificationss user={user} />}
        </Tab.Screen>
        <Tab.Screen name="Basket" component={Basket} />
        <Tab.Screen name="Profile" options={{ headerShown: false }}>
          {() => <Profile user={user} setUser={setUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
}
