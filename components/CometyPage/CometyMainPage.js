import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Portal, Provider, Text } from "react-native-paper";
import CometyPopupInit from "../CometyDetails/CometyPopupInit";
import CometyHeader from "./CometyHeader";
import MainViewContainer from "./MainViewContainer";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import BottomNavBar from "./BottomNavBar";
import CometyHome from "./CometyHome";
import { useState } from "react";
import AccountsMainPage from "../AccountsPage/AccountsMainPage";

const CometyMainPage = () => {
  const [activeTab, setActiveTab] = useState("HOME");

  const activeTabRenderer = () => {
    switch (activeTab) {
      case "HOME":
        return <CometyHome />;
      case "ACCOUNTS":
        return <AccountsMainPage />
    }
  };
  return (
    <View style={styles.container}>
      <Provider style={styles.container}>
        <Portal>
          <CometyPopupInit />
        </Portal>
        <View style={styles.componentsContainer}>
          <View style={styles.top}>
            <CometyHeader />
          </View>
          <View style={styles.middle}>{activeTabRenderer()}</View>
          <View style={styles.bottom}>
            <BottomNavBar setActiveTab={setActiveTab} />
          </View>
        </View>
      </Provider>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  componentsContainer: {
    //TODO: Refactor this
    height: "100%",
    marginTop: 40,
    marginBottom: 40,
  },
  top: { flex: 0.1 },
  middle: { flex: 1, zIndex: -1 },
  bottom: {
    backgroundColor: "white",
    flex: 0.14,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});

export default CometyMainPage;
