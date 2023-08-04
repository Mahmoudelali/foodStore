import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Card = ({ category, icon }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.flex1}>
        <Text style={styles.titleText}>{category}</Text>
      </View>
      <View style={styles.contentContainer} flexDirection="row-reverse">
        <Text style={styles.arrowIcon}>▶</Text>
        <MaterialCommunityIcons name={icon} size={24} color="rgb(19,208,203)" />
      </View>
    </TouchableOpacity>
  );
};

// const Card = ({ category, icon }) => {
//   return (
//     <TouchableOpacity className="cardContainer">
//       <View className="flex-1">
//         <Text className="text-bolack text-base">{category}</Text>
//       </View>
//       <View className="flex-1 flex-re items-center">
//         <Text className="text-bold tex0 text-xl ml-4">▶</Text>
//         <MaterialCommunityIcons name={icon} size={24} color="rgb(19,208,203)" />
//       </View>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    width: "90%",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  flex1: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    width: 64,
    height: 64,
  },
  arrowIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(19,208,203)",
    marginLeft: 16,
  },
});

export default Card;
