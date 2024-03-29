import { registerIndieID } from "native-notify";
import React, { useState, createContext, useEffect, useRef } from "react";
import WelcomePage from "./screens/Welcome";
import ProductCard from "./components/productCard";
import Login from "./screens/Login";
import Nav from "./components/nav";
import Register from "./components/Register";
import ProductScreen from "./screens/ProductScreen";
import AddressBook from "./components/AddressBook";
import AddressBookEdit from "./components/AddressBook_edit";
import ChangePassword from "./screens/ChangePassword";
import MyCoupon from "./screens/myCoupon";
import PurchasedDeals from "./screens/purchasedDeals";
import UsedDeals from "./screens/usedDeals";
import ReservedDeals from "./screens/reservedDeals";
import Contact from "./screens/contactus";
import MyDetails from "./screens/MyDetails";
import About from "./screens/aboutUs";
import AboutCoupway from "./screens/aboutCoupWay";
import TermsCondition from "./screens/termsCondition";
import AppSetting from "./screens/appSetting";
import Checkout from "./screens/Checkout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FiltratedOffers from "./screens/customFiltrationScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { useFonts } from "expo-font";
import { fonts } from "./components/css";
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from "./components/ExpoNotifications.js";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const screenOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#13d0ca",
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 40,
    backgroundColor: "#13d0ca",
  },
  headerTitleStyle: {
    fontFamily: fonts.regular,
  },
};

export const BasketContext = createContext();
export const QueryContext = createContext();
export const LoggedInContext = createContext();
export const UserContext = createContext();
export const DataContext = createContext();

export default function Page() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [basket, setBasket] = useState([]);
  const [queryset, setQueryset] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const uri = process.env.EXPO_PUBLIC_SERVER_URL + "api/getalloffers/";

  const update_token_uri =
    user &&
    process.env.EXPO_PUBLIC_SERVER_URL +
      `api/updateuserprofile/${user?.user?.id}`;

  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) => {
      setExpoPushToken(token);

      const device_token = (await Notifications.getDevicePushTokenAsync()).data;

      user.user &&
        (await axios.put(update_token_uri, {
          user: user.user.id,
          notification_token: device_token,
        }));
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const fetchData = async () => {
    if (uri == null) return;
    setDataLoading(true);
    axios
      .get(uri)
      .then((response) => {
        setData(response.data);
        setDataLoading(false);
      })
      .catch((err) => {
        console.error(err, uri);
        setDataLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let data;
      try {
        data = await AsyncStorage.getItem("user_data");
        const parsedData = JSON.parse(data);
        setUser(parsedData);
        setIsLoggedIn(true);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    bootstrapAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/Fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/Fonts/Lato-Light.ttf"),
    "Lato-Italic": require("./assets/Fonts/Lato-Italic.ttf"),
    "Lato-Bold": require("./assets/Fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/Fonts/Lato-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Check if data is still loading and render a loading screen if true
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#13d0ca" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <DataContext.Provider
      value={[data, dataLoading, setData, setDataLoading, fetchData]}
    >
      <UserContext.Provider value={[user, setUser]}>
        <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <QueryContext.Provider value={[queryset, setQueryset]}>
            <BasketContext.Provider value={[basket, setBasket]}>
              <Stack.Navigator
                initialRouteName={"Nav"}
                screenOptions={screenOptions}
              >
                {user === null ? (
                  <>
                    <Stack.Screen name="Welcome">
                      {() => (
                        <WelcomePage
                          setUser={setUser}
                          setIsLoggedIn={setIsLoggedIn}
                        />
                      )}
                    </Stack.Screen>
                    <Stack.Screen name="Register">
                      {() => (
                        <Register
                          setUser={setUser}
                          setIsLoggedIn={setIsLoggedIn}
                        />
                      )}
                    </Stack.Screen>
                    <Stack.Screen name="Login">
                      {() => (
                        <Login
                          setUser={setUser}
                          setIsLoggedIn={setIsLoggedIn}
                        />
                      )}
                    </Stack.Screen>
                  </>
                ) : (
                  <>
                    <Stack.Screen name="ProductCard" component={ProductCard} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                    <Stack.Screen
                      options={{
                        title: "MY DETAILS",
                      }}
                      name="MyDetails"
                    >
                      {() => <MyDetails user={user.user} setUser={setUser} />}
                    </Stack.Screen>
                    <Stack.Screen name="AddressBook" component={AddressBook} />
                    <Stack.Screen
                      name="FiltratedOffers"
                      component={FiltratedOffers}
                    />
                    <Stack.Screen
                      name="ProductScreen"
                      component={ProductScreen}
                      options={({ route }) => {
                        const { title } = route.params;
                        return {
                          title: `${title}`,
                        };
                      }}
                    />
                    <Stack.Screen
                      name="ChangePassword"
                      component={ChangePassword}
                    />
                    <Stack.Screen
                      options={{
                        title: "edit address",
                      }}
                      name="AddressBookEdit"
                      component={AddressBookEdit}
                    />
                    <Stack.Screen
                      options={{
                        title: "MY COUPON",
                      }}
                      name="MyCoupon"
                      component={MyCoupon}
                    />
                    <Stack.Screen
                      options={{
                        title: "ABOUT COUPWAY",
                      }}
                      name="AboutCoupway"
                      component={AboutCoupway}
                    />
                    <Stack.Screen
                      options={{
                        title: "TERMS & CONDITION",
                      }}
                      name="TermsCondition"
                      component={TermsCondition}
                    />
                    <Stack.Screen
                      options={{
                        title: "PURCHASED DEALS",
                      }}
                      name="PurchasedDeals"
                      component={PurchasedDeals}
                    />
                    <Stack.Screen
                      options={{
                        title: "APP SETTING",
                      }}
                      name="AppSetting"
                      component={AppSetting}
                    />
                    <Stack.Screen
                      options={{
                        title: "ABOUT US",
                      }}
                      name="AboutUs"
                      component={About}
                    />
                    <Stack.Screen
                      options={{
                        title: "USED DEALS",
                      }}
                      name="UsedDeals"
                      component={UsedDeals}
                    />
                    <Stack.Screen
                      options={{
                        title: "RESERVED DEALS",
                      }}
                      name="ReservedDeals"
                      component={ReservedDeals}
                    />
                    <Stack.Screen
                      name="ContactUs"
                      component={Contact}
                      options={{
                        title: "CONTACT US",
                      }}
                    />
                    <Stack.Screen
                      name="Nav"
                      options={{
                        headerShown: true,
                        header: () => null,
                      }}
                    >
                      {({ navigation }) => (
                        <Nav
                          user={user}
                          setUser={setUser}
                          navigation={navigation}
                        />
                      )}
                    </Stack.Screen>
                  </>
                )}
              </Stack.Navigator>
            </BasketContext.Provider>
          </QueryContext.Provider>
        </LoggedInContext.Provider>
      </UserContext.Provider>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: "#13d0ca",
  },
});
