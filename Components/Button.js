import React from "react";

import { Text, TouchableOpacity } from "react-native";

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
