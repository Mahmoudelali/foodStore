import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Switcher = ({ isEnabled }) => {
  const [enabled, setEnabled] = useState(isEnabled);
  return (
    <Pressable
      onPress={() => {
        setEnabled(!enabled);
      }}
      className="h-4 bg-gray-300 w-8 flex justify-center transition-all"
      style={[
        enabled ? styles.switcherEnabled : styles.switcherDisabled,
        { borderRadius: 12 },
      ]}
    >
      <View
        className="h-5 w-5"
        style={[
          enabled ? styles.enabledBGColor : styles.disabledBGColor,
          { borderRadius: 50 },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switcherEnabled: {
    alignItems: "flex-end",
  },
  switcherDisabled: {
    alignItems: "flex-start",
  },
  enabledBGColor: {
    backgroundColor: "#13d0ca",
  },
  disabledBGColor: {
    backgroundColor: "#bbb",
  },
});

export default Switcher;
