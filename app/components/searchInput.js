import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = ({ setData, setLoading }) => {
  const [queryset, setQueryset] = useState(null);
  const [location, setLocation] = useState(null);
  const handleQuery = () => {
    if (!queryset && !location) {
      return "";
    } else if (queryset && !location) {
      return `?queryset=${queryset}`;
    } else if (location && !queryset) {
      return `?location=${location}`;
    } else {
      return `?location=${location}&queryset=${queryset}`;
    }
  };
  const allOffersURL = process.env.EXPO_PUBLIC_SERVER_URL + "api/getalloffers/";
  var filteringURI = `${
    process.env.EXPO_PUBLIC_SERVER_URL
  }api/searchoffers/${handleQuery()}`;
  let timeoutId = null;

  const getfilteredOffers = (url) => {
    setLoading(true);
    axios
      .get(`${url}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!queryset && !location) getfilteredOffers(allOffersURL);
    else {
      timeoutId = setTimeout(() => {
        getfilteredOffers(filteringURI);
      }, 600);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [queryset, location]);
  const inputFields = [
    {
      icon: "search",
      placeholder: "Search Coupway..",
      onChangeText: setQueryset,
    },
    {
      icon: "location-outline",
      placeholder: "Location",
      onChangeText: setLocation,
    },
  ];
  return (
    <View className="overflow-hidden">
      <View className="flex-row bg-white mx-auto">
        {inputFields.map((field, index) => (
          <View className="basis-3/5" key={index} style={style.inputFiled}>
            <Ionicons
              name={field.icon}
              size={20}
              color={"#13d0ca"}
              style={style.searchIcons}
            />
            <TextInput
              onChangeText={field.onChangeText}
              placeholder={field.placeholder}
              placeholderTextColor={"gray"}
              className="text-gray-600 leading-4 p-2"
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default SearchInput;

const style = StyleSheet.create({
  inputFiled: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
