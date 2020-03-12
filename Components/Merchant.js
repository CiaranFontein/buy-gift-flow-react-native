import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Linking } from "expo";
import styles from "../styles";

export default Merchant = ({ merchant, onPress, selected }) => {
  const {
    id,
    name,
    shoppingOption,
    minAmount,
    maxAmount,
    website,
    image
  } = merchant;

  let niceLookingShoppingOption = "";
  let currentlySelected = false;

  if (shoppingOption === "STORE") {
    niceLookingShoppingOption = "In-store";
  } else if (shoppingOption === "STORE_AND_ONLINE") {
    niceLookingShoppingOption = "In-store & Online";
  } else {
    niceLookingShoppingOption = "Online";
  }

  if (selected && selected.id === id) {
    currentlySelected = true;
  }

  return (
    <TouchableOpacity
      style={
        currentlySelected
          ? styles.selectedMerchantCardLayout
          : styles.merchantCardLayout
      }
      onPress={onPress}
    >
      <Image style={styles.squareImage} source={{ uri: image }} />
      <View style={styles.merchantTextContainer}>
        <Text style={styles.merchantName}>{name}</Text>
        <Text style={styles.lightText}>{niceLookingShoppingOption}</Text>
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
