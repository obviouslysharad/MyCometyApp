import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import CometyTable from "./CometyTable";

const CometyHome = () => {
  function luckyDrawHandler() {
    store.dispatch(setActivePopup("LUCKY_DRAW"));
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CometyTable />
      </View>
      <View style={{ flex: 0.08, alignSelf: "center" }}>
        <Button
          textColor="white"
          style={styles.luckyDrawBtn}
          mode="outlined"
          onPress={luckyDrawHandler}
        >
          LUCKY DRAW
        </Button>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FAFAFA",
  },
  luckyDrawBtnContainer: {
    alignItems: "center",
  },
  luckyDrawBtn: {
    backgroundColor: "#6C63FF",
  },
});

export default CometyHome;
