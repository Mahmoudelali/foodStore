import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Linking, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import BasketItem from "../components/BasketItem";
import NotFound from "../components/NotFound";
import Button from "../components/Button";
import axios from "axios";
import Toast from "react-native-toast-message";
import { UserContext } from "../index.js";

const Basket = () => {
  const [user] = useContext(UserContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [basket, setBasket] = useState([]);
  const user_id = user.user_id;
  const order_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/createorder/`;
  const admin_number = process.env.EXPO_PUBLIC_ADMIN_NUMBER;
  const server_uri = process.env.EXPO_PUBLIC_SERVER_URL;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      AsyncStorage.getItem("offers")
        .then((storedOffers) => {
          if (storedOffers === null) setLoading(false);
          if (storedOffers) {
            const parsedOffers = JSON.parse(storedOffers);
            setBasket(parsedOffers);
            setLoading(false);
          }
        })
        .catch((err) => console.log("error loading basket"));
    });
    return unsubscribe;
  }, []);
  const sendWhatsAppMessage = (number, message) => {
    const whatsappUrl = `whatsapp://send?phone=${number}&text=${message}`;
    Linking.openURL(whatsappUrl)
      .then(() => console.log("WhatsApp message sent"))
      .catch((error) => {
        console.error("Error sending WhatsApp message", error);
        showToast("error", "Sorry! Something went wrong", "Try again later");
      });
  };
  const emptyBasketData = async () => {
    try {
      await AsyncStorage.removeItem("offers");
      setBasket([]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const showToast = (type, label1, label2) => {
    return Toast.show({
      type: type,
      text1: label1,
      text2: label2 || "",
    });
  };

  const postOffer = () => {
    if (user.token === "dummy-token") {
      return showToast("error", "you must login first");
    }
    setLoading(true);
    const req_body = [];
    let offer_data = {
      user_id,
      coupons_ordered: 1,
    };
    for (let i in basket) {
      offer_data.offer_id = basket[i].id;
      req_body.push(offer_data);
      offer_data = { user_id, coupons_ordered: 1 };
    }
    const request_headers = {
      headers: {
        Authorization: "Token " + user.token,
      },
    };
    console.log(request_headers);

    axios
      .post(order_uri, req_body, request_headers)
      .then(() => {
        let message = `Hi COUPWAY
I AM interested in palcing an order to thse offers
${req_body.map((off) => {
  return `
My ID : ${off.user_id}
OFFER ID : ${off.offer_id}
${server_uri}admin/orders/order/${res.data.id}/change/
`;
})}
`;
        showToast(
          "success",
          "Order placed successfully",
          "Redirecting to Whatsapp"
        );
        setTimeout(() => {
          sendWhatsAppMessage(admin_number, message);
        }, 1500);
        emptyBasketData();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        showToast("error", "sorry, something went wrong");
        setLoading(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="relative z-10">
        <Toast visibilityTime={2000} position="top" topOffset={10} />
      </View>
      {loading || !basket ? (
        <View className="flex-1 justify-center">
          <ActivityIndicator />
        </View>
      ) : basket.length == 0 ? (
        <NotFound label="Which List is empty!" />
      ) : (
        <View className="pb-20 ">
          <View>
            {basket.map((off, index) => {
              return (
                <BasketItem
                  pressHandler={() =>
                    navigation.push("ProductScreen", {
                      product: off.id,
                      productScreen: true,
                    })
                  }
                  key={index}
                  highlights={off.highlights}
                  location={off.company.city}
                  placeName={off.company.name}
                  price={off.new_price}
                  image={off.main_picture}
                />
              );
            })}
          </View>
          <Button
            label={"Proceed to Checkout"}
            buttonStyle={{
              marginTop: 10,
            }}
            onPress={() => postOffer()}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Basket;
