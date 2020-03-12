import React from "react";
import { StyleSheet } from "react-native";

const backgroundColor = "#f2f2f4";
export const secondaryColor = "#38c2ab";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content: {
    width: "86%"
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
  p: {
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
    alignItems: "flex-start"
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
  },
  squareImage: {
    height: 90,
    width: 90,
    padding: 12
  },
  merchantCardLayout: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 90,
    marginTop: 12
  },
  selectedMerchantCardLayout: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 90,
    marginTop: 12,
    backgroundColor: "#fff"
  },
  merchantTextContainer: {
    justifyContent: "space-between",
    height: "100%",
    marginLeft: 12
  },
  merchantName: {
    fontWeight: "400",
    fontSize: 20
  },
  lightText: {
    opacity: 0.75
  },
  link: {
    color: secondaryColor
  },
  fadeOutScrollView: {
    position: "absolute",
    bottom: 116,
    width: "100%",
    height: 100
  },
  selectedMerchantContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  merchantList: {
    height: "75%"
  },
  searchBarContainer: {
    backgroundColor: backgroundColor,
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  searchInputContainer: {
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderRadius: 6,
    borderWidth: 1
  }
});
