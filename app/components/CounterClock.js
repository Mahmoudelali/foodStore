import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { calculateRemainingTime } from "./data";

const CountdownClock = ({ targetDate, isPoster }) => {
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime(targetDate);
      setRemainingTime(newRemainingTime);
    }, 1000);

    // Clear the interval on unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <View className="flex flex-row gap-x-0.5 mx-auto absolute top-3 px-2">
      {remainingTime.map(({ value, label }, index) => (
        <View key={index}>
          <Text
            className="text-center font-bold text-accent-100 mr-1"
            style={isPoster ? style.posterClock : style.productClock}
          >
            {value}
            {!isPoster && (
              <Text className="text-[10px] text-gray-600 lowercase">
                {label}
              </Text>
            )}
          </Text>
          {isPoster && <Text className="text-center text-xs">{label}</Text>}
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  posterClock: {
    fontSize: 18, //inside the offer
    // gap : 1
  },
  productClock: { fontSize: 13, fontWeight: 500, rowGap: 10 },
});
export default CountdownClock;
