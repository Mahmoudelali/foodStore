import React, { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import Toast from "react-native-toast-message";
import { fonts } from "./css";
const toast_options = {
  visibilityTime: 2000,
  position: "top",
  topOffset: 10,
};

const Comment = ({ offer_id, setFeedbacks, feedbacks, toTop }) => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);

  const user_id = 1;

  let req_body = { user_id, offer_id, feedback_content: "" };
  useEffect(() => {
    req_body = { ...req_body, feedback_content: feedback };
  }, [feedback]);
  const feedback_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}/provide-feedback`;
  const handlePostFeedback = () => {
    axios
      .post(feedback_uri, req_body)
      .then((response) => {
        console.log(response.data);
        setFeedbacks([...feedbacks, response.data]);
        setFeedback("");
        setError(false);
        Toast.show({
          type: "success",
          text1: "Thanks for your feedback",
          text2: "It is highly appreciated",
          position: "top",
          ...toast_options,
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="bg-gray-100 px-4 py-6 flex flex-row gap-x-2  flex-1 ">
        <TextInput
          className="bg-white w-[85%] pl-2"
          keyboardType="default"
          placeholder="Write a comment..."
          placeholderTextColor={"gray"}
          multiline={true}
          onChangeText={setFeedback}
          value={feedback}
          style={{ fontFamily: fonts.regular }}
        />
        <Pressable
          onPress={() => {
            feedback != "" && toTop();
            feedback != "" ? handlePostFeedback() : setError(true);
          }}
        >
          <MaterialIcons name="insert-comment" size={26} color={"#13d0ca"} />
        </Pressable>
      </View>
      {error && (
        <Text
          style={{ fontFamily: fonts.regular }}
          className="text-red-500 ml-1 text-xs"
        >
          Please Provide a valid feedback..
        </Text>
      )}
    </KeyboardAvoidingView>
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
});
export default Comment;
