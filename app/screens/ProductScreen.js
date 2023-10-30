import React, { useContext, useRef } from "react";
import {
  View,
  Text,
  Linking,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { Entypo, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import ProductCard from "../components/productCard";
import ProductStats from "../components/ProductStats";
import ProductDetailSection from "../components/ProductDetailSection";
import Comment from "../components/Comment";
import Location from "../components/Location";
import Feedback from "../components/Reviews";
import CountdownClock from "../components/CounterClock";
import Button from "../components/Button";
import useFetch from "../components/useFetch";
import axios from "axios";
import { UserContext } from "../index.js";
import { fonts } from "../components/css";

const toast_options = {
  visibilityTime: 2000,
  position: "top",
  topOffset: 10,
};

const showToast = (type, label1, label2) => {
  return Toast.show({
    type: type,
    text1: label1,
    text2: label2 || "",
  });
};

const ProductScreen = ({ route }) => {
  const { product, qr_code } = route.params;

  console.log(product);
  const [user] = useContext(UserContext);
  const scrollRef = useRef();
  const toTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const sendWhatsAppMessage = (number, message) => {
    const whatsappUrl = `whatsapp://send?phone=${number}&text=${message}`;

    Linking.openURL(whatsappUrl)
      .then(() => console.log("WhatsApp message sent"))
      .catch((error) => {
        console.error("Error sending WhatsApp message", error);
        showToast("error", "Sorry! Something went wrong", "Try again later");
      });
  };

  const user_id = user.user_id;
  const offer_id = route.params.product;
  const server_uri = process.env.EXPO_PUBLIC_SERVER_URL;
  const uri = `${server_uri}api/getalloffers/${offer_id}`;
  const [data, loading] = useFetch(uri);

  const image = data?.main_picture;

  const order_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/createorder/`;
  const feedbacks_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}/provide-feedback`;
  let [feedbacks, feedbackLoading, setFeedbacks] = useFetch(feedbacks_uri);
  const order_data = [
    {
      user_id,
      offer_id,
      coupons_ordered: 1,
    },
  ];

  const postOffer = () => {
    const request_headers = {
      headers: {
        Authorization: "Token " + user.token,
      },
    };

    if (user.token === "dummy-token") {
      return showToast("error", "you must login first");
    }

    axios
      .post(order_uri, order_data, request_headers)
      .then((res) => {
        const offer = res.data[0];
        showToast(
          "success",
          "Order placed successfully",
          "Redirecting to Whatsapp.."
        );
        var message = `Hi, i'm interested to order the offer with 
Order id : ${res.data[0].id}
My id : ${offer.user_id}
Activate it for me ASAP, please.


${server_uri}admin/orders/order/${res.data[0].id}/change/
				`;
        console.log(res.data[0]);
        setTimeout(() => {
          sendWhatsAppMessage("96176325264", message);
        }, 2000);
      })
      .catch((err) => {
        console.log("error", err.message);
        showToast(
          "error",
          "Sorry, Failed to place order",
          "Please try again later"
        );
      });
  };

  const productScreenData = [
    qr_code && {
      title: "QR Code",
      textualContent:
        "Use this QR code in the desired store in order to redeem your coupon.",
      icon: <AntDesign name="qrcode" size={14} color="#13d0ca" />,
      extraComponent: (
        <View style={styles.qrCodeImageContainer}>
          <Image
            source={{ uri: `${server_uri}${qr_code}` }}
            style={styles.qrCodeImage}
          />
        </View>
      ),
    },
    {
      title: "What you get",
      textualContent: data?.compensations,
      icon: <Ionicons name="bulb" size={14} color="#13d0ca" />,
    },
    {
      title: "About This Deal",
      textualContent: data?.description,
      icon: <Entypo name="info-with-circle" size={14} color="#13d0ca" />,
    },
    {
      title: "The Fine Print",
      textualContent: data?.fine_print,
      icon: <Ionicons name="newspaper" size={14} color="#13d0ca" />,
    },
    {
      title: "Feedbacks",
      extraComponent: (
        <>
          {feedbackLoading ? (
            <ActivityIndicator />
          ) : feedbacks.length == 0 ? (
            <Text className="pb-6 pl-2 text-gray-500">
              No available feedbacks for this product!
            </Text>
          ) : (
            <Feedback feedbacks={feedbacks} />
          )}
          <Comment
            toTop={toTop}
            offer_id={offer_id}
            setFeedbacks={setFeedbacks}
            feedbacks={feedbacks}
            feedback_loading={feedbackLoading}
          />
        </>
      ),
      icon: <MaterialIcons name="feedback" size={14} color="#13d0ca" />,
    },
    {
      title: "Location",
      icon: <Ionicons name="ios-location" size={14} color="#13d0ca" />,
      extraComponent: <Location />,
    },
  ];
  return loading ? (
    <View className="min-h-screen justify-center">
      <ActivityIndicator />
    </View>
  ) : (
    <>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: 500,
        })}
        style={styles.container}
      >
        <ScrollView ref={scrollRef} keyboardShouldPersistTaps={"handled"}>
          <View className="flex-1 min-h-screen pb-8 bg-white">
            <ProductCard
              image={image}
              productScreen={true}
              isModuloFive={true}
              item={data}
            />
            <ProductStats
              fullValue={data.old_price}
              price={data.new_price}
              coupons={data.coupons}
            />
            {/* <CountdownClock
							isPoster={true}
							targetDate={'2023-10-31T23:59:59'}
						/> */}
            <View className="bg-white flex-1 pl-12 pr-2 pt-6 ">
              {productScreenData.map((section, index) => (
                <ProductDetailSection key={index} {...section} />
              ))}
            </View>
            <Toast {...toast_options} />
            <Button
              label={"Buy deal"}
              onPress={() => {
                postOffer();
                toTop();
              }}
              style={{ fontFamily: fonts.regular }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  qrCodeImageContainer: {
    maxHeight: 250,
  },
  qrCodeImage: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
export default ProductScreen;
