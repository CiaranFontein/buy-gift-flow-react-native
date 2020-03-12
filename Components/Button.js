import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, text, buttonType }) => {
  return (
    <TouchableOpacity
      style={buttonType === "filled" ? styles.filledButton : styles.button}
      onPress={onPress}
    >
      <Text
        style={
          buttonType === "filled" ? styles.filledButtonText : styles.buttonText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderColor: "#38c2ab",
    borderWidth: 2,
    marginVertical: 6
  },
  filledButton: {
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#a0a0a0",
    borderColor: "#a0a0a0",
    marginVertical: 6
  },
  buttonText: {
    color: "#38c2ab",
    fontWeight: "700"
  },
  filledButtonText: {
    color: "#ececec",
    fontWeight: "700"
  }
});
