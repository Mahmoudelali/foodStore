import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordInput = ({ validate, password, setPassword, hint, errLabel }) => {
  const [passVisible, setPassVisible] = useState(false);

  return (
    <View>
      <Text className="uppercase font-bold text-xs text-gray-600 my-3">
        Password:
      </Text>
      <View>
        <TextInput
          onChangeText={setPassword}
          secureTextEntry={passVisible && true}
          keyboardType="default"
          className="py-3 border-2 border-dashed border-gray-400 px-3 relative"
        />
        <Pressable
          style={{
            display: password.length > 0 ? "absolute" : "none",
          }}
          className="absolute right-3 top-3 "
          onPress={() => {
            setPassVisible(!passVisible);
          }}
        >
          <View className="uppercase text-sm font-semibold text-gray-500">
            {!passVisible ? (
              <Ionicons name="eye-off-outline" size={24} color="gray" />
            ) : (
              <Ionicons name="eye-outline" size={24} color="gray" />
            )}
          </View>
        </Pressable>
      </View>
      <Text className="font-bold text-xs text-gray-600 my-3">{hint}</Text>
    </View>
  );
};

export default PasswordInput;
