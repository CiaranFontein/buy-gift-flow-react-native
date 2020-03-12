import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Linking } from "expo";
import styles from "../styles";

export default Merchant = ({ merchant, onPress }) => {
  const {
    name,
    shoppingOption,
    minAmount,
    maxAmount,
    website,
    image
  } = merchant;

  return (
    <TouchableOpacity style={styles.merchantCardLayout} onPress={onPress}>
      <Image style={styles.squareImage} source={{ uri: image }} />
      <View style={styles.merchantTextContainer}>
        <Text style={styles.merchantName}>{name}</Text>
        <Text style={styles.lightText}>{shoppingOption}</Text>
        <View>
          <Text style={styles.lightText}>
            ${minAmount} - ${maxAmount}
          </Text>
        </View>
        <Text style={styles.link} onPress={() => Linking.openURL(`${website}`)}>
          view website
        </Text>
      </View>
    </TouchableOpacity>
  );
};
