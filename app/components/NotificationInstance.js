import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { fonts } from "./css";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotificationInstance = ({ title, body, offer, link }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        link ? navigation.navigate(`${link}`) : "";
      }}
    >
      <View className="flex-row h-20 bg-white my-2 items-center p-1 justify-between">
        <View className=" w-[30%]">
          <Image
            source={{
              uri: `${
                process.env.EXPO_PUBLIC_SERVER_URL
              }${offer.main_picture.slice(1)}`,
            }}
            alt="food image"
            resizeMode={"cover"}
            style={styles.imageStyles}
          />
        </View>
        <View className="ml-1 px-1 justify-evenly max-w-[70%]">
          <View className="self-start">
            <Text
              style={{ fontFamily: fonts.regular }}
              className="text-base text-gray-500"
            >
              {title}
            </Text>
            <Text>
              <Text style={{ fontFamily: fonts.regular }} className="text-xs">
                {body}
              </Text>
            </Text>
          </View>
        </View>
        {link && (
          <View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#13d0ca"
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default NotificationInstance;

const styles = StyleSheet.create({
  imageStyles: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
