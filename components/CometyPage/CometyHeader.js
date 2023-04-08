import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { setDisplayOverlay } from "../../store/reducers/commonData/commonDataReducer";
import { getDisplayOverlay } from "../../store/reducers/commonData/commonDataSelector";
import store from "../../store/store";
import OverlayComponent from "../CommonComponents/OverlayComponent";
import CometyHeaderHidden from "./CometyHeaderHidden";

const CometyHeader = () => {
  const [hiddenEnable, setHiddenEnable] = useState(false);
  const displayOverlay = getDisplayOverlay();
  useEffect(() => {
    setStatusBarBackgroundColor("#DEDDF1", true);
  }, []);
  function luckyDrawHandler() {
    store.dispatch(setDisplayOverlay(!displayOverlay));
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.textStyling}>April</Text>
        <View></View>
        <View>
          <Button onPress = {luckyDrawHandler} mode="outlined">Lucky Draw</Button>
        </View>
      </View>
      {hiddenEnable && <CometyHeaderHidden />}
      <TouchableWithoutFeedback onPress={() => setHiddenEnable(!hiddenEnable)}>
        <View style={styles.toggleBarContainerStyle}>
          <View style={styles.toggleBarStyle}></View>
        </View>
      </TouchableWithoutFeedback>
      {displayOverlay && <OverlayComponent><View style = {{height: 50, width: 50, backgroundColor: 'green'}}><Text>Hi</Text></View></OverlayComponent>}
    </View>
  );
};

export const styles = StyleSheet.create({
  containerMain: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50,
  },
  container: {
    padding: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    backgroundColor: "#DEDDF1",
  },
  textStyling: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#301934",
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
