import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import store from "../../store/store";
import CometyHeaderHidden from "./CometyHeaderHidden";

const CometyHeader = () => {
  const [hiddenEnable, setHiddenEnable] = useState(false);
  useEffect(() => {
    setStatusBarBackgroundColor("#e6e2f5", true);
  }, []);
  function luckyDrawHandler() {
    store.dispatch(setActivePopup('LUCKY_DRAW'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text textColor = "#1a1629" style={styles.textStyling}>April</Text>
        <View>
          <Button buttonColor = "white" onPress = {luckyDrawHandler} mode="elevated">Lucky Draw</Button>
        </View>
      </View>
      {hiddenEnable && <CometyHeaderHidden />}
      <TouchableWithoutFeedback onPress={() => setHiddenEnable(!hiddenEnable)}>
        <View style={styles.toggleBarContainerStyle}>
          <View style={styles.toggleBarStyle}></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: "#e6e2f5",
  },
  containerMain: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textStyling: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#27213e"
  },
  toggleBarContainerStyle: {
    width: "100%",
    height: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleBarStyle: {
    height: 4,
    width: 32,
    backgroundColor: "#808080",
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default CometyHeader;
