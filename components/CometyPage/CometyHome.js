import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import CometyTable from "./CometyTable";

const CometyHome = () => {
  function luckyDrawHandler() {
    store.dispatch(setActivePopup("LUCKY_DRAW"));
  }
  return (
    <Animated.View entering = {FadeIn} exiting = {FadeOut} style={styles.container}>
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
    </Animated.View >
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
    height: 43
  },
});

export default CometyHome;
