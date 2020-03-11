import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Image
            style={{ width: "100%", height: 100 }}
            source={require("./assets/guustoCard.png")}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Select Merchant</Text>
          <Text style={styles.centeredP}>
            Recipient will choose any partner merchant
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Select</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Set Value</Text>
          <Text>Slider Here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f4",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24
  },
  content: {
    width: "83%"
  },
  section: {
    justifyContent: "space-between",
    paddingVertical: 24
  },
  h2: {
    fontWeight: "700",
    paddingVertical: 24
  },
  centeredP: {
    textAlign: "center"
  },
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
