import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button } from "../componentsLowerCase/Button";
import Merchant from "../componentsLowerCase/Merchant";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";

const merchantsURL = "http://165.227.43.115:8080/merchant/merchant";

export default Merchants = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(merchantsURL);
    res
      .json()
      .then(res => {
        setMerchants(res.sort((a, b) => a.name.localeCompare(b.name)));
        setLoading(false);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const searchFunction = searchText => {
    setSearchText(searchText);
    searchText === "" ? (searching = false) : (searching = true);
    searching
      ? setSearchResults(
          merchants.filter(merchant =>
            merchant.name.toUpperCase().includes(searchText.toUpperCase())
          )
        )
      : setSearchResults(merchants);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar
          style={styles.searchBar}
          value={searchText}
          placeholder="Search"
          onChangeText={searchText => {
            searchFunction(searchText);
          }}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchInputContainer}
        />

        {loading ? (
          <Text>...Loading</Text>
        ) : (
          <FlatList
            style={styles.merchantList}
            data={searchText === "" ? merchants : searchResults}
            renderItem={({ item }) => (
              <Merchant
                selected={selected}
                merchant={item}
                onPress={() => {
                  return setSelected(item);
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <LinearGradient
          style={styles.fadeOutScrollView}
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
          pointerEvents={"none"}
        />
        <Button text="Cancel" onPress={() => navigation.navigate("Home")} />
        <Button
          buttonType="filled"
          text="Select"
          onPress={() =>
            navigation.navigate("Home", {
              merchant: selected
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
