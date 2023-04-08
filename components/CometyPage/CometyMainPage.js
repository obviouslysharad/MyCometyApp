import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Portal, Provider } from "react-native-paper";
import CometyTable from "./CometyTable";
import CometyPopupInit from "../CometyDetails/CometyPopupInit";
import CometyHeader from "./CometyHeader";

const CometyMainPage = () => {
  
  return (
    <Provider>
      <Portal>
        <CometyPopupInit />
      </Portal>
      <CometyHeader/>
      <CometyTable />
    </Provider>
  );
};

export const styles = StyleSheet.create({
  container: {
    maxHeight: Dimensions.get("window").height,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 5,
    borderColor: "#E6E6FA",
  },
});

export default CometyMainPage;
