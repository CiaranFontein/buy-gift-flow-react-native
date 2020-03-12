import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button } from "../Components/Button";
import Merchant from "../Components/Merchant";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";

const merchantsURL = "http://165.227.43.115:8080/merchant/merchant";
export default Merchants = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});

  async function fetchData() {
    setLoading(true);
    const res = await fetch(merchantsURL);
    res
      .json()
      .then(res =>
        setMerchants(res.sort((a, b) => a.name.localeCompare(b.name)))
      )
      .then(setLoading(false))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBar
          value=""
          placeholder="Search"
          onChangeText={searchText => setSearchText(searchText)}
          value={searchText}
        />
        <View>
          {!loading ? (
            merchants.map(merchant => (
              <Merchant
                key={merchant.id}
                merchant={merchant}
                onPress={() => {
                  return setSelected(merchant);
                }}
              />
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <Button
          text="Cancel"
          onPress={() =>
            navigation.navigate("Home", {
              merchant: null
            })
          }
        />
        <Button
          text="Select"
          onPress={() =>
            navigation.navigate("Home", {
              merchant: selected
            })
          }
        />
      </ScrollView>
      <LinearGradient
        style={styles.fadeOutScrollView}
        colors={["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.8)"]}
        pointerEvents={"none"}
      />
    </SafeAreaView>
  );
};
