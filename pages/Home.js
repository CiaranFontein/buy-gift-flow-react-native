import React, { useState } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import { Slider } from "react-native-elements";
import { Button } from "../components/Button";

import styles, { secondaryColor } from "../styles";

export default Home = ({ navigation, route }) => {
  const [sliderValue, setSliderValue] = useState(25);
  const [selected, setSelected] = useState(null);
  if (!selected && route.params && route.params.merchant)
    setSelected(route.params.merchant);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Image
            style={styles.banner}
            source={require("../assets/guustoCard.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Select Merchant</Text>
          {selected ? (
            <>
              <View style={styles.selectedMerchantContainer}>
                <Image
                  style={styles.squareImage}
                  source={{ uri: selected.image }}
                />
              </View>
              <Button
                text="Remove"
                onPress={() => {
                  setSelected(null);
                  navigation.setParams({ merchant: null });
                }}
              />
            </>
          ) : (
            <>
              <View style={styles.selectedMerchantContainer}>
                <Text style={styles.p}>
                  Recipient will choose any partner merchant
                </Text>
              </View>
              <Button
                text="Select"
                onPress={() => navigation.navigate("Merchants")}
              />
            </>
          )}
        </View>
        <View style={styles.section}>
          <View style={styles.doubleHeadersection}>
            <Text style={styles.h2}>Set Value</Text>
            <View style={styles.sliderHeaders}>
              <Text style={styles.superScript}>$</Text>
              <Text style={styles.sliderValueText}>{sliderValue}</Text>
            </View>
          </View>
          <Slider
            animateTransitions={true}
            step={5}
            value={25}
            maximumValue={200}
            minimumTrackTintColor={secondaryColor}
            trackStyle={styles.sliderBar}
            thumbStyle={styles.sliderThumb}
            onValueChange={sliderValue => setSliderValue(sliderValue)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
