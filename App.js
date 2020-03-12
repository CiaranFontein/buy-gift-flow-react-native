import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import { Slider } from "react-native-elements";
import { Button } from "./Components/Button";

const backgroundColor = "#f2f2f4";
const secondaryColor = "#38c2ab";

export default function App() {
  const [sliderValue, setSliderValue] = useState(25);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Image
            style={styles.banner}
            source={require("./assets/guustoCard.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Select Merchant</Text>
          <Text style={styles.centeredP}>
            Recipient will choose any partner merchant
          </Text>
          <Button text="Select" />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content: {
    width: "83%"
  },
  section: {
    justifyContent: "space-between",
    paddingVertical: 12
  },
  banner: {
    width: "100%",
    height: 100,
    paddingVertical: 24
  },
  h2: {
    fontWeight: "700",
    paddingVertical: 12
  },
  doubleHeadersection: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  centeredP: {
    textAlign: "center",
    paddingVertical: 12
  },
  sliderBar: {
    height: 1,
    opacity: 0.75
  },
  sliderThumb: {
    backgroundColor: "#fff",
    borderColor: secondaryColor,
    borderWidth: 1
  },
  sliderHeaders: {
    flexDirection: "row",
    alignItems: "flex-start",
    fontWeight: "700"
  },
  superScript: {
    fontSize: 16,
    fontWeight: "700",
    color: secondaryColor
  },
  sliderValueText: {
    fontSize: 32,
    fontWeight: "700",
    color: secondaryColor
  }
});
