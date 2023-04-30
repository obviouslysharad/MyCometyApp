import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Modal } from "react-native-paper";
import { setActivePopup } from "../../store/reducers/commonData/commonDataReducer";
import { getActivePopup } from "../../store/reducers/commonData/commonDataSelector";
import store from "../../store/store";
import CometyLuckyDraw from "./CometyLuckyDraw";
import CometyMemberAdd from "./CometyMemberAdd";
import CometyStartConfirm from "./CometyStartConfirm";
import Animated, { SlideInDown } from "react-native-reanimated";

const CometyPopupInit = () => {
  const activePopup = getActivePopup();
  const renderActivePopup = () => {
    switch (activePopup) {
      case "MEMBER_ADD":
        return <CometyMemberAdd />;
      case "MEMBER_CONFIRM":
        return <CometyStartConfirm />;
      case "LUCKY_DRAW":
        return <CometyLuckyDraw />;
    }
  };
  return (
    <Modal
      onDismiss={() => store.dispatch(setActivePopup(""))}
      visible={activePopup}
      style={styles.modalContainer}
    >
      <Animated.View entering={SlideInDown.delay(0)} style={styles.container}>
        {renderActivePopup()}
      </Animated.View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    maxHeight: Dimensions.get("screen").height,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
});

export default CometyPopupInit;
