import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderColor: "#38c2ab",
    borderWidth: 2,
    marginVertical: 24
  },
  buttonText: {
    color: "#38c2ab"
  }
});
