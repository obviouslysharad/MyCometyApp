import React from "react";
import { StyleSheet } from "react-native";
import CometyHome from "./CometyHome";


export default function MainViewContainer() {
  return <CometyHome />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
